# Design system — Digital Archiving Service Landing Page Template

`SN-W03878` · business-services · light mode · Sinera Atlas theme `route` · language `sl`

## Direction

A soft, light page on an off-white ground with a bento grid of large rounded tiles in sand, pale sage and deep green. The headline is large dark sans-serif, with the last word in italic serif, and the primary button is a deep green pill. Tiles hold short statistics and feature labels, so the grid does the explaining while the hero stays calm.

**Mood:** soft, modern, organic, calm, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1a382e` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#1a382e` · `#ffffff` · `#1e293b` · `#e2e8f0` · `#64748b` · `#0f172a` · `#f1f5f9` · `#94a3b8` · `#f8fafc` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-[85rem]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-6`

**Primary button**

```html
<a class="bg-[#1a382e] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-sm flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. FAQ (`faq`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f5;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1a382e;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f5',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1a382e',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large dark sans-serif and switch the last word to italic serif
- **Do:** Use deep green (#1a382e) for the primary button and the dark feature tile
- **Do:** Build feature grids from large rounded tiles in sand, sage and green
- **Don't:** Don't use bright colours; the tiles stay muted and natural
- **Don't:** Don't shrink the corner radii; the tiles keep their soft, large curves
- **Don't:** Don't set the statistics in a light weight; they read as bold figures

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
