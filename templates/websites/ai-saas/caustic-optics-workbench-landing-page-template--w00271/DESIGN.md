# Design system — CAUSTIC Optics Workbench Landing Page Template

`SN-W00271` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic optics workbench hero: a deep blue-black ground (#08090a) with large faceted glass-like shapes in slate, and a single bright glow point as the focal element. The copy is small and stacked in white, with tiny monospaced labels above it and two soft translucent pill buttons. The mood is technical and moody, and the geometry rather than colour does the work.

**Mood:** cinematic, technical, moody, faceted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090a` | Page ground |
| Surface | `#eef2f7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#d68a72` | Primary action and highlights |
| Second accent | `#6f9ad6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#050609` · `#eef2f7` · `#0b0c0e` · `#08090a` · `#070809` · `#0a0e14` · `#6f9ad6` · `#e6e9ee` · `#d68a72`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--disp)
- **Body:** var(--disp)

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #08090a;
  --color-surface: #eef2f7;
  --color-text: #ffffff;
  --color-accent: #d68a72;
  --color-accent-2: #6f9ad6;
  --font-display: "var(--disp)", sans-serif;
  --font-body: "var(--disp)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090a',
    surface: '#eef2f7',
    ink: '#ffffff',
    accent: '#d68a72',
    accent2: '#6f9ad6',
  },
  fontFamily: { display: ['var(--disp)'], sans: ['var(--disp)'] },
} }
```

## Do and don't

- **Do:** Set the hero ground in #08090a with the geometry in slate tones
- **Do:** Keep the bright glow as the single focal point
- **Do:** Set the copy small in white, with monospaced labels above the headline
- **Don't:** Don't add bright accent colour; the peach and blue tints do not show in the hero
- **Don't:** Don't put copy over the brightest glass facet without a dark overlay
- **Don't:** Don't use large display type; the hero is small and restrained

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
