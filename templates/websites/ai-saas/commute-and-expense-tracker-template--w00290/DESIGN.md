# Design system — Commute & Expense Tracker Template

`SN-W00290` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, light expense screen on a pale grey page [#f9fafb] with white cards and hairline grey borders. The indigo [#4f46e5] marks the primary button and the total payout card, and the rest is neutral grey text. Inter at small sizes, with three summary cards in a row, makes the screen read as a clear monthly statement.

**Mood:** quiet, light, orderly, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#6b7280` · `#111827` · `#e5e7eb` · `#f9fafb` · `#4f46e5` · `#ffffff` · `#9ca3af` · `#4b5563` · `#6366f1` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="text-xs bg-white px-2 py-1 rounded shadow-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #4f46e5;
  --color-accent-2: #16a34a;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
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
    accent: '#4f46e5',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set cards in white with a 1px grey border on the pale grey page
- **Do:** Use the indigo (#4f46e5) for the primary button and the highlighted summary card
- **Do:** Show totals as large numbers with small grey labels beneath
- **Don't:** Don't add shadows to the summary cards
- **Don't:** Don't use the green (#16a34a) for anything except a positive status
- **Don't:** Don't set the page on a dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
