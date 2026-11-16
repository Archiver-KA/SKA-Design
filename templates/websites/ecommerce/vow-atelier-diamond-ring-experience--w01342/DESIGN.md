# Design system — Vow Atelier — Diamond Ring Experience

`SN-W01342` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A single dramatic product image fills the hero: a pale oval diamond on a silver band, lit against a dark violet-black glossy surface with soft purple reflections. The design is carried entirely by the photograph and its lighting. The stance is jewellery as sculpture, with the ring alone in frame and dark space around it.

**Mood:** luxurious, dramatic, dark, sculptural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060a15` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#f6efdf` | Primary action and highlights |
| Second accent | `#efb9c1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#17102d` · `#060a15` · `#f6efdf` · `#0b0f1d` · `#cccccc` · `#f5eee7` · `#f5f1e9` · `#efb9c1` · `#b9dfd8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Mono, Italiana, Manrope

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Map / location (`map-location`)
5. Product grid (`product-grid`)
6. About (`about`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #060a15;
  --color-text: #111111;
  --color-accent: #f6efdf;
  --color-accent-2: #efb9c1;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060a15',
    ink: '#111111',
    accent: '#f6efdf',
    accent2: '#efb9c1',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Open on a single hero image of the piece, lit against a dark ground
- **Do:** Keep the surrounding ground near-black with a violet tint (#060a15) so the stone reads brightest
- **Do:** Keep the centre of the frame clear of text, and let the image run full-bleed
- **Don't:** Don't add bright colour to the hero; the stone and the dark surface carry the palette
- **Don't:** Don't place text over the diamond itself
- **Don't:** Don't use a light background for the hero; the dark setting is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
