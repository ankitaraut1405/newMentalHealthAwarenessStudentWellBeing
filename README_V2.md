# MindCare V2

This version keeps the original multi-page project and improves the visual design.

## Main changes
- Calm lavender + mint visual theme
- Modern rounded cards, buttons and responsive layout
- Helpful local SVG illustrations in `assets/`
- Home page now highlights the Python/Flask chatbot
- Chatbot page has a visual hero and Python engine status
- Existing pages/features are preserved

## Python chatbot

```bash
pip install -r requirements.txt
python chatbot_server.py
```

Then open `chatbot.html` in your browser. The page first tries the Flask endpoint at `http://127.0.0.1:5000` and falls back to the built-in browser intent logic if the server is not running.

If an `ANTHROPIC_API_KEY` is configured, the backend can optionally use the configured Claude client; otherwise the local TF-IDF intent model is used.

## Safety
MindCare is an educational wellness companion, not a doctor or therapist. The backend includes crisis and eating-related safety checks and directs users toward real-world support.
