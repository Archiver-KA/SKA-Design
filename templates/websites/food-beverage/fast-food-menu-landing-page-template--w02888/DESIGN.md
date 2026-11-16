# Design system — Fast Food Menu Landing Page Template

`SN-W02888` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet, product-catalogue layout on a pale grey ground (#f9fafb) with white tiles and thin grey borders. Category tiles carry small pastel swatches as their only colour, and the active filter is a solid near-black pill, so the page stays neutral and the food photos supply the colour. Inter sits in plain weights with large headings and muted grey captions, and structure comes from spacing and cards.

**Mood:** neutral, catalogue, airy, functional, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#e11d48` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#e5e7eb` · `#f3f4f6` · `#9ca3af` · `#fed7aa` · `#6b7280` · `#1f2937` · `#4b5563` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-gray-300 hover:bg-gray-50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --color-accent-2: #e11d48;
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
    surface: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
    accent2: '#e11d48',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #f9fafb with white cards and #e5e7eb borders.
- **Do:** Use the near-black (#111827) for the active filter and primary emphasis.
- **Do:** Let food photography carry the colour; keep tiles and chips neutral.
- **Don't:** Don't fill category tiles with strong colour; pastel swatches are the limit.
- **Don't:** Don't add heavy shadows or gradients to tiles; the cards are flat.
- **Don't:** Don't set headings in a display face; Inter is used for all text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
