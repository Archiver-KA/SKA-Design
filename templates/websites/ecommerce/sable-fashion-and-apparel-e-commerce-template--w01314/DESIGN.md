# Design system — SABLE Fashion & Apparel E-commerce Template

`SN-W01314` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A monochrome fashion storefront on a warm grey ground (#e4e1dc) with near-black type. The look is editorial and oversized: a full-width wordmark in heavy, tightly set sans-serif dominates the first screen, with small uppercase navigation and one dark button for the primary action. There is no colour; the page relies on scale, weight and the photography to create emphasis.

**Mood:** monochrome, editorial, oversized, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e4e1dc` | Page ground |
| Surface | `#dcd9d3` | Cards, panels, raised areas |
| Text | `#1b1b1b` | Headings and primary copy |
| Muted text | `#5a574f` | Secondary copy, captions |
| Accent | `#1b1b1b` | Primary action and highlights |

Palette by frequency of use: `#4a4741` · `#dcd9d3` · `#e4e1dc` · `#2e2e2e` · `#1b1b1b` · `#54514c` · `#5a574f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Listings (`listings`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Video / media (`video-media`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #e4e1dc;
  --color-surface: #dcd9d3;
  --color-text: #1b1b1b;
  --color-muted: #5a574f;
  --color-accent: #1b1b1b;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e4e1dc',
    surface: '#dcd9d3',
    ink: '#1b1b1b',
    muted: '#5a574f',
    accent: '#1b1b1b',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Keep the palette to warm greys and near-black (#1b1b1b)
- **Do:** Set the wordmark or headline at display scale in heavy Archivo
- **Do:** Keep navigation small and uppercase, and use one dark button style for actions
- **Don't:** Don't introduce a colour accent; the page stays monochrome
- **Don't:** Don't use light font weights for headlines; the heavy weight is the look
- **Don't:** Don't place decorative graphics beside the wordmark; let whitespace do the work

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
