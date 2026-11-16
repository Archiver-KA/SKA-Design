# Design system — Interactive 3D Computer Model

`SN-W04206` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black demo panel with small white sans text at the top left: a one-line instruction, a status line and a typed-input line. Beyond those three lines the panel is plain black, and the 3D computer is the only visual and the focus. No colour is used in the interface, so the model carries all of the detail.

**Mood:** minimal, utilitarian, dark, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f5f5f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep status text small and white at the top left
- **Do:** Show the typed input and power state as plain text lines
- **Do:** Let the 3D object take the full black area
- **Don't:** Don't add colour to the status text
- **Don't:** Don't place panels or cards over the model area
- **Don't:** Don't use a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
