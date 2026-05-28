# 🍵 ZENCHA — Premium Ceremonial Matcha Landing Page

> An Awwwards-style landing page for a premium matcha brand — built with **React 19**, **Tailwind CSS v4**, and **GSAP**. Inspired by the SPYLT drink landing page structure.

![Zencha Banner](https://img.shields.io/badge/ZENCHA-Landing%20Page-3d6b2a?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)

---

## 📸 Sections

| Section | Description |
|---|---|
| 🔝 Navbar | Fixed transparent nav with smooth scroll links |
| 🌿 Hero | Full-screen with marquee text band, parallax circle, GSAP entry animation |
| 🍵 Ritual Message | Dark green full-screen message with ghost text + rotating marquee band |
| 🎨 Blends Slider | Horizontal scroll of 6 product cards with GSAP ScrollTrigger pin |
| 💊 Ritual Facts | Nutrition/ingredient facts with parallax big visual + floating bar |
| ⚡ Benefits | Dark section — stacked rotated titles, 4 benefit cards, pinned visual |
| ⭐ Reviews | Fanned review cards with GSAP horizontal scroll |
| 📬 Footer | Dark footer with newsletter, links, socials, big marquee |

---

## 🛠️ Tech Stack

- ⚛️ **React 19**
- 🌀 **Tailwind CSS v4** (via `@tailwindcss/vite`)
- 🎞️ **GSAP 3.12** — ScrollTrigger, clip-path reveals, parallax, stagger
- ⚡ **Vite 6** — instant HMR, fast builds

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/zencha-landing.git
cd zencha-landing

# 2. Install
npm install

# 3. Run dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
zencha-landing/
├── public/
│   └── images/          # Add your product images here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── RitualMessage.jsx
│   │   ├── BlendsSlider.jsx
│   │   ├── RitualFacts.jsx
│   │   ├── Benefits.jsx
│   │   ├── Reviews.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js     # All data — blends, facts, reviews, benefits
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind v4 theme + component styles
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 🎨 Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Dark Green | `#1a2e0f` | Text, backgrounds |
| Mid Green | `#3d6b2a` | Accents, CTAs |
| Light Green | `#6fa845` | Highlights |
| Pale Green | `#c8ddb0` | Soft accents |
| Cream | `#f5f0e8` | Backgrounds |
| Gold | `#c9a84c` | Stars, accents |
| Black | `#0f1209` | Dark sections |

---

## ✨ GSAP Features Used

- `ScrollTrigger` — pin sections, scrub animations, trigger reveals
- `gsap.fromTo` — entry animations with stagger
- `clipPath` — text and image reveal transitions
- `parallax` — background elements on scroll
- Horizontal scroll — product and review sliders
- Marquee — infinite scrolling text bands
- Timeline — sequenced hero entry animation

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — framework: Vite
# Build command: npm run build
# Output dir: dist
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deploys on every push.

## 🌐 Deploy to GitHub Pages

Add this to `vite.config.js`:
```js
export default defineConfig({
  base: "/zencha-landing/",  // your repo name
  plugins: [react(), tailwindcss()],
});
```

Then:
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

Or use the `gh-pages` package:
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🔧 Customisation

### Change brand name
Search and replace `ZENCHA` / `Zencha` throughout the codebase.

### Change blends / products
Edit `src/constants/index.js` — update `blendList` with your product names, colours, and emoji.

### Add real product images
Replace the emoji in `BlendsSlider.jsx` with:
```jsx
<img src="/images/your-product.png" className="product-img" alt="Product" />
```

### Change colours
All colours are defined in `src/index.css` under `@theme` — change them once, they apply everywhere.

### Add a video (Benefits section)
In `Benefits.jsx`, replace the gradient div with:
```jsx
<video autoPlay muted loop playsInline className="size-full absolute inset-0 object-cover">
  <source src="/videos/matcha.mp4" type="video/mp4" />
</video>
```

---

## 👨‍💻 Built By

Made as a software engineering portfolio project — inspired by the SPYLT drink landing page.  
Stack: React 19 + Tailwind CSS v4 + GSAP 3.

---

## 📄 License

MIT — free to fork, modify, and use.
