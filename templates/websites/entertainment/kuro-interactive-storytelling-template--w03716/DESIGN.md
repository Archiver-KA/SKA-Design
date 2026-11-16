# Design system — KURO Interactive Storytelling Template

`SN-W03716` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black screen with a small outlined diamond at the centre, holding one Japanese character in off-white above a line of widely spaced caps and a thin rule. The first screen is almost empty, so the warm off-white (#ded5c4) reads as ink on black and the type stays small and quiet. Nothing else competes with the emblem.

**Mood:** quiet, minimal, ceremonial, austere

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0a09` | Page ground |
| Surface | `#171411` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#ded5c4` | Primary action and highlights |
| Second accent | `#9bdcff` | Supporting highlights |

Palette by frequency of use: `#0b0a09` · `#ffffff` · `#ded5c4` · `#171411` · `#080706` · `#ff4527` · `#8bc8ff` · `#ffd68c` · `#9bdcff` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--mono)
- **Body:** var(--mono)
- **Loaded families:** DM Mono, Gloock, Noto Serif JP

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Testimonials (`testimonials`)
5. 3D / canvas scene (`3d-canvas`)
6. Marquee (`marquee`)
7. Call to action (`cta`)
8. Product grid (`product-grid`)
9. Footer (`footer`)
10. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0b0a09;
  --color-surface: #171411;
  --color-text: #ffffff;
  --color-accent: #ded5c4;
  --color-accent-2: #9bdcff;
  --font-display: "var(--mono)", sans-serif;
  --font-body: "var(--mono)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0a09',
    surface: '#171411',
    ink: '#ffffff',
    accent: '#ded5c4',
    accent2: '#9bdcff',
  },
  fontFamily: { display: ['var(--mono)'], sans: ['var(--mono)'] },
} }
```

## Do and don't

- **Do:** Set labels in small, widely spaced uppercase
- **Do:** Use the warm off-white (#ded5c4) for type and rules on black
- **Do:** Frame a single symbol with a thin outlined diamond
- **Don't:** Don't add colour to the first screen
- **Don't:** Don't set captions at a large size
- **Don't:** Don't fill the black ground with images or gradients

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
