"""Mind & Well Companion server (Python).

Run:  pip install -r requirements.txt
      python chatbot_server.py
Then open chatbot.html. The page detects this server automatically.

Two engines:
  1. Intent model: TF-IDF (character n-grams) + cosine similarity over intents.js.
  2. Optional Claude: if ANTHROPIC_API_KEY is set, answers a wide range of questions
     with a safety-focused system prompt. A crisis check always runs first.
"""
import json, os, random, re
from flask import Flask, jsonify, request, send_from_directory
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

HERE = os.path.dirname(os.path.abspath(__file__))
raw = open(os.path.join(HERE, "intents.js"), encoding="utf-8").read()
ITEMS = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])["items"]

SOS = re.compile(r"suicid|kill myself|end my life|self.?harm|hurt myself|want to die|no reason to live|better off dead", re.I)
ED = re.compile(r"skip(ping)? meals|not eating|starv|purg(e|ing)|binge|hate my body", re.I)
SUP = ("I'm really sorry you're feeling this way. You deserve support right now. Please reach out to someone you trust, "
       "or call Tele-MANAS (India, 24/7) on 14416. If you are in immediate danger, call 112.")
EDR = ("That sounds hard, and I'm glad you said it. I can't give diet or weight advice, but you deserve care. "
       "Please talk to someone you trust, or a doctor or counsellor, about it.")
LEXICON = {"sad": "sad down cry lonely empty hopeless", "anxious": "anxious worried nervous scared panic afraid",
           "angry": "angry mad furious annoyed frustrated", "stressed": "stress pressure overwhelmed deadline exam",
           "happy": "happy glad great excited proud good"}

patterns, owner = [], []
for i, it in enumerate(ITEMS):
    for p in it["p"]:
        patterns.append(p)
        owner.append(i)
vec = TfidfVectorizer(analyzer="char_wb", ngram_range=(3, 5), sublinear_tf=True)
MATRIX = vec.fit_transform(patterns)

try:
    import anthropic
    CLIENT = anthropic.Anthropic() if os.environ.get("ANTHROPIC_API_KEY") else None
except Exception:
    CLIENT = None
MODEL = os.environ.get("MINDCARE_MODEL", "claude-sonnet-5-5")
SYSTEM = ("You are Mind & Well Companion, a warm, kind listening companion for students. You are an AI, not a doctor or "
          "therapist. Use short, simple, human replies. Validate feelings first and ask at most one gentle question. "
          "You can talk about everyday life, study, friendships, family, goals, hobbies and general questions. For health topics give only general information. Never diagnose, "
          "prescribe, give diet or calorie targets, or promise cures. For self-harm, suicide, abuse or danger, respond calmly, "
          "keep it short, and encourage contacting a trusted person, Tele-MANAS 14416 (India, 24/7) or 112. "
          "Encourage real-world support from friends, family and counsellors.")

def emotion_of(text):
    words = set(re.findall(r"[a-z']+", text.lower()))
    for emo, bag in LEXICON.items():
        if words & set(bag.split()):
            return emo
    return "neutral"

def pack(it):
    return {"reply": random.choice(it["r"]) + (" " + it["q"] if it["q"] else ""), "emotion": it["emo"], "link": it["l"]}

def intent_reply(msg):
    text = msg.lower()
    # 1) exact phrase match (longest phrase wins)
    best, score = None, 0
    for pat, i in zip(patterns, owner):
        if re.search(r"\b" + re.escape(pat) + r"\b", text):
            s = 1 + len(pat.split()) * 0.5 + len(pat) / 40
            if s > score:
                best, score = i, s
    if best is not None:
        return pack(ITEMS[best])
    # 2) fuzzy match (handles typos), only when the match is close
    sims = cosine_similarity(vec.transform([text]), MATRIX)[0]
    j = int(sims.argmax())
    return pack(ITEMS[owner[j]]) if sims[j] >= 0.6 else None

def llm_reply(msg, history):
    clean = []
    for m in history[-8:]:
        if m.get("role") in ("user", "assistant") and m.get("content"):
            if clean and clean[-1]["role"] == m["role"]:
                continue
            clean.append({"role": m["role"], "content": str(m["content"])[:1000]})
    while clean and clean[0]["role"] != "user":
        clean.pop(0)
    if clean and clean[-1]["role"] == "user":
        clean.pop()
    resp = CLIENT.messages.create(model=MODEL, max_tokens=400, system=SYSTEM,
                                  messages=clean + [{"role": "user", "content": msg[:1000]}])
    return resp.content[0].text

app = Flask(__name__, static_folder=HERE, static_url_path="")

@app.after_request
def cors(r):
    r.headers["Access-Control-Allow-Origin"] = "*"
    r.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return r

@app.get("/")
def home():
    return send_from_directory(HERE, "index.html")

@app.get("/<path:filename>")
def site_file(filename):
    # Serve the existing Mind & Well pages/assets from the same Flask server.
    return send_from_directory(HERE, filename)

@app.get("/health")
def health():
    return jsonify(ok=True, llm=CLIENT is not None)

@app.route("/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return ("", 204)
    data = request.get_json(silent=True) or {}
    msg = str(data.get("message", "")).strip()
    if not msg:
        return jsonify(reply="Tell me what's on your mind.", emotion="neutral", link=None)
    if SOS.search(msg):
        return jsonify(reply=SUP, emotion="concerned", link=["Get Support", "support.html"])
    if ED.search(msg):
        return jsonify(reply=EDR, emotion="concerned", link=["Get Support", "support.html"])
    if CLIENT:
        try:
            return jsonify(reply=llm_reply(msg, data.get("history", [])), emotion=emotion_of(msg), link=None)
        except Exception as e:
            print("LLM error, using intent model:", e)
    hit = intent_reply(msg)
    if hit:
        return jsonify(**hit)
    if re.search(r"\b(what|why|how|who|when|where|which)\b", msg.lower()):
        return jsonify(reply="That's outside what I can answer without the Claude connection, because I'm focused on student well-being. "
                             "Set ANTHROPIC_API_KEY and restart the server for wide-range answers, or ask me about stress, sleep, exams, loneliness or focus.",
                       emotion="neutral", link=None)
    return jsonify(reply="I’m listening. Tell me a little more about what happened, what you are thinking, or what you would like me to understand.",
                   emotion=emotion_of(msg), link=None)

if __name__ == "__main__":
    print("MindCare Guide server on http://127.0.0.1:5000 | Claude:", "on" if CLIENT else "off (intent model only)")
    app.run(host="127.0.0.1", port=5000, debug=True)
