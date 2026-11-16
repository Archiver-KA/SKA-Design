# Design system — Argentina 2026 Messi Home Jersey E-commerce Template

`SN-W01084` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark sporting product page on deep navy (#020617), with a two-tone headline whose second line is set in sky blue (#0ea5e9). Amber (#fbbf24) is kept for the stock notice, so warnings read differently from the brand colour. The jersey sits in a tall dark card with a small centred label, and the primary button is solid sky blue beside a plain outlined secondary.

**Mood:** sporting, dark, crisp, confident, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#0ea5e9` · `#38bdf8` · `#cbd5e1` · `#020617` · `#fbbf24` · `#000000` · `#0f172a` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all tracking-wide backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Product grid (`product-grid`)
7. Call to action (`cta`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in sky blue (#0ea5e9)
- **Do:** Use amber (#fbbf24) only for stock and status notices
- **Do:** Keep the product card dark with a small centred label
- **Don't:** Don't use amber for buttons
- **Don't:** Don't drop the two-tone headline pattern
- **Don't:** Don't place bright photographic backgrounds behind the product

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
