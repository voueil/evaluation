# Project Evaluation Platform

A web-based system that allows instructors to evaluate student projects efficiently and view aggregated results in real time.  
It provides an intuitive interface for evaluators to rate projects, automatically calculate weighted scores, and visualize performance insights.

---

## ⚙️ How It Works

1. **Evaluator Login**  
   Evaluator selects their name to access assigned projects.

2. **Project Selection**  
   The platform filters and shows only the projects related to the evaluator.

3. **Evaluation Form**  
   Each project is rated based on specific criteria:
   - 🌟 Excellent (10)  
   - 👍 Good (8)  
   - 🙂 Satisfactory (6)  
   - ⚠️ Needs Improvement (2)

4. **Automatic Calculation**  
   Weighted totals and averages are calculated instantly.

5. **Results Dashboard**  
   Displays:
   - 📊 Average per criterion  
   - 🧮 Total average  
   - 🕓 Evaluator details and timestamps  

---

## 🧩 Pages Overview

| File | Description |
|------|--------------|
| `login.html` | Entry page where evaluator selects their name. |
| `index.html` | Displays a list of projects assigned to the evaluator. |
| `evaluate.html` | Evaluation form with predefined weighted criteria. |
| `allResults.html` | Dashboard showing aggregated results for all projects. |
| `styles.css` | Contains the lavender-themed responsive design. |
| `app.js` | Core logic for data handling, evaluation, and aggregation. |

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|----------|
| **Visual Studio Code** | 💻 Code editing and local development |
| **Git & GitHub** | 🌐 Version control and collaboration |
| **GitHub Pages** | 🚀 Hosting and deploying the web platform |
| **Web Development Tools** | 🧩 Front-end design, testing, and debugging |

---

## 📁 Folder Structure

```plaintext
project-evaluation/
│
├── index.html
├── evaluate.html
├── allResults.html
├── login.html
├── app.js
├── styles.css
└── images/
    └── logo.png
