# Design system — Course Detail and Curriculum Layout

`SN-W03433` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, product-style course page on a pale blue-to-peach gradient, with a white glass card holding the course title, meta line and progress bar. The title is a dark sans-serif, and a pink-to-purple button and a thin progress bar carry the interactive accents. Curriculum rows below are white cards with small rounded icon tiles.

**Mood:** soft, modern, airy, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eef2ff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#312e81` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#818cf8` · `#312e81` · `#f472b6` · `#4f46e5` · `#eef2ff` · `#a5b4fc` · `#e0e7ff` · `#60a5fa` · `#f9a8d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 18px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-gradient-to-r from-indigo-500 to-pink-400 text-white px-6 py-2 font-bold rounded-lg shadow hover:from-indigo-600 hover:to-pink-500 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eef2ff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #312e81;
  --color-accent-2: #f472b6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eef2ff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#312e81',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Place content in white glass cards over the pale gradient background
- **Do:** Use the pink-to-purple gradient for the primary button only
- **Do:** Keep curriculum rows as white cards with small rounded icon tiles
- **Don't:** Don't use the gradient on text or on large card surfaces
- **Don't:** Don't use sharp corners on cards or icon tiles
- **Don't:** Don't place more than one gradient button in the same view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
