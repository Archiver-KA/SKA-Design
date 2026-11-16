# Design system — Risograph Print Studio Landing Page Template

`SN-W02209` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, warm, faintly textured ground sits under a bold serif wordmark, with the second half of the logo in coral. The nav is plain, and the only solid element is a dark button labelled Print Something.

**Mood:** plain, warm, printed, unconfirmed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2c2744` | Page ground |
| Surface | `#1c1c1c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f6efff` | Secondary copy, captions |
| Accent | `#f8ecdd` | Primary action and highlights |
| Second accent | `#ff8cc7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#5c5570` · `#2c2744` · `#efe9f6` · `#f6efff` · `#453e57` · `#f7e7ee` · `#e9eef6` · `#f7f0d8` · `#e6efec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Fraunces, Manrope

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #2c2744;
  --color-surface: #1c1c1c;
  --color-text: #ffffff;
  --color-muted: #f6efff;
  --color-accent: #f8ecdd;
  --color-accent-2: #ff8cc7;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2c2744',
    surface: '#1c1c1c',
    ink: '#ffffff',
    muted: '#f6efff',
    accent: '#f8ecdd',
    accent2: '#ff8cc7',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a bold serif with the second half in a warm accent
- **Do:** Keep the nav on a pale ground with one dark button aligned right
- **Do:** Keep the ground pale and faintly textured
- **Don't:** Don't use a dark purple ground; the ground is pale and warm
- **Don't:** Don't add ornament; the ground stays plain
- **Don't:** Don't set the wordmark in sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
