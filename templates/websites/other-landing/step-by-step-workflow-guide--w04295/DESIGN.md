# Design system — Step-by-Step Workflow Guide

`SN-W04295` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, step-based section on white with a centred heading and a short subline. Four numbered steps run down a thin vertical rail, each with a pale indigo badge, a bold title and grey body text. The layout is linear and simple, and the badges provide the only colour.

**Mood:** orderly, light, plain, sequential

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#4b5563` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#a5b4fc` | Primary action and highlights |
| Second accent | `#99f6e4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#d1d5db` · `#a5b4fc` · `#99f6e4` · `#000000` · `#e5e7eb` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 36px · h3 18px · body 18px
- **Weights in use:** bold, medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`

## Page structure

Blocks in page order:

1. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #a5b4fc;
  --color-accent-2: #99f6e4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#4b5563',
    line: '#e5e7eb',
    accent: '#a5b4fc',
    accent2: '#99f6e4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Mark each step with a pale indigo badge on a thin vertical rail
- **Do:** Set step titles in dark text and descriptions in grey
- **Do:** Keep the steps in one column with even spacing
- **Don't:** Don't add more colour to the rail or the steps
- **Don't:** Don't break the rail into separate pieces
- **Don't:** Don't make the badges solid dark fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
