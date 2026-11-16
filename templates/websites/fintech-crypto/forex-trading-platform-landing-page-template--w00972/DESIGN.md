# Design system — Forex Trading Platform Landing Page Template

`SN-W00972` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with near-black headlines and orange (#f97316, not in the palette) used for the emphasised word and the primary button. A rounded price card shows a green chart line with red and green buy and sell buttons. The page reads as a clear, regulated broker layout, with a short list of metric chips under the hero.

**Mood:** clear, regulated, functional, bright, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#0f172a` · `#f1f5f9` · `#475569` · `#22c55e` · `#fff7ed` · `#334155` · `#94a3b8` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-orange-200 text-brand-orange text-xs font-semibold rounded-lg hover:bg-orange-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Video / media (`video-media`)
7. FAQ (`faq`)
8. Logo cloud (`logo-cloud`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0f172a;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #f1f5f9;
  --color-accent: #22c55e;
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
    background: '#ffffff',
    surface: '#0f172a',
    ink: '#111111',
    muted: '#ffffff',
    line: '#f1f5f9',
    accent: '#22c55e',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange on the emphasised headline word and the primary button only.
- **Do:** Set the price card in white with a thin border and a single chart line.
- **Do:** Keep sell in red and buy in green inside the trading card only.
- **Don't:** Don't use the orange as a page background.
- **Don't:** Don't use green or red outside the trading card.
- **Don't:** Don't set the metric chips in saturated fills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
