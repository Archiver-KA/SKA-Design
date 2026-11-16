# Design system — Linnea Studio Portfolio & Designer Landing Page Template

`SN-W01821` · portfolio · light mode · Sinera Atlas theme `workshop`

## Direction

Editorial and motion-led: a warm greige ground (#eae5e0) with very large high-contrast Bodoni display type in near-black, centred over the page with small uppercase labels at the edges. Thin rules and caption labels frame the hero. The identity rests on the serif and the restrained warm palette.

**Mood:** editorial, high-contrast, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eae5e0` | Page ground |
| Surface | `#f4f0ea` | Cards, panels, raised areas |
| Text | `#17140f` | Headings and primary copy |
| Muted text | `#1a1611` | Secondary copy, captions |
| Accent | `#ede7dc` | Primary action and highlights |
| Second accent | `#b00020` | Supporting highlights |

Palette by frequency of use: `#17140f` · `#ede7dc` · `#0b0a08` · `#eae5e0` · `#f4efe6` · `#f4f0ea` · `#16130e` · `#1a1611` · `#e3ded7` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bodoni Moda
- **Body:** Bodoni Moda
- **Loaded families:** Bodoni Moda, Manrope, \'Bodoni Moda\

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #eae5e0;
  --color-surface: #f4f0ea;
  --color-text: #17140f;
  --color-muted: #1a1611;
  --color-accent: #ede7dc;
  --color-accent-2: #b00020;
  --font-display: "Bodoni Moda", serif;
  --font-body: "Bodoni Moda", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eae5e0',
    surface: '#f4f0ea',
    ink: '#17140f',
    muted: '#1a1611',
    accent: '#ede7dc',
    accent2: '#b00020',
  },
  fontFamily: { display: ['Bodoni Moda'], sans: ['Bodoni Moda'] },
} }
```

## Do and don't

- **Do:** Set the display headline in Bodoni at a very large size, centred
- **Do:** Use near-black on the warm greige ground and no other colour
- **Do:** Frame the hero with small uppercase labels at the edges
- **Don't:** Don't add a bright accent; the palette stays warm and neutral
- **Don't:** Don't substitute a light sans for the Bodoni display
- **Don't:** Don't set small body text in light grey on the greige ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
