# Design system — 3D Portfolio Website Template

`SN-W01757` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

It pairs Inter at a 20px heading with dark grey text (#52525b) on a white ground, and uses blend modes and CSS animations over a Three.js scene. The modal overlay and hero are its main pieces.

**Mood:** scene-driven, minimal, animated, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#050505` · `#52525b` · `#000000` · `#d4d4d8` · `#71717a` · `#ef4444` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-1`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the heading in Inter at 20px so the 3D scene stays the focus.
- **Do:** Use the modal overlay for detail or contact views rather than a full page.
- **Do:** Layer blend modes over the Three.js canvas instead of adding opaque panels.
- **Don't:** Don't place opaque cards over the 3D canvas; they hide the effect.
- **Don't:** Don't introduce a second typeface.
- **Don't:** Don't add radius or shadow to the modal.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
