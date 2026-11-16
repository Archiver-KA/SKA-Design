# Design system — Team Workspace Storage Overview

`SN-W04304` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft light card on a white ground showing team storage as a segmented colour bar. Each category gets its own hue from a small pastel set, with a dot-and-label legend beneath, so the shares read at a glance. Inter throughout, with fully rounded avatars and pill tags, keeps the component friendly and compact.

**Mood:** clean, friendly, light, data-led, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#94a3b8` · `#ffffff` · `#475569` · `#e2e8f0` · `#60a5fa` · `#cbd5e1` · `#f43f5e` · `#34d399` · `#f8fafc` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-inner`
- **Common gaps:** `gap-1`, `gap-2`, `gap-6`

## Page structure

Blocks in page order:

1. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #475569;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f1f5f9',
    ink: '#475569',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the segmented bar thin and list every colour in the legend beneath it
- **Do:** Set avatars as fully rounded circles that overlap slightly
- **Do:** Round the card corners to rounded-3xl and keep the spacing even
- **Don't:** Don't use a bar colour that is missing from the legend
- **Don't:** Don't place the card on a dark background; the component is built for light surfaces
- **Don't:** Don't add heavy borders around the card; separation comes from the soft tint

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
