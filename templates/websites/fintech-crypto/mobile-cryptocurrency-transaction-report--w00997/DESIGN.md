# Design system — Mobile Cryptocurrency Transaction Report

`SN-W00997` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, mobile-first wallet screen on near-black (#0e1016), with cards on a slightly lighter surface (#13141a). Each transaction carries a coloured tile, with a different hue per type, and amounts are coloured by direction: red for sent and green for received. The balance sits in a card with a small orange BTC badge, giving the screen a compact, data-first feel.

**Mood:** dark, data-dense, compact, functional, crypto

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e1016` | Page ground |
| Surface | `#13141a` | Cards, panels, raised areas |
| Text | `#e7eaf0` | Headings and primary copy |
| Muted text | `#8389a6` | Secondary copy, captions |
| Border | `#262638` | Hairlines, dividers, outlines |
| Accent | `#f76e6e` | Primary action and highlights |
| Second accent | `#6475df` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e7eaf0` · `#8389a6` · `#262638` · `#0e1016` · `#afb5c3` · `#f76e6e` · `#13141a` · `#202331` · `#1a1d27`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-[22px]` (22px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0e1016;
  --color-surface: #13141a;
  --color-text: #e7eaf0;
  --color-muted: #8389a6;
  --color-border: #262638;
  --color-accent: #f76e6e;
  --color-accent-2: #6475df;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e1016',
    surface: '#13141a',
    ink: '#e7eaf0',
    muted: '#8389a6',
    line: '#262638',
    accent: '#f76e6e',
    accent2: '#6475df',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Keep the screen on near-black (#0e1016) with cards on #13141a.
- **Do:** Colour transaction amounts by direction: red for sent, green for received.
- **Do:** Use one coloured tile per transaction type, with a white glyph inside.
- **Don't:** Don't add shadows to the list cards.
- **Don't:** Don't use a light background for the list.
- **Don't:** Don't set amounts in the body colour; they need the direction colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
