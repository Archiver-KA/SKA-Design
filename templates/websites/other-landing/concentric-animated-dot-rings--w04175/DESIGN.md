# Design system — Concentric Animated Dot Rings

`SN-W04175` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome graphic piece: concentric rings of small near-black dots (#111111) on a white ground, with no text or chrome. The dots sit in staggered circles that shift outward and back, producing a rhythmic ripple. Black on white is the only contrast, and the rings are centred in the frame.

**Mood:** graphic, rhythmic, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground white (#ffffff) and the dots near-black (#111111).
- **Do:** Keep the dots evenly spaced around each ring.
- **Do:** Keep the rings centred on the canvas.
- **Don't:** Don't add colour to the dots.
- **Don't:** Don't add text or borders around the rings.
- **Don't:** Don't let the rings clip at the canvas edge.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
