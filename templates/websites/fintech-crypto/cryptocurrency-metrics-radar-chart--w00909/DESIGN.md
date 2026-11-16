# Design system — Cryptocurrency Metrics Radar Chart

`SN-W00909` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark data card on a near-black [#171923] field, built around a six-axis radar chart drawn in bitcoin orange [#f7931a] with thin grey grid lines. The header pairs a round orange coin icon with a bold white title. Metrics sit below in a small two-column grid with bold white values and small grey labels. Orange is the only colour; everything else is white or grey.

**Mood:** data-driven, dark, focused, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171923` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f7931a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171923` · `#f7931a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, black

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #171923;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f7931a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171923',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f7931a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Draw chart series only in orange (#f7931a)
- **Do:** Keep grid lines thin and grey behind the radar
- **Do:** Set metric values in bold white with small grey labels
- **Don't:** Don't add a second data colour to the radar
- **Don't:** Don't place the card on a light page; the surface is built for dark
- **Don't:** Don't enlarge axis labels beyond small sizes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
