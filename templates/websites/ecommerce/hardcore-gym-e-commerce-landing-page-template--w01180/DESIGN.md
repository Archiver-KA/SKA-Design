# Design system — Hardcore Gym E-commerce Landing Page Template

`SN-W01180` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, austere gym page on near-black (#0a0a0a) with a red announcement bar and a full-bleed, desaturated lifting photograph under a dark overlay. The headline is a large, wide-set serif in white capitals, and the red (#dc2626) buttons are the only colour in the hero.

**Mood:** austere, dark, bold, combative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#737373` · `#d4d4d4` · `#262626` · `#000000` · `#a3a3a3` · `#ef4444` · `#171717` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto Condensed
- **Body:** Roboto Condensed
- **Loaded families:** Oswald, Pirata One, Roboto Condensed
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 12px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-red-800 hover:bg-red-700 text-white font-mech font-bold uppercase tracking-widest text-sm clip-diagonal transition-all duration-300 transform hover:scale-105 border border-transparent">…</a>
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

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #dc2626;
  --font-display: "Roboto Condensed", sans-serif;
  --font-body: "Roboto Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Roboto Condensed'], sans: ['Roboto Condensed'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in uppercase at large size, in a wide-set serif.
- **Do:** Use red (#dc2626) for the primary button and the announcement bar only.
- **Do:** Keep the hero photograph desaturated under a dark overlay.
- **Don't:** Don't add light backgrounds; the page stays near-black.
- **Don't:** Don't use red for headings or body text; it is for actions and the top bar.
- **Don't:** Don't colour more than one navigation link red; the highlighted link is the only exception.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
