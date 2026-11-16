# Design system — Vibra'son Cultural Association Template

`SN-W02277` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a bold black wordmark, one row of plain text navigation and stacked text links, and no colour or imagery beyond that. The ground is white with near-black text (#1a1a1c) set in a system sans-serif.

**Mood:** plain, neutral, community, open, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#1a1a1c` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1a1a1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 20px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Newsletter signup (`newsletter`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #1a1a1c;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#1a1a1c',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the ground white (#ffffff) with near-black text (#1a1a1c).
- **Do:** Use the system sans-serif for all text.
- **Do:** Lay out the page as headline, feature sections, stats and a newsletter form.
- **Don't:** Don't add a coloured accent; none is specified.
- **Don't:** Don't set the text in a serif; the page uses one sans.
- **Don't:** Don't add a second typeface; the page uses the system face only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
