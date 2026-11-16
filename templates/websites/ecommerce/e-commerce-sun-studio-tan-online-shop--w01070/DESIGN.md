# Design system —  E-commerce Sun Studio Tan Online Shop

`SN-W01070` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bare, high-contrast retail page on a white ground. Manrope sets the headline very large in near-black, with the second word-line in pale grey, so scale and empty space do the work. Colour is almost absent; the warm accent appears only as a small gold dot in the eyebrow pill and in the hero image panel.

**Mood:** minimal, high contrast, bold, airy, retail

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f2` | Cards, panels, raised areas |
| Text | `#16161a` | Headings and primary copy |
| Muted text | `#5b5b66` | Secondary copy, captions |
| Border | `#dcdcd6` | Hairlines, dividers, outlines |
| Accent | `#f1d7be` | Primary action and highlights |
| Second accent | `#1b3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#5b5b66` · `#dcdcd6` · `#16161a` · `#c9c9d2` · `#c8411b` · `#f5f5f2` · `#3a3a44` · `#f1d7be` · `#e2b58a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, extrabold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-lg` (8px)
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)

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
  --color-accent: #f1d7be;
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
    accent: '#f1d7be',
    accent2: '#1b3a8a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at display size, near-black on white
- **Do:** Let the second headline line drop to pale grey for the two-tone effect
- **Do:** Keep the hero image in a hard-edged panel with no rounding
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't centre the headline; keep it left-aligned beside the image
- **Don't:** Don't fill the background with tints or gradients

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
