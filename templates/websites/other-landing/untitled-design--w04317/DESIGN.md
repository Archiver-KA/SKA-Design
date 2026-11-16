# Design system — Untitled Design

`SN-W04317` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light dashboard on pale grey with white metric cards across the top and a two-column workspace beneath. Large numerals carry the readings, with small labels above them, and a near-black [#111827] button anchors the log form. A pale blue glow at the page edge is the only decorative colour, so the data and controls lead.

**Mood:** clean, data-led, calm, orderly, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#6b7280` · `#111827` · `#1f2937` · `#ffffff` · `#f3f4f6` · `#d1d5db` · `#e5e7eb` · `#4b5563` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h2 16px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="mt-2 w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-offset-gray-950">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. Comparison (`comparison`)
4. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #111827;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
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
    line: '#1f2937',
    accent: '#111827',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#111827) for the primary Save button only
- **Do:** Set metric values as large numerals with a small unit beside them
- **Do:** Keep cards white with rounded-2xl corners on the pale grey page
- **Don't:** Don't place the blue glow behind data panels
- **Don't:** Don't set metric labels in bold; keep them small and muted
- **Don't:** Don't use a coloured button for the main form action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
