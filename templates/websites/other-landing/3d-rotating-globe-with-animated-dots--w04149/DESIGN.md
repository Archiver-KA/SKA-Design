# Design system — 3D Rotating Globe with Animated Dots

`SN-W04149` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sphere of small white dots on a pure black ground, with no headings, labels or panels around it. The look is monochrome and sparse: pale dots arranged on a loose, even grid that pulse at random. Nothing else competes with the globe, so all contrast comes from white on black.

**Mood:** monochrome, sparse, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

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

- **Do:** Keep the background pure black (#000000) with nothing behind the globe.
- **Do:** Draw every dot in white (#ffffff).
- **Do:** Keep the globe centred with no labels around it.
- **Don't:** Don't add colour to the dots.
- **Don't:** Don't add a heading or caption over the globe.
- **Don't:** Don't place a border around the canvas.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
