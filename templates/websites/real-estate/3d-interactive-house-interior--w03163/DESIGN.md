# Design system — 3D Interactive House Interior

`SN-W03163` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black (#1a1a1a) canvas with white text gives the 3D house stage a utilitarian feel. A small instruction card sits in the top-left corner over the scene.

**Mood:** utilitarian, dark, plain, instructional, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-text: #f5f5f5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the dark grey (#1a1a1a) full-bleed canvas as the stage
- **Do:** Keep the instruction card as a small dark panel in a corner with white text
- **Do:** List controls as short lines, each with a small icon
- **Don't:** Don't place a light background behind the canvas
- **Don't:** Don't cover the scene with heavy overlays
- **Don't:** Don't set the instruction card in a bright colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
