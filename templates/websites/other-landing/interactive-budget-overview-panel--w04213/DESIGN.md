# Design system — Interactive Budget Overview Panel

`SN-W04213` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy budget panel (#111827) with a rounded card holding three category rows, each with a label, an amount and a thin sparkline. Green and pink lines show the trend, and a wide blue gradient button labelled Details closes the card. Inter sets the headings and figures in white, and the sparklines are the only chart detail, with no axes.

**Mood:** calm, data-focused, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#4b5563` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#f3f4f6` · `#4b5563` · `#e5e7eb` · `#4ade80` · `#9ca3af` · `#1e3a8a` · `#1e40af` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · body 14px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #4b5563;
  --color-text: #f3f4f6;
  --color-muted: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#4b5563',
    ink: '#f3f4f6',
    muted: '#e5e7eb',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show each category as a label, an amount and a thin sparkline
- **Do:** Use the blue gradient only on the closing action button
- **Do:** Keep sparklines free of axes and gridlines
- **Don't:** Don't add axis labels to the sparklines
- **Don't:** Don't use more than two line colours in one card
- **Don't:** Don't use a light card on the dark navy ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
