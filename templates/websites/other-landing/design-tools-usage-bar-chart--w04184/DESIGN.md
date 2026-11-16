# Design system — Design Tools Usage Bar Chart

`SN-W04184` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white chart card on a pale grey ground (#f9fafb) with a thin border, set in Inter with dark grey labels. Bars are rounded and carry the data: the leading tools are in saturated blue gradients, and the rest are flat grey. A dashed orange vertical line marks a reference value, the only warm colour on the card.

**Mood:** clean, data-led, restrained, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |

Palette by frequency of use: `#6b7280` · `#ffffff` · `#111827` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#f9fafb` · `#f3f4f6` · `#1f2937` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 20px
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-3xl`

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #fafafa;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#fafafa',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the blue gradient for the highest bars and grey for the rest
- **Do:** Use the dashed orange reference line for one threshold only
- **Do:** Show a source note in small muted text below the chart
- **Don't:** Don't colour every bar; grey carries the context
- **Don't:** Don't use heavy shadows on the card; keep the thin border
- **Don't:** Don't add a second reference line in another colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
