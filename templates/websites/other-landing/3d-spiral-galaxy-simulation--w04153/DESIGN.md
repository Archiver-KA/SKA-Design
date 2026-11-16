# Design system — 3D Spiral Galaxy Simulation

`SN-W04153` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black viewport with a small two-line caption in the bottom-left corner naming the galaxy and the mouse control. The interface is limited to this caption, so the spiral itself is the design. White type on pure black keeps the caption quiet and leaves the scene unobstructed.

**Mood:** quiet, cosmic, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f5f5f5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the caption to two short lines in the bottom-left corner.
- **Do:** Keep the background pure black (#000000).
- **Do:** Set the caption in white at a small size.
- **Don't:** Don't add a heading or large title over the scene.
- **Don't:** Don't add coloured overlays on the viewport.
- **Don't:** Don't add buttons over the galaxy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
