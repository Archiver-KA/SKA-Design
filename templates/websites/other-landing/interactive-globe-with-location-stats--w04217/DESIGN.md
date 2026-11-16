# Design system — Interactive Globe with Location Stats

`SN-W04217` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A slate card (#1f2937) on a navy ground (#111827), with a title, a filter button and a dot-map area showing location markers. Each marker is a small round flag badge, and the top location is highlighted in orange (#f59e0b). Three stat tiles sit below in one row, each with a country name, a small label and a bold percentage.

**Mood:** data-led, dark, compact, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#1f2937` · `#374151` · `#dc2626` · `#f3f4f6` · `#4b5563` · `#ffffff` · `#9ca3af` · `#f59e0b` · `#111827` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 20px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-lg`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="text-gray-300 border border-gray-600 rounded-lg px-3 py-1.5 flex items-center space-x-2 hover:bg-gray-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Map / location (`map-location`)
2. Stats band (`stats`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #f59e0b;
  --color-accent-2: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#f59e0b',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Show each location as a round marker with a small label
- **Do:** Use orange (#f59e0b) to highlight the top location only
- **Do:** Keep the three stat tiles in one row with a label and a figure
- **Don't:** Don't use red for highlights; it competes with the flag colours
- **Don't:** Don't add more than three stat tiles
- **Don't:** Don't use light tiles on the slate card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
