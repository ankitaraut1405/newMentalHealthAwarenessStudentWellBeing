// Shared knowledge for the MindCare Guide (used by the website and chatbot_server.py)
window.INTENTS={
"items": [
{
"tag": "greeting",
"emo": "happy",
"p": [
"hi",
"hello",
"hey",
"hii",
"good morning",
"good evening",
"namaste"
],
"r": [
"Hi! I'm glad you're here. How are you feeling today?",
"Hello! It's nice to meet you. What's on your mind?"
],
"q": "",
"l": null
},
{
"tag": "smalltalk",
"emo": "happy",
"p": [
"how are you",
"what's up",
"whats up",
"how is your day"
],
"r": [
"I'm doing well, thanks for asking. I'm more interested in how you are."
],
"q": "How are you feeling today?",
"l": null
},
{
"tag": "thanks",
"emo": "happy",
"p": [
"thank you",
"thanks",
"thx",
"that helped",
"helpful"
],
"r": [
"You're very welcome. I'm happy that helped. Is there anything else on your mind?"
],
"q": "",
"l": null
},
{
"tag": "bye",
"emo": "neutral",
"p": [
"bye",
"goodbye",
"see you",
"good night",
"talk later"
],
"r": [
"Take care of yourself. I'm here whenever you want to talk. Be kind to yourself today."
],
"q": "",
"l": null
},
{
"tag": "about_bot",
"emo": "neutral",
"p": [
"who are you",
"what are you",
"are you a bot",
"are you human",
"are you real",
"what can you do"
],
"r": [
"I'm the MindCare Guide, an automated helper for student well-being. I'm not a person, doctor or therapist, but I can listen, share coping ideas and point you to real support."
],
"q": "What would you like to talk about?",
"l": null
},
{
"tag": "stress",
"emo": "stressed",
"p": [
"i am stressed",
"stressed out",
"so much stress",
"under pressure",
"stress",
"tension"
],
"r": [
"That sounds really tiring. Stress is common for students. Try splitting what you must do into small steps, take a short break, and breathe slowly for a minute.",
"I'm sorry you're carrying so much. When everything feels urgent, pick one task for the next 25 minutes and let the rest wait."
],
"q": "What is stressing you the most right now?",
"l": [
"Breathing trainer",
"relax.html#breathing"
]
},
{
"tag": "anxiety",
"emo": "anxious",
"p": [
"anxious",
"anxiety",
"worried",
"worry",
"nervous",
"overthinking",
"scared",
"afraid",
"what if"
],
"r": [
"Feeling anxious is uncomfortable, and you're not alone. Slow breathing with a longer breath out can help your body settle. Writing the worry down can also make it feel smaller.",
"That sounds worrying. Try separating what you can control from what you can't, then act on one small thing you can control."
],
"q": "Is there a specific thing you keep worrying about?",
"l": [
"Breathing trainer",
"relax.html#breathing"
]
},
{
"tag": "panic",
"emo": "panic",
"p": [
"panic",
"panic attack",
"can't breathe",
"cant breathe",
"heart racing",
"chest tight"
],
"r": [
"I'm here with you. Try to slow down: breathe in gently through your nose, then out slowly through your mouth, a little longer than the breath in. Sit somewhere safe and remind yourself that this feeling passes. If you have chest pain, trouble breathing that doesn't ease, or you worry it may be physical, please get medical help right away."
],
"q": "Are you somewhere safe right now?",
"l": [
"Support",
"support.html"
]
},
{
"tag": "exam",
"emo": "stressed",
"p": [
"exam",
"exams",
"test tomorrow",
"study stress",
"board exam",
"viva"
],
"r": [
"Exam time is heavy for most students. Study in 25-minute blocks with short breaks, sleep properly, and start with the topics that carry the most marks.",
"It's normal to feel nervous before exams. Do a few slow breaths before you start, and begin with the question you know best."
],
"q": "How many days do you have left to prepare?",
"l": [
"Breathing trainer",
"relax.html#breathing"
]
},
{
"tag": "failure",
"emo": "sad",
"p": [
"failed",
"i failed",
"bad result",
"low marks",
"backlog",
"not good enough at studies"
],
"r": [
"I'm sorry, that really hurts. One result doesn't define your worth or your future. Give yourself a little time, then ask a teacher what to do next. Many people recover from setbacks."
],
"q": "Do you want to talk through what happened?",
"l": null
},
{
"tag": "sleep",
"emo": "tired",
"p": [
"can't sleep",
"cant sleep",
"insomnia",
"sleepless",
"sleep problem",
"awake at night",
"sleep"
],
"r": [
"Poor sleep makes everything harder. Try a fixed bedtime, no phone for 30 minutes before bed, and writing tomorrow's worries on paper. Slow breathing can help you wind down.",
"Late nights are common for students. A regular wake-up time helps your body clock a lot. If sleep problems last for weeks, please see a doctor."
],
"q": "What time do you usually go to bed?",
"l": [
"Calm exercises",
"relax.html"
]
},
{
"tag": "sad",
"emo": "sad",
"p": [
"sad",
"feeling down",
"feel low",
"depressed",
"crying",
"empty",
"unhappy"
],
"r": [
"I'm sorry you're feeling this way. It's okay to feel sad, and I'm glad you told me. Be gentle with yourself today. Talking to someone you trust can lighten the load.",
"That sounds heavy. You don't have to handle it alone. If this feeling has lasted for weeks, please consider talking to a counsellor or doctor."
],
"q": "Would you like to tell me what's been happening?",
"l": [
"Get support",
"support.html"
]
},
{
"tag": "lonely",
"emo": "lonely",
"p": [
"lonely",
"alone",
"no friends",
"no one understands",
"isolated",
"left out"
],
"r": [
"Loneliness hurts, and many students feel it more than they say. Small steps help: message one person, join one club or study group, or sit with someone in the canteen. Real connection grows slowly."
],
"q": "Is there one person you could reach out to this week?",
"l": null
},
{
"tag": "anger",
"emo": "angry",
"p": [
"angry",
"anger",
"frustrated",
"irritated",
"furious",
"i hate"
],
"r": [
"It's okay to feel angry. Try to pause before reacting: breathe slowly, step away for a few minutes, or walk it off. When you're calmer, say what you need using 'I feel' sentences."
],
"q": "What made you feel this way?",
"l": null
},
{
"tag": "overwhelmed",
"emo": "overwhelmed",
"p": [
"overwhelmed",
"too much",
"can't cope",
"cant cope",
"everything is too much",
"drowning in work"
],
"r": [
"That sounds like a lot at once. Write everything down, pick the single most important item, and do only that for 25 minutes. It's okay to ask for help or for more time."
],
"q": "What is the one thing that feels heaviest right now?",
"l": [
"5-minute reset",
"relax.html"
]
},
{
"tag": "motivation",
"emo": "low",
"p": [
"no motivation",
"unmotivated",
"don't feel like",
"dont feel like",
"lazy",
"no energy to study",
"motivated",
"how to stay motivated"
],
"r": [
"Motivation often follows action, not the other way round. Start with a tiny task, like opening your notes for 5 minutes. Rest is part of progress too, so be kind to yourself."
],
"q": "What is one very small thing you could start with?",
"l": null
},
{
"tag": "procrastination",
"emo": "stuck",
"p": [
"procrastinate",
"procrastination",
"keep delaying",
"putting off",
"postpone"
],
"r": [
"Procrastination is often about feeling overwhelmed, not laziness. Try the 10-minute rule: work for just 10 minutes, then decide whether to continue. Keep your phone out of reach."
],
"q": "Which task are you avoiding?",
"l": null
},
{
"tag": "focus",
"emo": "distracted",
"p": [
"can't focus",
"cant focus",
"concentrate",
"distracted",
"mind wandering",
"attention",
"focus",
"how to focus",
"focus better",
"study better"
],
"r": [
"Try 25 minutes of focused work and 5 minutes of rest. Put your phone out of reach, keep water nearby, and jot distracting thoughts on paper to deal with later."
],
"q": "What usually distracts you the most?",
"l": null
},
{
"tag": "relationships",
"emo": "hurt",
"p": [
"breakup",
"heartbreak",
"girlfriend",
"boyfriend",
"relationship",
"fight with friend",
"friend problem",
"partner"
],
"r": [
"Relationship pain is real. Give yourself time to feel it, lean on people you trust, and avoid big decisions while emotions are high. An honest, kind conversation helps when you're ready."
],
"q": "Do you want to tell me what happened?",
"l": null
},
{
"tag": "family",
"emo": "pressured",
"p": [
"parents",
"family pressure",
"parents expect",
"my parents don't understand",
"strict parents"
],
"r": [
"Family expectations can feel heavy, especially when you care about them. Choose a calm moment and explain your workload and feelings honestly. A teacher or counsellor can also help with that conversation."
],
"q": "What do you wish your family understood?",
"l": [
"Conversation starters",
"reflect.html"
]
},
{
"tag": "homesick",
"emo": "homesick",
"p": [
"homesick",
"miss home",
"new city",
"hostel life"
],
"r": [
"Missing home is natural when everything is new. Call home at a regular time, put familiar things in your space, and join one group activity. It usually gets easier as new routines form."
],
"q": "What do you miss the most?",
"l": null
},
{
"tag": "social_media",
"emo": "neutral",
"p": [
"social media",
"instagram",
"phone addiction",
"screen time",
"scrolling",
"comparing myself",
"comparison"
],
"r": [
"Social media can make everyone's life look perfect. Try limiting daily time, muting accounts that drain you, and keeping your phone away at meals and bedtime. Real-life activities help balance it."
],
"q": "Does it affect how you feel about yourself?",
"l": null
},
{
"tag": "food",
"emo": "neutral",
"p": [
"food",
"diet",
"nutrition",
"hungry",
"snack",
"meal",
"what should i eat"
],
"r": [
"Regular meals, water and simple snacks like fruit or nuts can support your energy and mood. Check allergies or health conditions with your doctor or a dietitian. I can't give diet plans or calorie targets."
],
"q": "Are you managing to eat regular meals?",
"l": [
"Resources",
"resources.html"
]
},
{
"tag": "exercise",
"emo": "neutral",
"p": [
"exercise",
"workout",
"walk",
"gym",
"yoga",
"physical activity",
"fitness"
],
"r": [
"Even a 10-minute walk can lift your mood and clear your head. Choose movement you enjoy and build up slowly. Stop if anything hurts."
],
"q": "What kind of movement do you enjoy?",
"l": null
},
{
"tag": "breathing",
"emo": "anxious",
"p": [
"breathing exercise",
"how to breathe",
"calm down",
"relax",
"relaxation",
"calm me"
],
"r": [
"Try this: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat a few times. You can also use the guided trainer on the Relax page."
],
"q": "Would you like to try it now?",
"l": [
"Breathing trainer",
"relax.html#breathing"
]
},
{
"tag": "self_esteem",
"emo": "low",
"p": [
"not good enough",
"i am stupid",
"no confidence",
"low confidence",
"feel useless",
"i am ugly"
],
"r": [
"I'm sorry you're being so hard on yourself. Thoughts like these feel true, but they aren't facts. Try writing one thing you handled well recently, and talk to yourself the way you'd talk to a friend."
],
"q": "What is the voice in your head saying right now?",
"l": [
"Thought Space",
"reflect.html"
]
},
{
"tag": "burnout",
"emo": "tired",
"p": [
"burnout",
"burnt out",
"exhausted",
"drained",
"no energy",
"worn out"
],
"r": [
"Exhaustion is a sign you've been pushing hard for a long time. Rest isn't laziness. Reduce what you can, protect your sleep and take real breaks. If it lasts, please talk to a counsellor or doctor."
],
"q": "What could you take off your plate this week?",
"l": null
},
{
"tag": "mh_basics",
"emo": "curious",
"p": [
"what is mental health",
"mental health meaning",
"why mental health",
"mental illness",
"mental health"
],
"r": [
"Mental health is part of overall well-being. It affects how we think, feel and act, and how we handle stress and relationships. Everyone has it, and everyone can look after it."
],
"q": "Would you like to know about stress, anxiety or low mood?",
"l": [
"Understand",
"understand.html"
]
},
{
"tag": "get_help",
"emo": "caring",
"p": [
"need help",
"where to get help",
"counsellor",
"therapist",
"psychologist",
"helpline",
"who to talk to",
"professional help"
],
"r": [
"You can talk to a trusted friend, family, a teacher, your college counsellor, or a qualified mental-health professional. In India, Tele-MANAS offers free 24/7 support on 14416."
],
"q": "Would you like tips on how to start that conversation?",
"l": [
"Get Support",
"support.html"
]
},
{
"tag": "happy",
"emo": "happy",
"p": [
"happy",
"feeling good",
"great",
"feeling better",
"excited",
"proud",
"amazing"
],
"r": [
"That's lovely to hear! Noticing good moments helps them last."
],
"q": "What went well today?",
"l": null
},
{
"tag": "bored",
"emo": "bored",
"p": [
"bored",
"nothing to do",
"boring"
],
"r": [
"A little boredom is okay. Try a short walk, music, a hobby, or a game on the Relax page. Doing something small can shift your mood."
],
"q": "What did you enjoy doing before?",
"l": [
"Games",
"relax.html"
]
},
{
"tag": "future",
"emo": "worried",
"p": [
"future",
"career",
"placements",
"scared about future",
"confused about life",
"what to do after"
],
"r": [
"Uncertainty about the future worries many students. You don't need the whole plan. Pick one next step, such as talking to a mentor or learning one skill, and let the rest unfold."
],
"q": "What part of the future worries you the most?",
"l": null
},
{
"tag": "help_friend",
"emo": "caring",
"p": [
"my friend is",
"friend is depressed",
"help a friend",
"friend is sad",
"worried about friend"
],
"r": [
"It's kind of you to care. Listen without judging, take them seriously, and encourage them to talk to a trusted adult or counsellor. You can offer to go with them. You don't have to fix everything alone, and you matter too."
],
"q": "Is your friend safe right now?",
"l": [
"Get Support",
"support.html"
]
}
]
};
