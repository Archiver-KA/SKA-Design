# Design system — Concentric Expanding Dot Rings

`SN-W04176` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black ground holds concentric rings of small white dots that expand and contract with staggered timing. There is no text or chrome, so the pattern alone fills the frame. Bright dots on black give the motion a luminous, precise quality.

**Mood:** luminous, rhythmic, minimal, monochrome

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
- **Libraries:** Tailwind CSS (CDN)

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

- **Do:** Keep the background pure black (#000000).
- **Do:** Draw every dot in white (#ffffff) or near-white.
- **Do:** Keep the rings centred and evenly spaced.
- **Don't:** Don't add colour to the dots.
- **Don't:** Don't add text or borders over the pattern.
- **Don't:** Don't use grey dots; the contrast relies on white on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
