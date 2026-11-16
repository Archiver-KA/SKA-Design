# Design system — Editorial Creative Portfolio Landing Page Template

`SN-W02003` · portfolio · light mode · Sinera Atlas theme `workshop`

## Direction

A cream ground (#eae5e0) with near-black ink (#17140f) and no colour accent on screen. The headline is set in Bodoni Moda at very large size, stacked across the full width with tight leading and high stroke contrast. Tiny uppercase labels in the margins and a thin tracked nav frame it, so the type works like a magazine cover.

**Mood:** high-contrast, editorial, monochrome, fashion-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eae5e0` | Page ground |
| Surface | `#f4f0ea` | Cards, panels, raised areas |
| Text | `#17140f` | Headings and primary copy |
| Muted text | `#1a1611` | Secondary copy, captions |
| Accent | `#17140f` | Primary action and highlights |
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
  --color-accent: #17140f;
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
    accent: '#17140f',
    accent2: '#b00020',
  },
  fontFamily: { display: ['Bodoni Moda'], sans: ['Bodoni Moda'] },
} }
```

## Do and don't

- **Do:** Set the display headline in Bodoni Moda at very large size, across the full width
- **Do:** Keep the palette to cream and near-black ink
- **Do:** Place tiny tracked uppercase labels in the margins as secondary text
- **Don't:** Don't add a coloured accent; the page is monochrome
- **Don't:** Don't swap the display headline for a sans; the contrast depends on the didone
- **Don't:** Don't add cards or boxes around text; the layout is open type on the ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
