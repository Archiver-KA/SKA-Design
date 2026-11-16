# Design system — Gravity Well 3D Interactive Template

`SN-W02033` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black canvas (#030304) with a faint radial vignette and almost no visible interface: a small label at the top left, a monospaced readout at the bottom left and a pill toggle with two options at the bottom right. The Three.js gravity-well animation is the subject, so the chrome stays small and grey.

**Mood:** immersive, minimal, dark, motion-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030304` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0f0f10` · `#030304`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="ui-panel flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all group">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030304;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030304',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the canvas near-black (#030304) so the 3D animation carries the visual weight
- **Do:** Keep the interface chrome small, grey and in the corners
- **Do:** Use a monospaced face for the small readouts
- **Don't:** Don't add bright colour to the chrome; the animation is the focus
- **Don't:** Don't place text over the centre of the canvas
- **Don't:** Don't present the canvas as a finished page; the animation is the content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
