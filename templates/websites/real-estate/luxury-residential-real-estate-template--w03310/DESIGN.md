# Design system — Luxury Residential Real Estate Template

`SN-W03310` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, low-contrast hero built on a gradient that runs from cream at the left to taupe grey at the right, framed by a dark brown border. The headline is a heavy sans in deep brown (#2c2620), with a body paragraph in the same family and outlined rectangular buttons in tracked caps. The palette is warm neutrals, with tan (#b8875f) kept to thin outlines.

**Mood:** warm, soft, domestic, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf8f3` | Page ground |
| Surface | `#f7f3ec` | Cards, panels, raised areas |
| Text | `#2c2620` | Headings and primary copy |
| Muted text | `#4a3b33` | Secondary copy, captions |
| Border | `#2c2620` | Hairlines, dividers, outlines |
| Accent | `#b8875f` | Primary action and highlights |

Palette by frequency of use: `#2c2620` · `#fbf8f3` · `#b8875f` · `#efc7a8` · `#f7dcc9` · `#4a3b33` · `#3a322c` · `#cdb8a9` · `#a3754f` · `#e7d8ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[320px]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-none border border-[#B8875F] bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#2C2620] transition hover:border-[#A3754F] hover:bg-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fbf8f3;
  --color-surface: #f7f3ec;
  --color-text: #2c2620;
  --color-muted: #4a3b33;
  --color-border: #2c2620;
  --color-accent: #b8875f;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf8f3',
    surface: '#f7f3ec',
    ink: '#2c2620',
    muted: '#4a3b33',
    line: '#2c2620',
    accent: '#b8875f',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy sans in deep brown (#2c2620).
- **Do:** Use outlined rectangular buttons with tracked uppercase labels.
- **Do:** Keep the hero gradient running from cream to taupe, with no saturated fills.
- **Don't:** Don't add a bright accent colour; tan stays on outlines.
- **Don't:** Don't set the headline in a light weight; it reads heavy and dense.
- **Don't:** Don't fill the buttons with colour; they stay outlined.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
