# Design system — Interactive 3D Globe with Controls

`SN-W04210` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light grey panel (#f3f4f6) with slider controls for rotation, tilt, scale and map brightness, in dark slate. Colour swatches are rows of small round dots in blue, green, purple and pink, and a dark toggle with a light option sits near the bottom beside a grey Reset button. Blue (#3b82f6) marks the slider thumbs, and the globe area sits to the left in the same light ground.

**Mood:** clean, neutral, functional, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#d1d5db` · `#4b5563` · `#e5e7eb` · `#1f2937` · `#ffffff` · `#f3f4f6` · `#3b82f6` · `#22c55e` · `#a855f7` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 20px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`

**Primary button**

```html
<a class="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #e5e7eb;
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-border: #d1d5db;
  --color-accent: #3b82f6;
  --color-accent-2: #ec4899;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#e5e7eb',
    ink: '#1f2937',
    muted: '#4b5563',
    line: '#d1d5db',
    accent: '#3b82f6',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for slider thumbs and the active toggle
- **Do:** Keep labels on the left and values on the right of each slider
- **Do:** Show colour choices as small round swatches in a row
- **Don't:** Don't use more than one accent colour on the sliders
- **Don't:** Don't leave the active state of a toggle unclear
- **Don't:** Don't use heavy shadows on the panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
