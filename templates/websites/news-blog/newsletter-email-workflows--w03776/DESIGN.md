# Design system — Newsletter Email Workflows

`SN-W03776` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light product-update card on a near-white ground, with a bold dark sans-serif title and a grey subtitle at the top. Below, a two-column grid of feature points each carries a small coloured dot in purple, blue or green, a bold heading and a grey description. A green status line marks availability, and the layout is tidy and even with little ornament.

**Mood:** tidy, even, bright, neutral, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#52525b` · `#f4f4f5` · `#e4e4e7` · `#a1a1aa` · `#fafafa` · `#9333ea` · `#2563eb` · `#3f3f46` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 24px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. 3D / canvas scene (`3d-canvas`)
4. Dashboard preview (`dashboard-preview`)
5. Timeline (`timeline`)
6. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #52525b;
  --color-border: #e4e4e7;
  --color-accent: #9333ea;
  --color-accent-2: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#52525b',
    line: '#e4e4e7',
    accent: '#9333ea',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use a small coloured dot to mark each feature point
- **Do:** Keep the status line in green and the title in dark sans-serif
- **Do:** Arrange feature points in a two-column grid with equal gaps
- **Don't:** Don't use more than three dot colours in one grid
- **Don't:** Don't add shadows to the card
- **Don't:** Don't set feature descriptions in dark text; keep them grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
