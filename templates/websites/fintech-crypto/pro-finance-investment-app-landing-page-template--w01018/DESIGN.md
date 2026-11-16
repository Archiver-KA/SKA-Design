# Design system — Pro Finance Investment App Landing Page Template

`SN-W01018` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light investment-app page on white, built around a large full-bleed lime (#ccf32f) block that holds the headline, a short paragraph and a black pill button. Phone mockups overlap the block's right edge, showing a stock list and a candlestick-style chart with green and red bars. Lime is the single brand colour, and black type on it gives the page a bold, product-led look.

**Mood:** bold, fresh, product-led, energetic, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccf32f` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#ccf32f` · `#f5f5f5` · `#a3a3a3` · `#262626` · `#22c55e` · `#e5e5e5` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_10px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="flex-1 bg-[#ccf32f] hover:bg-[#bce325] text-black font-medium py-3 rounded-xl transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Benefits (`benefits`)
5. Logo cloud (`logo-cloud`)
6. Product grid (`product-grid`)
7. Stats band (`stats`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccf32f;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccf32f',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccf32f) as the full-bleed hero block with black type on it.
- **Do:** Keep the primary button black with white text on the lime block.
- **Do:** Overlap the phone mockups on the block's right edge.
- **Don't:** Don't use lime for text on white.
- **Don't:** Don't add a second brand colour to the phone screens.
- **Don't:** Don't place hero copy outside the lime block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
