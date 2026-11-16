# Design system — Passive Income Fintech Landing Page Template

`SN-W01008` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, light fintech hero on a near-white ground, with a bold sans-serif headline in near-black and its second line set in orange (#ea580c). The orange is also the solid primary button and the brand accent, with a thin outline button beside it. A rounded product card on the right shows an earnings balance and a payout list, so the page explains the product through its own interface.

**Mood:** warm, friendly, bold, clear, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#00b67a` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#a3a3a3` · `#ea580c` · `#fafafa` · `#f97316` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** General Sans
- **Body:** General Sans
- **Loaded families:** Urbanist, General Sans
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative px-8 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.4)] flex items-center gap-2 text-sm tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ea580c;
  --color-accent-2: #00b67a;
  --font-display: "General Sans", sans-serif;
  --font-body: "General Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ea580c',
    accent2: '#00b67a',
  },
  fontFamily: { display: ['General Sans'], sans: ['General Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in orange (#ea580c) and keep the first in near-black.
- **Do:** Use the solid orange button for the main action and a thin outline button for the secondary.
- **Do:** Show the product in a rounded card on the right, with the balance figure at the top.
- **Don't:** Don't use orange for body text.
- **Don't:** Don't add a dark band to the hero.
- **Don't:** Don't use a second warm colour in the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
