# 🏓 Pong (HTML5 Canvas + Vanilla JS)

A tiny browser game of Pong built with an HTML `<canvas>` and plain JavaScript.  
Move your **mouse** to control the left paddle. The right paddle is CPU-controlled.

---

## ✨ Features
- Smooth animation with `requestAnimationFrame`
- Mouse-controlled player paddle
- Simple AI opponent (adjustable speed)
- Collisions, scoring, and ball reset
- Zero build tooling — just open `index.html`

---

## 🎮 Controls
- **Mouse**: move up/down over the canvas to control the left paddle
- **Score**: displayed beneath the canvas

---

## 🧱 Tech Stack
- HTML5 Canvas
- Vanilla JavaScript
- No frameworks, no bundlers

---

## 📁 Project Structure
pong-game/
├─ index.html # Canvas + scoreboard + minimal styles
├─ script.js # Game logic (paddles, ball, AI, collisions)
└─ README.md

---

## 🚀 Quick Start (Local)

**Option A — VS Code + Live Server (recommended)**
1. Open the folder in VS Code
2. Install the “Live Server” extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**

**Option B — Python simple server**
```bash
# from the project root
python3 -m http.server
# then open http://localhost:8000 and click index.html

** Option C — Just open the file
# macOS
open index.html
# Linux
xdg-open index.html
# Windows (PowerShell)
start index.html

---

## 🌐 Deploy (GitHub Pages)
Push the repo to GitHub (main branch).
In the repo: Settings → Pages
Source: Deploy from branch
Branch: main → / (root) → Save
Wait ~1 minute, then visit:
https://JadenS180.github.io/pong-game/

---

## ⚙️ Customize
Open script.js and tweak:
Canvas size (in index.html):
<canvas id="pong" width="800" height="500"></canvas>
Paddles: paddleHeight, paddleWidth
Ball: ballRadius, initial ballSpeedX, ballSpeedY
AI difficulty: change rightPaddleSpeed (higher = harder)

---

## 🧪 Troubleshooting
Blank screen
Ensure <script src="script.js"></script> is at the end of <body> in index.html.
Confirm the canvas has id="pong" and your JS queries the same id.
No paddle movement
Move the mouse over the canvas (the listener is on the canvas element).
Nothing animates
Verify loop() is called once and contains requestAnimationFrame(loop).
GitHub Pages 404
Settings → Pages → set “Deploy from branch: main / root,” then wait ~1 minute.

---

## 🗺️ Roadmap Ideas
Keyboard controls (W/S or ↑/↓)
Start/pause UI & scoreboard styling
SFX for paddle/score events
Difficulty levels and win conditions
Touch controls for mobile

---
## 🤝 Contributing
PRs are welcome! Keep changes small and focused.

---

## 📄 License
MIT © 2025 Jaden Smiles
