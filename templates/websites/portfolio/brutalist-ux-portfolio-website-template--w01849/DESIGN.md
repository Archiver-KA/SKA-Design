# Design system — Brutalist UX Portfolio Website Template

`SN-W01849` · portfolio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A full-bleed saturated yellow page (#f9d312) with a faint square grid drawn as hairlines and small dark letter-spaced navigation along one thin top rule. The yellow is both ground and accent, so the page uses almost no second colour. Nothing else appears on the first screen, which leaves the grid as the main structure.

**Mood:** bold, graphic, minimal, saturated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9d312` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f9d312` | Primary action and highlights |

Palette by frequency of use: `#f9d312` · `#ffffff` · `#000000` · `#737373` · `#262626` · `#a3a3a3` · `#171717` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 48px · body 16px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-4xl`, `max-w-[1920px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Feature grid (`features`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9d312;
  --color-surface: #171717;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #f9d312;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9d312',
    surface: '#171717',
    ink: '#000000',
    muted: '#737373',
    line: '#262626',
    accent: '#f9d312',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#f9d312) as the full ground, not as a small accent
- **Do:** Draw structure with thin grid lines at low contrast
- **Do:** Set navigation in small, letter-spaced uppercase in black
- **Don't:** Don't add a second bright colour beside the yellow
- **Don't:** Don't place large photos on the yellow ground without a black frame
- **Don't:** Don't use a dark ground; the page is yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
