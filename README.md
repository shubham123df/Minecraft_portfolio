# Shubham Kumar Gupta — Portfolio

A Minecraft-themed developer portfolio built with React 19, Vite 7, and Tailwind CSS.

**Live:** [shubham-portfolio-mu-two.vercel.app](https://shubham-portfolio-mu-two.vercel.app) · **GitHub:** [@shubham123df](https://github.com/shubham123df)

---

## Stack

| Layer | Technology |
|--------|-------------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React + custom pixel SVGs |
| Fonts | Press Start 2P, Inter (via Fontsource) |
| Contact | Web3Forms (Formspree optional) |
| Hosting | Vercel |

---

## Features

- Minecraft-inspired pixel-art design system (inventory slots, pixel buttons, chunky borders)
- Dark/light theme with `prefers-color-scheme` detection and `localStorage` persistence
- Scroll-spy active navigation using `IntersectionObserver`
- Live GitHub API integration with 30-minute `localStorage` cache and stale-fallback on error
- Curated repository whitelist (`PINNED_REPOS` in `constants.js`)
- Web3Forms-powered contact form with client-side validation and accessible error messages
- React `ErrorBoundary` per section — no full-page crashes
- Code-split sections via `React.lazy` + `Suspense`
- Responsive from 375 px mobile to ultrawide
- Accessible: ARIA landmarks, live regions, `role="alert"` errors, `aria-live` loading screen, focus styles, reduced-motion support
- Pixel-art 404 page
- Build-time code splitting: `vendor` + `motion` chunks
- Resume link (Google Drive) in navbar, hero, and Quick Links

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

Create a `.env.local` file in the project root (see `.env.example`):

```env
# Required — contact form delivers messages to your inbox
# Sign up at https://web3forms.com and paste your access key
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

# Optional — resume PDF or Google Drive link
VITE_RESUME_URL=https://drive.google.com/file/d/your-resume-id/view

# Optional — Formspree instead of Web3Forms
# VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id

# Optional — set to "true" in Docker/WSL/VM if file watching needs polling
VITE_USE_POLLING=false
```

> Never commit `.env.local`. `VITE_*` variables are embedded in the client bundle at build time.

---

## Customisation

### Personal details

Edit `src/utils/constants.js`:

```js
export const GITHUB_USERNAME = 'your-github-username';

export const PUBLIC_EMAIL = 'you@example.com';

export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: PUBLIC_EMAIL,
};
```

### Featured projects

Add or edit entries in `FEATURED_PROJECTS` inside `constants.js`:

```js
{
  id: 'unique-id',
  name: 'Project Name',
  description: 'What it does and why it matters.',
  features: ['Feature 1', 'Feature 2'],
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://your-app.com', // or null
}
```

### Pinned GitHub repos

Set `PINNED_REPOS` in `constants.js` to control which repos appear in the grid:

```js
export const PINNED_REPOS = ['repo-name-1', 'repo-name-2'];
```

### Skills

Edit `SKILL_CATEGORIES` in `constants.js`. Each category has a `name`, `iconComponent`, `color` (Tailwind token), and `skills` array.

### Avatar

Place your headshot at `public/avatar-netherite.png`. The Hero section uses it with pixel-art framing (`imageRendering: pixelated`).

### Resume

Set `VITE_RESUME_URL` in `.env.local`, or place a PDF at `public/resume.pdf`. Links in the navbar, hero, and Quick Links resolve automatically.

### Open Graph image

Create a 1200×630 image and save it as `public/og-image.png` for rich social sharing previews.

---

## Architecture

```
src/
├── components/
│   ├── icons/          # Pixel SVG icon library
│   ├── sections/       # Hero, Projects, Skills, About, Contact
│   └── ui/             # Navbar, Footer, LoadingScreen, ErrorBoundary
├── hooks/
│   ├── useTheme.js         # Dark/light theme
│   ├── useGitHub.js        # GitHub API + cache
│   └── useActiveSection.js # IntersectionObserver scroll spy
├── utils/
│   └── constants.js    # All content + config data
├── App.jsx             # Root: loading gate, ErrorBoundary, lazy sections
├── index.css           # Tailwind layers + component styles
└── main.jsx            # React DOM mount
```

---

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Build command: `npm run build` · Output directory: `dist`
4. Add environment variables (`VITE_WEB3FORMS_ACCESS_KEY`, `VITE_RESUME_URL`)

Or use the CLI:

```bash
npx vercel deploy --prod
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to the gh-pages branch
```

Add `base: '/repo-name/'` to `vite.config.js` if deploying to a sub-path.

### Netlify

Connect the repository with build command `npm run build` and publish directory `dist`.

---

## Linting

```bash
npm run lint
```

ESLint 9 flat config with `react-hooks` and `react-refresh` plugins.

---

## Author

**Shubham Kumar Gupta** — BE CSE @ Chandigarh University, Mohali

- GitHub: [@shubham123df](https://github.com/shubham123df)
- LinkedIn: [Shubham Kumar Gupta](https://www.linkedin.com/in/shubham-kumar-gupta-b760b8334/)
- Email: krishkumargupta7631@gmail.com

---

## License

Open source for portfolio and learning purposes.
