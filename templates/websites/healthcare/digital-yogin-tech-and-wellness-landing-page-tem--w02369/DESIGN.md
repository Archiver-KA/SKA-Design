# Design system — Digital Yogin - Tech & Wellness Landing Page Template

`SN-W02369` · healthcare · dark mode · Sinera Atlas theme `calm` · language `it`

## Direction

A black, moody hero where the headline is set in mint green (#34d399) and layered with a duplicated echo of the same line, giving a glitched, layered effect. Small uppercase tracked text sits below in muted grey, and the nav is set in tiny caps. The green is the only colour on the first screen, so the page reads as a dark tech-and-wellness piece built on contrast.

**Mood:** moody, layered, tech, dark, experimental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e0e0e0` | Secondary copy, captions |
| Border | `#55565b` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fc5fa3` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#34d399` · `#53606e` · `#064e3b` · `#fc5fa3` · `#d1fae5` · `#5dd8ff` · `#d0a8ff` · `#047857` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** EB Garamond
- **Loaded families:** EB Garamond, JetBrains Mono, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** thin, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[4px_4px_0_0_rgba(16,185,129,0.1)]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-block px-8 py-3 rounded-sm border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all duration-200 ease-[steps(4)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_rgba(16,185,129,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Code / terminal (`code-terminal`)
5. Video / media (`video-media`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e0e0e0;
  --color-border: #55565b;
  --color-accent: #34d399;
  --color-accent-2: #fc5fa3;
  --font-display: "Inter", sans-serif;
  --font-body: "EB Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e0e0e0',
    line: '#55565b',
    accent: '#34d399',
    accent2: '#fc5fa3',
  },
  fontFamily: { display: ['Inter'], sans: ['EB Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in mint green (#34d399) and keep the layered echo as the signature effect.
- **Do:** Keep the page on the black ground (#000000) with white type.
- **Do:** Use small tracked uppercase for supporting lines and nav items.
- **Don't:** Don't set the page background to the dark green (#1a5c4a); the ground is black.
- **Don't:** Don't use the pink accent (#fc5fa3) in the hero.
- **Don't:** Don't use the echo effect on body text, which would be unreadable.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
