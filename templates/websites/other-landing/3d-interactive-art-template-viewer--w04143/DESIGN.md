# Design system — 3D Interactive Art Template Viewer

`SN-W04143` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A playful control-panel layout: a small translucent panel sits in the top-left corner over a blue-to-purple gradient ground (#4f46e5). Each action button carries its own saturated hue, and the swatch row adds more colour, so the page reads as a creative toolbar rather than a brand. Inter is set small throughout, keeping attention on the 3D canvas.

**Mood:** playful, utilitarian, colourful, translucent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#4f46e5` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#3b82f6` · `#22c55e` · `#eab308` · `#a855f7` · `#ec4899` · `#4f46e5` · `#4338ca` · `#ca8a04`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 14px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px)
- **Common gaps:** `gap-1`

**Primary button**

```html
<a class="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #4f46e5;
  --color-text: #111111;
  --color-accent: #ef4444;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#4f46e5',
    ink: '#111111',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the control panel as a translucent card in the top-left corner.
- **Do:** Use one saturated hue per action button: blue for randomise, amber for reset, green for save.
- **Do:** Set labels in Inter at the existing small sizes.
- **Don't:** Don't replace the gradient ground with a flat white page.
- **Don't:** Don't give one button more than one saturated colour.
- **Don't:** Don't enlarge the control labels; the canvas must stay dominant.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
