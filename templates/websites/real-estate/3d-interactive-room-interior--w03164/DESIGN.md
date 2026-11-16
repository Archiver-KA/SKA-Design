# Design system — 3D Interactive Room Interior

`SN-W03164` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A flat dark navy field (#111827) with a small translucent instruction card in the top-left corner forms the stage for the 3D room. The design is plain and utilitarian, a dark stage with white text.

**Mood:** plain, dark, utilitarian, quiet, instructional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #000000;
  --color-text: #ffffff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#000000',
    ink: '#ffffff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the dark navy (#111827) full-bleed canvas as the stage
- **Do:** Keep the instruction card as a small translucent dark panel in a corner
- **Do:** Write instructions as short lines, one action per line
- **Don't:** Don't place light backgrounds behind the canvas
- **Don't:** Don't cover the scene with heavy overlays
- **Don't:** Don't set the instruction card in a bright colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
