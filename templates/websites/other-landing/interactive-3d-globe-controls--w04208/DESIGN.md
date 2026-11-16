# Design system — Interactive 3D Globe Controls

`SN-W04208` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark slate control panel over a navy ground (#111827), with sliders for rotation, tilt, scale and colour. Each row is a label, a value and a bar, and colour choices are rows of small round swatches. Blue (#3b82f6) marks the slider thumbs and the selected theme toggle, and the Reset button is a quiet outlined control in the corner, set in a plain system sans.

**Mood:** functional, dark, tidy, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Border | `#4b5563` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#4b5563` · `#ffffff` · `#d1d5db` · `#374151` · `#1f2937` · `#3b82f6` · `#111827` · `#22c55e` · `#a855f7` · `#ef4444`.

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
- **Common gaps:** `gap-2`

**Primary button**

```html
<a class="p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-600">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #d1d5db;
  --color-border: #4b5563;
  --color-accent: #3b82f6;
  --color-accent-2: #fcd34d;
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
    surface: '#374151',
    ink: '#d1d5db',
    line: '#4b5563',
    accent: '#3b82f6',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Arrange each control as label, then value, then slider
- **Do:** Use blue (#3b82f6) for slider thumbs and the selected toggle
- **Do:** Show colour choices as rows of small round swatches
- **Don't:** Don't mix slider styles within the same panel
- **Don't:** Don't use more than one accent colour for controls
- **Don't:** Don't add decorative imagery beside the controls

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
