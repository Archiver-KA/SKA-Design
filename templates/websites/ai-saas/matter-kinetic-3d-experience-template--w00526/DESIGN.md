# Design system — MATTER Kinetic 3D Experience Template

`SN-W00526` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale warm-grey experimental page on #f3f2ee with oversized, tightly set uppercase black headlines and a serif italic line in blue. The layout is spare, with most of the page left empty for a 3D scene. Lavender (#b7b0ff) is the only accent, and it stays in small details, so the page feels physical and editorial rather than digital.

**Mood:** experimental, editorial, spare, physical, warm grey

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f2ee` | Page ground |
| Text | `#0a0a0b` | Headings and primary copy |
| Muted text | `#8e8e96` | Secondary copy, captions |
| Accent | `#b7b0ff` | Primary action and highlights |

Palette by frequency of use: `#8e8e96` · `#f3f2ee` · `#ffffff` · `#b7b0ff` · `#0a0a0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Archivo, Instrument Serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f2ee;
  --color-text: #0a0a0b;
  --color-muted: #8e8e96;
  --color-accent: #b7b0ff;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f2ee',
    ink: '#0a0a0b',
    muted: '#8e8e96',
    accent: '#b7b0ff',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in oversized uppercase black and keep them tightly spaced.
- **Do:** Use a serif italic for one accent line.
- **Do:** Leave generous empty space for the 3D scene.
- **Don't:** Don't use pure white for the main ground; the page is warm grey.
- **Don't:** Don't fill the hero with extra imagery over the 3D scene.
- **Don't:** Don't use the lavender (#b7b0ff) for large fills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
