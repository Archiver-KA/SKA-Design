# Design system — 3D Scene with Rotating Cubes

`SN-W04151` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black 3D stage with a bold white title in the top-left corner and a shorter grey subtitle beneath it. A caption is centred at the bottom edge. The interface carries no colour; the rotating cubes supply the only motion, and the type is kept small and plain so the scene stays in charge.

**Mood:** minimal, monochrome, instructional, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the title bold and white in the top-left corner.
- **Do:** Keep the instruction caption small and centred at the bottom edge.
- **Do:** Keep the background pure black (#000000).
- **Don't:** Don't add panels or buttons over the scene.
- **Don't:** Don't set the title in grey; reserve grey for captions.
- **Don't:** Don't add a colour accent to the interface.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
