# Design system — 3D Shader Aurora Comets Effect

`SN-W04152` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A full-screen black canvas with thin streaks of blue and cyan drawn diagonally across it, creating a fast, aurora-like comet effect. There is no interface text, so colour and motion carry the whole design. Blue appears only in the light trails, and the black ground stays open.

**Mood:** atmospheric, kinetic, dark, minimal

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

- **Libraries:** Tailwind CSS (CDN), Three.js

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

- **Do:** Keep the canvas full-screen on a solid black (#000000) ground.
- **Do:** Draw the trails in blue and cyan tones only.
- **Do:** Keep any overlaid text away from the canvas centre.
- **Don't:** Don't add a white background or light panels behind the effect.
- **Don't:** Don't add a second accent colour to the trails.
- **Don't:** Don't place interface panels over the effect.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
