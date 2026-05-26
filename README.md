# Shubham Kumar Gupta — Minecraft Portfolio

A pixel-styled developer portfolio built with React and Vite, themed like Minecraft. Showcases projects, skills, about section, and a working contact form.

**Live site:** [https://shubham-portfolio-mu-two.vercel.app](https://shubham-portfolio-mu-two.vercel.app)

**Author:** [Shubham Kumar Gupta](https://github.com/shubham123df) · BE CSE @ Chandigarh University, Mohali

---

## Features

- Minecraft-inspired UI (pixel fonts, block accents, inventory-style cards)
- Responsive layout with light / dark mode
- Featured projects with GitHub links
- Skills grid by category
- Contact form (Web3Forms) — messages delivered to your inbox
- Resume link (Google Drive)
- Deployed on [Vercel](https://vercel.com)

---

## Tech Stack

| Layer | Technologies |
|--------|----------------|
| Frontend | React 19, Vite 7, Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React, custom Minecraft SVG icons |
| Contact | [Web3Forms](https://web3forms.com) |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+

### Install & run locally

```bash
git clone https://github.com/shubham123df/Minecraft_portfolio.git
cd Minecraft_portfolio
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
VITE_RESUME_URL=https://drive.google.com/file/d/your-resume-id/view
```

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com) (contact form) |
| `VITE_RESUME_URL` | Public URL to your resume PDF |
| `VITE_FORMSPREE_ENDPOINT` | Optional alternative to Web3Forms |

> **Note:** `VITE_*` variables are embedded in the client bundle. Never commit `.env.local`.

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add the same environment variables under **Project → Settings → Environment Variables**
4. Deploy

Or use the CLI:

```bash
npx vercel deploy --prod
```

---

## Project Structure

```
src/
├── components/
│   ├── sections/    # Hero, Projects, Skills, About, Contact
│   ├── ui/          # Navbar, Footer
│   └── icons/       # Minecraft-themed icons
├── hooks/           # useGitHub, useActiveSection, useTheme
├── utils/           # constants, helpers
└── App.jsx
public/              # Static assets (avatar, patterns)
```

---

## Contact

- **Email (displayed on site):** krishkumargupta7631@gmail.com
- **GitHub:** [@shubham123df](https://github.com/shubham123df)
- **LinkedIn:** [Shubham Kumar Gupta](https://www.linkedin.com/in/shubham-kumar-gupta-b760b8334/)

---

## License

This project is open source for portfolio and learning purposes.
