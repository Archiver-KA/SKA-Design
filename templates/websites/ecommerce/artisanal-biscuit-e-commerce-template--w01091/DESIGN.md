# Design system — Artisanal Biscuit E-commerce Template

`SN-W01091` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A spare editorial shop sits on near-white, with a large, tightly set black sans headline and a grey lead paragraph beneath it. The only colour is a small green status dot in the product tag, so the product and type carry the page. A tall grey image frame with square corners sits on the right, and the header is a short row of text links.

**Mood:** spare, editorial, quiet, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfc` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#e4e4e7` · `#ffffff` · `#f4f4f5` · `#a1a1aa` · `#52525b` · `#d4d4d8` · `#27272a` · `#fcfcfc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-zinc-200/50`, `shadow-zinc-900/10`
- **Content width:** `max-w-7xl`, `max-w-[1000px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfcfc;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfc',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline black, large and tightly set
- **Do:** Use the green dot only as a live status marker
- **Do:** Keep the image frame square-cornered on the right
- **Don't:** Don't add colour to headlines
- **Don't:** Don't round the image frame
- **Don't:** Don't use green for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
