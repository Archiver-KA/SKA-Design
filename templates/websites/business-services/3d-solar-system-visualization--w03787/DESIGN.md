# Design system — 3D Solar System Visualization

`SN-W03787` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A full-screen 3D viewer on a pure black ground, with a bold white title and a one-line instruction in the top left. The overlay text is the only visible design in the first view, so the scene itself carries the look. The type is the system sans-serif, unstyled and small, and it stays out of the centre of the canvas.

**Mood:** minimal, dark, spatial, plain

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
- **Scale (largest breakpoint):** h1 24px · body 14px
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

- **Do:** Keep the viewer on pure black (#000000) with white (#ffffff) overlay text.
- **Do:** Set the title in the system sans-serif at a bold weight, in the top left.
- **Do:** Keep one short instruction line under the title.
- **Don't:** Don't add panels or cards over the 3D canvas.
- **Don't:** Don't place other interface controls over the centre of the scene.
- **Don't:** Don't introduce colour into the overlay text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
