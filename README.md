# PW Intelligence Portal - Operations & AI Strategic Dashboard

A premium, interactive, and responsive strategic assessment portal mapping Physics Wallah's (PW) omnichannel business verticals, operational workflows, and AI automation roadmaps for the FY26 fiscal year.

---

## 🚀 Key Features

- **Consolidated Dashboard (Default Landing)**:
  - Showcases overall FY26 financial and student base metrics: **Revenue** (₹3,900 Cr), **EBITDA** (₹549 Cr), **Paid Students** (5.34M), and **Offline Centres** (353).
  - Features a dynamic **Revenue Mix Donut Chart** built with pure CSS gradients.
  - Features a **Consolidated Revenue scale graph** mapped with custom SVG paths, animated lines, and interactive mouse-hover tooltips detailing historical scaling (FY23–FY26).
- **Dynamic Vertical Selector**:
  - Switch seamlessly between 5 major business verticals via the header dropdown:
    1. **JEE/NEET/Foundation (Online Flagship)**: Flagship online batches (Arjuna, Lakshya, Yakeen), ₹1,954 Cr revenue.
    2. **PW Vidyapeeth (Offline/Hybrid)**: Tech-enabled physical smart-classrooms, ₹1,774 Cr revenue, 353 centres.
    3. **PW Skills (Upskilling)**: Professional web dev, data science courses, and browser-based PW Skills Lab.
    4. **UPSC (PW OnlyIAS)**: Civil services batches, mock boards, Delhi centres (Mukherjee Nagar, Rajinder Nagar).
    5. **CuriousJr (K-10 & Kids Coding)**: Interactive school board tuitions and block coding compilers, including details of the flagship **Power Batch** (classes 1-10, two-teacher model, small class sizes).
- **Interactive Multi-Section Explorer**:
  - Browse detailed, vertical-specific assessments including Overview, SWOT Analysis, Conversion Funnel chart, KPIs, Challenges, and a Top 10 AI Roadmap.
- **Smart Navigation Routing**:
  - If a user is reading the global Consolidated dashboard and changes the active vertical from the top dropdown, the portal automatically redirects them to that vertical's **1. Overview** tab.
- **Search Bar Utility**:
  - Real-time search highlighting and filtering matching sidebar headings.

---

## 🛠️ Technology Stack

1. **Structure**: Semantic HTML5 markup.
2. **Styling**: Vanilla CSS3 Custom Properties (variables), radial dark-mode gradients, glassmorphism templates, and flexbox/grid layout design.
3. **Logic**: Vanilla ES6 JavaScript (DOM manipulation, custom tooltip positioning, rendering loops, and list type safety guards).
4. **Typography**: Google Fonts (*Plus Jakarta Sans* and *Outfit*).

---

## 📁 Code Structure

- [index.html](file:///c:/Users/ganes/OneDrive/Pictures/Documents/Desktop/vertical%20Understanding/index.html): Defines the base page structure, header panel selectors, search box, sidebar navigation lists, and sections.
- [index.css](file:///c:/Users/ganes/OneDrive/Pictures/Documents/Desktop/vertical%20Understanding/index.css): Implements custom variables, layout frameworks, responsive collapse media queries (@media breakpoints), and custom chart styling.
- [index.js](file:///c:/Users/ganes/OneDrive/Pictures/Documents/Desktop/vertical%20Understanding/index.js): Houses the complete, authentic operational dataset (`VERTICALS_DATA`), tooltip event listeners, tab switching, and rendering robustness safeguards.

---

## 💻 Local Preview Setup

Since this is a client-side web application, you can serve the directory using any local static server:

### Option A: Python HTTP Server (Recommended)
Launch a server inside the project folder:
```bash
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option B: Node.js http-server
Install and run the server globally:
```bash
npx http-server -p 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.
