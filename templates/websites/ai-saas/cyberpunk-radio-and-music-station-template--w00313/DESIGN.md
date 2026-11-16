# Design system — Cyberpunk Radio & Music Station Template

`SN-W00313` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A split, monochrome layout on pale grey [#e2e4e7], with a heavy black uppercase headline in three lines and a dark player card below it holding a live waveform. The right half is an empty panel with a thin vertical rule and a small vertical label, so the page relies on negative space. Letter-spaced small labels and the single dark card give it a quiet, record-label tone.

**Mood:** monochrome, quiet, editorial, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e2e4e7` | Page ground |
| Surface | `#0c0e12` | Cards, panels, raised areas |
| Text | `#12141a` | Headings and primary copy |
| Accent | `#ff6b6b` | Primary action and highlights |

Palette by frequency of use: `#ff6b6b` · `#e5484d` · `#1b1e26` · `#0c0e12` · `#12141a` · `#e2e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Chakra Petch
- **Body:** Chakra Petch
- **Loaded families:** Chakra Petch, Roboto Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. 3D / canvas scene (`3d-canvas`)
6. Video / media (`video-media`)
7. Stats band (`stats`)
8. Call to action (`cta`)
9. About (`about`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #e2e4e7;
  --color-surface: #0c0e12;
  --color-text: #12141a;
  --color-accent: #ff6b6b;
  --font-display: "Chakra Petch", sans-serif;
  --font-body: "Chakra Petch", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e2e4e7',
    surface: '#0c0e12',
    ink: '#12141a',
    accent: '#ff6b6b',
  },
  fontFamily: { display: ['Chakra Petch'], sans: ['Chakra Petch'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase black type on the pale grey ground
- **Do:** Keep the player as one dark card (#0c0e12) with a live waveform
- **Do:** Use letter-spaced small labels for the wordmark and section tags
- **Don't:** Don't add a colour accent; the page is monochrome
- **Don't:** Don't fill the empty right panel with decoration; it is negative space
- **Don't:** Don't set the headline in a light weight; it is heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
