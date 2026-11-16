# Design system — Interactive Tunnel Shader Effect

`SN-W04227` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome, full-bleed visual on pure black (#000000), built from a tunnel of small white points that recede into a dark centre. There is no accent colour and no type on the first screen, so the design relies on depth and density. Its character comes from the point spacing, which tightens toward the vanishing point.

**Mood:** monochrome, immersive, technical, minimal

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

## Shape, spacing and layout

- **Corner radius:** none used — square corners

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

- **Do:** Keep the ground pure black (#000000) with white points only
- **Do:** Use perspective depth and point density, not colour, for emphasis
- **Do:** Leave the centre dark so the vanishing point stays clear
- **Don't:** Don't add accent colours to the points
- **Don't:** Don't place text over the dense centre of the tunnel
- **Don't:** Don't use a light background; the points need black to read

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
