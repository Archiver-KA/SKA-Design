# Design system — Ride Activity and Trip Tracker

`SN-W04280` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile screen built from stacked charcoal cards, with a green pill marking the active filter and a green Track button on the live trip. Green (#22c55e) signals active and completed states, and red (#ef4444) marks cancelled or departure points. Figures are bold and right-aligned against small grey addresses, so amounts and status scan first.

**Mood:** functional, dark, compact, status-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#252525` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#22c55e` · `#9ca3af` · `#1a1a1a` · `#374151` · `#ef4444` · `#252525` · `#16a34a` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · body 12px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`

**Primary button**

```html
<a class="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #252525;
  --color-accent: #22c55e;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#252525',
    accent: '#22c55e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#22c55e) for active and completed states and red (#ef4444) for cancelled ones
- **Do:** Set amounts in bold and right-align them against the grey address lines
- **Do:** Show filter tabs as rounded pills, with the selected tab filled in green
- **Don't:** Don't use green or red for decorative elements
- **Don't:** Don't remove the status dot from each list item
- **Don't:** Don't put more than one live trip card on the screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
