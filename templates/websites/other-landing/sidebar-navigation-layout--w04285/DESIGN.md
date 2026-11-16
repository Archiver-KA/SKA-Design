# Design system — Sidebar Navigation Layout

`SN-W04285` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark workspace sidebar beside a near-black content area. The active item is marked by a subtle grey fill rather than colour, and small gold stars flag favourites. A violet-indigo (#4f46e5) button is the one solid colour on the page, while metric cards stay plain grey with green and red change figures.

**Mood:** calm, dark, productive, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0c` | Page ground |
| Surface | `#1d1d1f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8a8a8d` | Secondary copy, captions |
| Border | `#1d1d1f` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#1d1d1f` · `#8a8a8d` · `#e2e2e4` · `#ffffff` · `#0c0c0c` · `#141414` · `#fbbf24` · `#4f46e5` · `#2d2d2f` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h3 14px · body 24px
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-700 text-sm px-3 py-1.5 rounded">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Team (`team`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0c0c0c;
  --color-surface: #1d1d1f;
  --color-text: #ffffff;
  --color-muted: #8a8a8d;
  --color-border: #1d1d1f;
  --color-accent: #4f46e5;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0c',
    surface: '#1d1d1f',
    ink: '#ffffff',
    muted: '#8a8a8d',
    line: '#1d1d1f',
    accent: '#4f46e5',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark the active sidebar item with a subtle grey fill, not a colour
- **Do:** Use the indigo (#4f46e5) for the single primary button on each screen
- **Do:** Show favourites with small gold (#fbbf24) stars and keep all other icons grey
- **Don't:** Don't put colour on the navigation icons
- **Don't:** Don't add a second solid button to the header
- **Don't:** Don't use bright fills on the metric cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
