# Design system — World Championship of Wealth Landing Page Template

`SN-W01069` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black leaderboard page with a very large white headline over three lines, where the final phrase of Wealth is set in amber and the category words in the body copy repeat the amber. Amber is the one warm colour, used for the headline phrase, category words and primary button. A small green status dot marks the season label, and the layout is centred and sparse.

**Mood:** competitive, dark, bold, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050507` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#e2e8f0` · `#34d399` · `#0f172a` · `#f1f5f9` · `#3b82f6` · `#94a3b8` · `#f59e0b` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/40`, `shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050507;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050507',
    surface: '#444444',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in amber, and repeat amber only on key category words
- **Do:** Use the amber for the primary button and nothing else in the hero
- **Do:** Keep the ground near-black (#050507) with a centred stack of headline lines
- **Don't:** Don't use the green (#34d399) on large areas; it marks the live status dot only
- **Don't:** Don't set body copy in amber; it stays in grey
- **Don't:** Don't add a second warm colour beside the amber

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
