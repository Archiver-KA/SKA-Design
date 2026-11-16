# Design system — SABLE Fashion Landing Page Template

`SN-W02812` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome fashion page on a warm light grey ground (#e4e1dc), with the brand name set as a very large, heavy Archivo wordmark in near-black. Navigation is small uppercase with wide spacing, a black rectangular button leads the action, and a thin top strip carries offers. Warm neutrals and black make up the whole palette, so the wordmark does the work an image would do elsewhere.

**Mood:** monochrome, warm-neutral, bold, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e4e1dc` | Page ground |
| Surface | `#dcd9d3` | Cards, panels, raised areas |
| Text | `#1b1b1b` | Headings and primary copy |
| Muted text | `#5a574f` | Secondary copy, captions |
| Accent | `#1b1b1b` | Primary action and highlights |

Palette by frequency of use: `#4a4741` · `#dcd9d3` · `#e4e1dc` · `#2e2e2e` · `#1b1b1b` · `#54514c` · `#5a574f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Listings (`listings`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Video / media (`video-media`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #e4e1dc;
  --color-surface: #dcd9d3;
  --color-text: #1b1b1b;
  --color-muted: #5a574f;
  --color-accent: #1b1b1b;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e4e1dc',
    surface: '#dcd9d3',
    ink: '#1b1b1b',
    muted: '#5a574f',
    accent: '#1b1b1b',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in Archivo at heavy weight, very large
- **Do:** Use near-black (#1b1b1b) for the primary button and the wordmark
- **Do:** Keep backgrounds on warm neutrals (#e4e1dc, #dcd9d3) with no added hue
- **Don't:** Don't add a brand colour; the palette is neutral only
- **Don't:** Don't set body text in pure black; the page uses warm grey (#4a4741)
- **Don't:** Don't introduce a second typeface; the page uses Archivo only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
