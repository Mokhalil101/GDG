# GDG Tech Arcade

**Play. Compete. Debug. Repeat.**  
A frontend-only, responsive arcade platform for GDG Assiut, built with HTML, CSS and vanilla JavaScript.

## Run locally
Open `index.html` in a browser. No build step, backend, API key or package installation is required. For the best local development experience, use VS Code Live Server.

## Deploy to GitHub Pages
1. Create a GitHub repository, for example `gdg-tech-arcade`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish your site.

## Included games
1. Bug Hunt — identify bugs in code.
2. What's the Output? — predict program output.
3. Code Builder — reorder code lines.
4. Bug or Feature? — classify software behavior.
5. Hack the Password — solve password clues.
6. Phishing Detective — identify suspicious messages.
7. Crack the Code — Caesar, binary and Morse challenges.
8. Ctrl + Alt + Escape — four-stage escape room.
9. Algorithm Maze — program a robot through a grid.
10. AI or Human? — curated authorship guessing quiz.

## Player data and leaderboard
Nickname and results are stored in browser `localStorage`. The leaderboard is local to the browser/device and is not shared between participants. Clearing browser storage removes these results. A shared leaderboard requires a future backend or service such as Firebase.

## Customize
- Game metadata and quiz content: `js/data.js`
- Game logic: `js/games.js`
- Local persistence: `js/storage.js`
- Landing page and leaderboard rendering: `js/app.js`
- Theme and responsive layout: `css/style.css`

## Scoring
Correct answers award `100 + 2 × seconds remaining` XP. Incorrect quiz answers deduct 20 XP. Password and hint challenges apply their own penalties. Maze points reward efficient completion. Scores are stored per completed session and summed for the local leaderboard.

## Notes
- AI or Human is a curated quiz, not an AI detection system.
- Phishing examples use fictional `.example` domains and are not clickable.
- The visual GDG mark is a replaceable abstract placeholder, not an official Google/GDG logo.
