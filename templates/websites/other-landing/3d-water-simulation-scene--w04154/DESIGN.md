# Design system — 3D Water Simulation Scene

`SN-W04154` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain, bright three-dimensional view of a grey water surface under a pale blue sky, filling most of the frame. The only interface is a small white title and a grey instruction line in the top-left corner. Beyond the title there is no decorative type, so the open, flat scene does the work.

**Mood:** plain, bright, open, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · body 14px
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
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the title small and in the top-left corner.
- **Do:** Keep the water surface as the single large element in the view.
- **Do:** Use white for the title text.
- **Don't:** Don't add colour to the title that competes with the sky.
- **Don't:** Don't place panels over the scene.
- **Don't:** Don't enlarge the title beyond its existing size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
