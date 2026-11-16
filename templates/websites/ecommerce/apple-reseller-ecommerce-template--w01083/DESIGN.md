# Design system — Apple Reseller eCommerce Template

`SN-W01083` · ecommerce · dark mode · Sinera Atlas theme `market` · language `it`

## Direction

A dark, product-led reseller page on near-black olive (#20231e), with a large white headline and one lime word that carries the colour. Lime (#d7ff3e) fills the primary button and the highlighted word, and nothing else is saturated. The hero shows a product in a dark panel with a floating price card, and small uppercase eyebrow labels add a technical note.

**Mood:** dark, product-led, technical, sharp, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#20231e` | Page ground |
| Surface | `#1d1e1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#777b72` | Secondary copy, captions |
| Border | `#20231e` | Hairlines, dividers, outlines |
| Accent | `#d7ff3e` | Primary action and highlights |
| Second accent | `#f0e1df` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d7ff3e` · `#20231e` · `#1b1e1c` · `#1d1e1a` · `#20211d` · `#d9ff3f` · `#777b72` · `#9b9d96` · `#edede8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Mono, Manrope

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Framer Motion, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #20231e;
  --color-surface: #1d1e1a;
  --color-text: #ffffff;
  --color-muted: #777b72;
  --color-border: #20231e;
  --color-accent: #d7ff3e;
  --color-accent-2: #f0e1df;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#20231e',
    surface: '#1d1e1a',
    ink: '#ffffff',
    muted: '#777b72',
    line: '#20231e',
    accent: '#d7ff3e',
    accent2: '#f0e1df',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set one headline word in lime (#d7ff3e) and no others
- **Do:** Use lime for the primary button only
- **Do:** Keep product images in dark panels with a floating price card
- **Don't:** Don't use lime for large fills
- **Don't:** Don't put light grey panels on the dark hero
- **Don't:** Don't add decorative gradients behind the product

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
