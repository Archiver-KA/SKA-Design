# Design system — Pricing Plans Comparison Table

`SN-W04263` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark comparison table on a near-black ground (#0c0c0e), with a large indigo heading that carries the page's colour. The middle plan is set apart by a tinted indigo column and a violet top rule, so the recommended option reads at a glance. Rows are divided by quiet grey lines in a system sans-serif, which keeps the table dense and easy to scan.

**Mood:** focused, structured, dark, indigo

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0e` | Page ground |
| Surface | `#10102a` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#1f2937` · `#d1d5db` · `#10102a` · `#818cf8` · `#0f0f14` · `#4b5563` · `#9ca3af` · `#6366f1` · `#6b7280` · `#12121a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`

**Primary button**

```html
<a class="w-full py-2.5 px-4 border border-gray-700 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0c0c0e;
  --color-surface: #10102a;
  --color-text: #f3f4f6;
  --color-muted: #d1d5db;
  --color-border: #1f2937;
  --color-accent: #818cf8;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0e',
    surface: '#10102a',
    ink: '#f3f4f6',
    muted: '#d1d5db',
    line: '#1f2937',
    accent: '#818cf8',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Tint the recommended column with a low-opacity indigo fill and give it a violet top rule
- **Do:** Set the page heading in the indigo accent (#818cf8) and keep the rest of the text neutral grey
- **Do:** Separate table rows with thin grey lines and label each feature group in small uppercase
- **Don't:** Don't apply the indigo column fill to more than one plan
- **Don't:** Don't wrap each cell in its own rounded card
- **Don't:** Don't set body text in the accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
