# Design system — Rotating Cluster of Pulsing Dots

`SN-W04282` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black field with about four hundred small white dots arranged in a loose sphere that swirls slowly around a centre and pulses in brightness. There is no colour, text or chrome, so the motion alone defines the look. The dots are small and sparse, which keeps the effect quiet and atmospheric.

**Mood:** minimal, monochrome, quiet, kinetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes

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

- **Do:** Keep the field pure black (#000000) with white dots only
- **Do:** Keep the dots small and sparse so the cluster reads as a soft form
- **Do:** Let the motion carry the effect; add no text or colour over it
- **Don't:** Don't add colour to the dots
- **Don't:** Don't place content on top of the animation
- **Don't:** Don't raise the dot count so far that the cluster becomes a solid shape

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
