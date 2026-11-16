# Design system — Kuro Storytelling & Portfolio Template

`SN-W02070` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, ceremonial opening screen on near-black (#0b0a09) with a single centred emblem: a thin-outlined diamond holding one character in warm off-white (#ded5c4). A small, widely tracked uppercase caption and a hairline rule sit beneath it. The screen is nearly empty, so the emblem and generous spacing carry the design.

**Mood:** ceremonial, minimal, dark, quiet, austere

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

- **Do:** Keep the ground near-black (#0b0a09) and use warm off-white (#ded5c4) for the emblem and type.
- **Do:** Frame a single symbol in a thin-outlined diamond, centred on the screen.
- **Do:** Set captions in small, widely tracked uppercase with a hairline rule beneath.
- **Don't:** Don't add bright colours; the palette stays black and warm off-white.
- **Don't:** Don't fill the diamond frame; it is an outline.
- **Don't:** Don't crowd the opening screen with navigation or imagery.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
