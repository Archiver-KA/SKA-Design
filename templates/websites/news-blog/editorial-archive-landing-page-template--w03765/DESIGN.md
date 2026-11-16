# Design system — Editorial Archive Landing Page Template

`SN-W03765` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A print-like archive page on a pale off-white ground with near-black ink. A very large italic serif headline opens the page, followed by a numbered index of issues in thin-ruled rows with small tracked uppercase labels. A solid black card holds the sign-up call to action, and one thin vertical rule divides the hero from the index.

**Mood:** archival, literary, austere, precise, print-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f6fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0e1726` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#0e1726` | Hairlines, dividers, outlines |
| Accent | `#2b5ce6` | Primary action and highlights |
| Second accent | `#f2a33a` | Supporting highlights |

Palette by frequency of use: `#556070` · `#0e1726` · `#ffffff` · `#2b5ce6` · `#d9dfe8` · `#f2a33a` · `#b7c0cf` · `#dce2ec` · `#2250d0` · `#f4f6fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 60px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f4f6fa;
  --color-surface: #ffffff;
  --color-text: #0e1726;
  --color-muted: #556070;
  --color-border: #0e1726;
  --color-accent: #2b5ce6;
  --color-accent-2: #f2a33a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f6fa',
    surface: '#ffffff',
    ink: '#0e1726',
    muted: '#556070',
    line: '#0e1726',
    accent: '#2b5ce6',
    accent2: '#f2a33a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large italic serif in near-black ink
- **Do:** Format index rows as thin-ruled lines with small tracked uppercase labels
- **Do:** Use the solid black card for the main sign-up call to action
- **Don't:** Don't place bright colour behind the index rows
- **Don't:** Don't set issue titles in a sans-serif face
- **Don't:** Don't add shadows to the black card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
