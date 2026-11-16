# Design system — Sidebar Navigation Panel

`SN-W04286` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, white sidebar panel in a floating mobile frame, with a search field at the top and section labels in small grey caps. The active item sits on a soft grey fill, and unread counts use small blue (#2563eb) badges. Spacing is even and the type is plain sans, so the menu stays easy to scan.

**Mood:** clean, light, orderly, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#f3f4f6` · `#2563eb` · `#1f2937` · `#ffffff` · `#e5e7eb` · `#111827` · `#374151` · `#fee2e2` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow`
- **Common gaps:** `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-3 px-4 py-2.5 rounded-2xl hover:bg-gray-100 transition text-gray-800 font-medium group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1f2937',
    line: '#e5e7eb',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Label menu sections in small grey caps above their items
- **Do:** Show unread counts as small blue (#2563eb) badges at the row's right edge
- **Do:** Keep the active item on a soft grey fill with dark text
- **Don't:** Don't use dark panels on the light ground
- **Don't:** Don't put more than one blue badge on a single row
- **Don't:** Don't remove the search field at the top of the menu

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
