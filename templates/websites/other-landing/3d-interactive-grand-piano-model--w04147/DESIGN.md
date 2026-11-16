# Design system — 3D Interactive Grand Piano Model

`SN-W04147` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An all-black viewport with the 3D model rendered against it and a single small grey caption in the bottom-left corner giving the mouse instruction. The design is intentionally empty: there are no headings, panels or colour, so the object provides all of the visual interest. Interface text stays small so it never competes with the model.

**Mood:** stark, minimal, object-first, dark

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

- **Do:** Keep the viewport solid black (#000000) with nothing behind the model.
- **Do:** Place the one-line instruction in grey in the bottom-left corner.
- **Do:** Keep interface text small so the model stays dominant.
- **Don't:** Don't add a background image or gradient behind the model.
- **Don't:** Don't place a heading over the scene.
- **Don't:** Don't add colour to the interface text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
