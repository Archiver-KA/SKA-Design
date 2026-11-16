# Design system — Organic Fertilizer Product Landing Page Template

`SN-W00618` · ai-saas · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm off-white page with near-black type carrying almost all of the design. The headline is very large and heavy in Manrope, set tight across two lines above a single photograph in a tinted frame. Colour is kept out of the layout; a black pill button and one small mustard dot are the only emphasis, so the page reads like an editorial cover.

**Mood:** editorial, plain, warm, heavy-type, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f2` | Cards, panels, raised areas |
| Text | `#16161a` | Headings and primary copy |
| Muted text | `#5b5b66` | Secondary copy, captions |
| Border | `#dcdcd6` | Hairlines, dividers, outlines |
| Accent | `#16161a` | Primary action and highlights |
| Second accent | `#1b3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dcdcd6` · `#5b5b66` · `#16161a` · `#f5f5f2` · `#c8411b` · `#a93515` · `#4a3a2e` · `#6b5444` · `#4d3e32`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 64px · h2 48px · h3 20px · body 30px
- **Weights in use:** bold, extrabold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-lg` (8px), `rounded-md` (6px)
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-10`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f2;
  --color-text: #16161a;
  --color-muted: #5b5b66;
  --color-border: #dcdcd6;
  --color-accent: #16161a;
  --color-accent-2: #1b3a8a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 10px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f2',
    ink: '#16161a',
    muted: '#5b5b66',
    line: '#dcdcd6',
    accent: '#16161a',
    accent2: '#1b3a8a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at 64px, heavy weight, black on off-white
- **Do:** Use black pill buttons for the primary action
- **Do:** Keep the page to black, off-white and one photograph; add colour only through the photograph
- **Don't:** Don't set headlines in a light weight; the style depends on heavy display type
- **Don't:** Don't add drop shadows or gradient fills
- **Don't:** Don't place the headline over the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
