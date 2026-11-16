# Design system — Anachak Real Estate Marketplace Template

`SN-W01080` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A functional booking marketplace on white, built as a dense search bar above a grid of listing cards. Orange (#fb923c) is the single brand colour and marks the main search action and the selected filter, so the eye goes straight to the one thing to do. Cards are light grey image frames with compact title, price and rating lines, and category chips are small uppercase tags.

**Mood:** functional, dense, clean, practical, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#e5e7eb` · `#fb923c` · `#374151` · `#f9fafb` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)]`, `shadow-orange-500/30`
- **Content width:** `max-w-[1800px]`, `max-w-3xl`
- **Common gaps:** `gap-1.5`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:shadow-sm transition-all bg-white text-gray-900 font-medium text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #fb923c;
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
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#fb923c',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#fb923c) only for the primary search action and the active filter
- **Do:** Keep listing cards to image, title, location, price and rating
- **Do:** Show prices as bold figures with a small unit suffix
- **Don't:** Don't add a second brand colour to tags or chips
- **Don't:** Don't use oversized hero imagery above the search bar
- **Don't:** Don't mix card corner radii

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
