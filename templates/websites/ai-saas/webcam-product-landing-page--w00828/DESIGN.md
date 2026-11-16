# Design system — Webcam Product Landing Page

`SN-W00828` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm off-white page with near-black type and a large Inter headline in the left column. The product sits in a soft cream panel on the right, shown as a single object with a small label row beneath it. Black pills carry the actions and the rating line uses small grey text, so the page depends on whitespace and one product image rather than colour.

**Mood:** warm, product-led, spacious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf9` | Page ground |
| Surface | `#f5f1ea` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |

Palette by frequency of use: `#4b5563` · `#000000` · `#ffffff` · `#fffdf9` · `#f5f1ea` · `#111111` · `#111827` · `#e5e7eb` · `#ffc4bc` · `#a6d8ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-12`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-opacity-90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #fffdf9;
  --color-surface: #f5f1ea;
  --color-text: #111111;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf9',
    surface: '#f5f1ea',
    ink: '#111111',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on #fffdf9 with the product panel on #f5f1ea
- **Do:** Set the headline in Inter at 60px in near-black
- **Do:** Use black pills for primary and light grey pills for secondary actions
- **Don't:** Don't add a bright accent colour; the palette is neutral
- **Don't:** Don't add a gradient to the hero background
- **Don't:** Don't replace the cream product panel with a dark one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
