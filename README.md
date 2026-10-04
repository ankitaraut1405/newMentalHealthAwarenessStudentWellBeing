# MindCare: Mental Health Awareness & Student Well-Being Survey

BSc Data Science project. A multi-page website plus a Python chatbot server.

## Open the website
Keep all files in this folder together and open `index.html` in a browser.
No internet server is needed (fonts load online if available, otherwise system fonts are used).

## Pages
index, understand, wellbeing, relax, reflect, resources, quiz, chatbot, research, support
Shared files: `style.css`, `script.js` (header, footer, icons, safety helpers).
Data: `data/data.js` (cleaned, anonymous survey rows exported from the CSV).
Chatbot knowledge: `intents.js` (used by both the website and the Python server).

## Run the Python chatbot (optional but recommended)
    pip install -r requirements.txt
    python chatbot_server.py
Then open `chatbot.html`. The page detects the server and shows "Python server: connected".

For wide-range answers to any kind of question, set your key before starting the server:
    set ANTHROPIC_API_KEY=your_key        (Windows)
    export ANTHROPIC_API_KEY=your_key     (Mac/Linux)
A crisis check always runs first, before any reply is generated.
Without a key, the server uses a TF-IDF intent model over `intents.js`.

## Before you submit
- Verify the helpline numbers (Tele-MANAS 14416, emergency 112) on the official sites.
- Confirm each book listed on the Resources page at your library.
- Check the scale labels of the "supported" question in your Google Form (see limitations on the Research page).
