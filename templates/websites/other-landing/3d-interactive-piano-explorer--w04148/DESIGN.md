# Design system — 3D Interactive Piano Explorer

`SN-W04148` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy scene (#111827) with a bold white title in the top-left corner and two short instruction lines beneath it in smaller white text. The interface is text only, with no buttons or panels, so the 3D piano is the single focus. Hierarchy relies on size and weight alone, set in the default sans-serif.

**Mood:** minimal, instructional, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#ffffff`.

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
  --color-background: #111827;
  --color-text: #ffffff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    ink: '#ffffff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Place the title and instructions in the top-left corner on the navy ground (#111827).
- **Do:** Keep the title bold in sans-serif at about 24px.
- **Do:** Keep instructions to one or two short lines.
- **Don't:** Don't add buttons or panels over the 3D scene.
- **Don't:** Don't add a colour accent to the text.
- **Don't:** Don't centre the title over the scene.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
