# Design system — Minimal Fashion E-commerce Landing Page Template

`SN-W01260` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A pale, almost monochrome hero on near-white. A faded greyscale interior photograph fills the left and centre, and an oversized sans title, Blank Canvas, runs across it and off the right edge. Small nav sits at the top and a short grey paragraph with one text link sits at the left. The image is desaturated, so the type reads as a layer over it.

**Mood:** stark, airy, architectural, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f0f0f0` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#888888` · `#fafafa` · `#111111` · `#e5e5e5` · `#eaeaea` · `#333333` · `#666666` · `#f0f0f0` · `#222222` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 96px · h3 20px · body 14px
- **Weights in use:** medium, light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Logo cloud (`logo-cloud`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f0f0f0;
  --color-text: #111111;
  --color-muted: #888888;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f0f0f0',
    ink: '#111111',
    muted: '#888888',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Desaturate photographs to greyscale and keep them pale behind the type
- **Do:** Set the display title very large in a sans and let it run off the edge
- **Do:** Use one text link as the call to action, with no filled buttons
- **Don't:** Don't put white type on a bright area of the photo; contrast drops
- **Don't:** Don't add colour to the photography
- **Don't:** Don't use filled buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
