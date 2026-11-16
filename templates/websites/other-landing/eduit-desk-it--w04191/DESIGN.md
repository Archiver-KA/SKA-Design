# Design system — EDUIT Desk IT 

`SN-W04191` · other-landing · light mode · Sinera Atlas theme `circuit` · language `sk`

## Direction

A plain service form for reporting IT faults, set on a pale grey ground (#f9fafb) under a white header bar with a thin divider. Inter sets the labels and headings in dark ink (#111827), and category choices appear as bordered tiles, with the selected tile outlined in near-black. The brand word is set in heavy and light weights, and the page uses few colours so the form reads first.

**Mood:** plain, functional, clear, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#111827` · `#e5e7eb` · `#ffffff` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#f9fafb` · `#374151` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-lg transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show category choices as bordered tiles, outlined in near-black when selected
- **Do:** Keep labels above fields in Inter at small sizes
- **Do:** Set the header on white with one thin divider below it
- **Don't:** Don't add colour to the form controls; ink and grey do the work
- **Don't:** Don't use filled buttons for the choice tiles
- **Don't:** Don't wrap the form in a card with heavy shadows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
