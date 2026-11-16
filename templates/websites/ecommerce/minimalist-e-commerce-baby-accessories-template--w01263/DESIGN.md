# Design system — Minimalist E-commerce Baby Accessories Template

`SN-W01263` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm editorial hero split between a full-height terracotta side rail and a cream main panel. The oversized uppercase sans headline is charcoal, with the phrase FIRST WORLD. in terracotta, and small grey caps sit above and below it. Terracotta is the rail and the one coloured phrase, and the page ground is cream.

**Mood:** warm, bold, editorial, soft-earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebdcd0` | Page ground |
| Surface | `#2c2826` | Cards, panels, raised areas |
| Text | `#2c2826` | Headings and primary copy |
| Muted text | `#2c2826` | Secondary copy, captions |
| Border | `#2c2826` | Hairlines, dividers, outlines |
| Accent | `#b86847` | Primary action and highlights |

Palette by frequency of use: `#2c2826` · `#b86847` · `#ebdcd0` · `#ffffff` · `#e2d5c7` · `#000000` · `#bc4f39` · `#a65d3f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 11px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1600px]`, `max-w-[280px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="bg-[#b86847] hover:bg-[#a65d3f] text-[#2c2826] uppercase tracking-[0.15em] text-[11px] font-medium py-5 px-8 flex items-center justify-between w-full max-w-[320px] transition-colors group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Articles (`blog-articles`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ebdcd0;
  --color-surface: #2c2826;
  --color-text: #2c2826;
  --color-muted: #2c2826;
  --color-border: #2c2826;
  --color-accent: #b86847;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebdcd0',
    surface: '#2c2826',
    ink: '#2c2826',
    muted: '#2c2826',
    line: '#2c2826',
    accent: '#b86847',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use terracotta (#b86847) for the side rail and the one highlighted phrase
- **Do:** Set the headline in very large uppercase sans in charcoal
- **Do:** Keep the main panel cream (#ebdcd0) with small grey caps for supporting text
- **Don't:** Don't use terracotta for small body text; contrast is too low
- **Don't:** Don't fill the whole hero with terracotta
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
