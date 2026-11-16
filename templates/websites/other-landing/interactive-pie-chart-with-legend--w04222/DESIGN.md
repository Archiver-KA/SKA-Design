# Design system — Interactive Pie Chart with Legend

`SN-W04222` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The design is a restrained dark dashboard widget set in Manrope, with the page ground near black (#0a0a0a) and cards one step lighter (#171717). Colour lives only in the data: a four-segment donut uses red, green, teal and yellow against the neutral surface, and the labels stay plain white and grey. Depth comes from the flat card and rounded corners, not from shadows or gradients.

**Mood:** restrained, data-led, flat, monochrome base

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffc800` | Primary action and highlights |
| Second accent | `#ff3b30` | Supporting highlights |

Palette by frequency of use: `#f5f5f5` · `#a3a3a3` · `#ff3b30` · `#34c759` · `#00c7be` · `#ffc800` · `#0a0a0a` · `#171717` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h2 18px · body 14px
- **Weights in use:** semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ffc800;
  --color-accent-2: #ff3b30;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ffc800',
    accent2: '#ff3b30',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set labels in Manrope in white (#f5f5f5) and secondary text in grey (#a3a3a3)
- **Do:** Use the four chart colours only for data segments, one per series
- **Do:** Keep cards on the #171717 surface with rounded-2xl corners
- **Don't:** Don't add drop shadows or gradient fills to cards
- **Don't:** Don't use the chart colours for body text or button fills outside charts
- **Don't:** Don't place light surfaces on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
