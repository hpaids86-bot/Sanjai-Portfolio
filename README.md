# Sanjai R — Premium AI & Data Science Portfolio

A production-ready personal portfolio website for **Sanjai R**, B.Tech Artificial Intelligence and Data Science student. Designed with an **"Organic Intelligence"** aesthetic combining editorial minimalism, natural warm tones, futuristic data visualizations, and subtle neon green accents.
Live Link : https://sanjaiportfolio-beige.vercel.app/
---

## 🎨 Visual Identity & Color System

- **Primary Background (Warm Beige)**: `#F3EBDD` — Hero, main whitespace areas.
- **Secondary Background (Soft Cream)**: `#FAF7EF` — About, Education, Certifications, alternating sections.
- **Card Background (Light Beige)**: `#E9E2D2` — Skill cards, project mockups, metric cards.
- **Primary Pastel Green (Sage Green)**: `#A8C3A0` — Section accents, timeline, decorative elements.
- **Secondary Green (Mint Green)**: `#C7DFC5` — Secondary cards, hover states, data visualization shapes.
- **Dark Text / Deep Forest**: `#17231A` — Main headings, navigation, primary buttons.
- **Deep Forest Project/Contact Card**: `#26382B` & `#17231A` — Editorial project case studies and contact module.
- **Neon Lime Accent**: `#C8FF3D` — CTA hover, active navigation dot, project numbers, AI node highlights.
- **Electric Mint Accent**: `#39FF88` — Glow effects, particle animations, hover states.
- **Typography**: Space Grotesk (Editorial Headings) + Inter (Body & UI).

---

## 🌟 Key Features & Sections

1. **Sticky Glass Navbar** (`Navbar.jsx`): Warm beige blur with active neon-lime indicator and responsive mobile drawer.
2. **Editorial Hero Section** (`Hero.jsx`): Large Space Grotesk typography, verified summary, primary CTA with Neon Lime hover glow, and Sanjai R's portrait framed with organic AI nodes.
3. **About Me & Academic Metrics** (`About.jsx`): Narrative background and verified metrics (CGPA: **8.01 / 10**, Higher Secondary: **84.6%**, Expected Graduation: **2027**).
4. **"From Data to Decisions" Data Journey** (`DataJourney.jsx`): Horizontal desktop / vertical mobile 5-stage interactive workflow with traveling neon pulse particle (`DATA` → `ANALYSIS` → `INSIGHT` → `AI` → `DECISION`).
5. **Categorized Skills** (`Skills.jsx`): Filterable skill taxonomy strictly from resume (Programming, Data Science, AI-Assisted Dev, BI & Visualization, Databases & Cloud).
6. **Selected Projects** (`Projects.jsx` & `ProjectCard.jsx`):
   - **PRIJSM Engine V5**: Real-time customer return risk scoring web app with live Cloud deployment link.
   - **Starbucks Survey Analysis**: Power BI analytics dashboard on customer satisfaction and brand loyalty.
7. **Experience Timeline** (`Experience.jsx`): Data Science & Analytics Intern at **Tamizhan Skills** (Aug 2025 – Sep 2025).
8. **Education & Certifications** (`Education.jsx` & `Certifications.jsx`): B.Tech AI & DS, Higher Secondary School, NPTEL Cloud Computing, Infosys Springboard NLP & Prompt Engineering.
9. **Contact Module** (`Contact.jsx`): Deep Forest section with large Neon Lime CTA button, direct copy buttons, and pre-formatted mailto handler.
10. **Custom Desktop Cursor** (`CustomCursor.jsx`): Subtle Sage dot expanding into a glowing Neon Lime ring over interactive elements.
11. **Single Source of Truth** (`src/data/portfolioData.js`): All content, links, and credentials stored in one easily maintainable file.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Typography**: Space Grotesk & Inter via Google Fonts
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
3. Import your `sanjai-portfolio` repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Netlify
1. Connect repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Cloudflare Pages
1. Select **Pages** in Cloudflare dashboard.
2. Connect Git repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`

---

## 🐙 GitHub Push Commands

```bash
git init
git add .
git commit -m "Create Sanjai R portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
*(Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL, e.g. `https://github.com/18-Sanjai/portfolio.git`)*

---

## 📄 Updating Resume
Place your updated resume PDF at [`public/resume.pdf`](file:///c:/Users/hpaid/Desktop/Sanjai-portfolio/public/resume.pdf). All "DOWNLOAD RESUME" buttons will automatically download this file.

---

## 📜 Copyright
© 2026 Sanjai R. All rights reserved.
