# Design system — Pixelforge Web App Template

`SN-W00631` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black drawing tool rather than a marketing page: a narrow column of colour swatches on the left, a centred pixel grid on black, and a tiny uppercase tagline in grey at the top right. The only colour is the selected swatch, here red, which is how the tool shows state. Type stays at 18px Inter and the grid lines are dim, so the artwork is the only bright thing on screen.

**Mood:** raw, tool-like, minimal, monochrome, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#262626` · `#737373` · `#dc2626` · `#e5e5e5` · `#1f1f1f` · `#050505` · `#7f1d1d` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`, `max-w-[150px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-black border border-white text-white text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-none flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the canvas and chrome in black (#000000) with white text (#ffffff)
- **Do:** Use the swatch column as the only colour control and mark the selected swatch with a thin outline
- **Do:** Keep the header to small uppercase Inter with a grey tagline
- **Don't:** Don't add display headings; the tool chrome is 18px and quiet
- **Don't:** Don't use the red (#dc2626) for anything except the selected state
- **Don't:** Don't brighten the grid lines; they stay dim so the drawing stands out

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
