# Design system — 3D Grass Field with Moving Clouds

`SN-W04142` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, immersive stance where the 3D field is the design and the interface is almost absent. A small white heading and a grey instruction line sit in the top-left corner on a deep navy ground (#111827), leaving the canvas clear. Colour comes from the scene itself, not from the page, so the layout relies on negative space and motion.

**Mood:** quiet, immersive, minimal, dark

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

- **Do:** Keep interface text to one heading and one instruction line in the top-left corner.
- **Do:** Use the navy ground (#111827) as the only background behind the scene.
- **Do:** Let the 3D canvas fill the viewport with no overlaid panels.
- **Don't:** Don't add cards or boxes over the canvas.
- **Don't:** Don't add accent colours to the interface text.
- **Don't:** Don't place body copy over the scene.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
