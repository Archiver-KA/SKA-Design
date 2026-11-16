# Design system — Interactive Global Network Visualization

`SN-W04216` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A slate card (#111827) with a hairline border (#1f2937) sits on a deeper black ground (#030712), holding a dot-based globe, a short title and a legend. The card has a soft backdrop blur and muted grey text, and small legend dots in purple and teal keep the tone quiet. The globe is the only visual, so the card needs no other decoration.

**Mood:** quiet, dark, technical, geographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#111827` · `#1f2937` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#030712` · `#ffffff` · `#a855f7` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 24px · body 14px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-sm`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #a855f7;
  --color-accent-2: #14b8a6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#a855f7',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the globe card in slate tones with a hairline border
- **Do:** Use purple and teal only for hub and regional markers
- **Do:** Pair the card title with a one-line grey subtitle
- **Don't:** Don't add bright fills behind the globe
- **Don't:** Don't put more than one visual in the card
- **Don't:** Don't set body copy in white; keep it grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
