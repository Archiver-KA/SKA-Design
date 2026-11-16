# Design system — Burger Nation Food & Restaurant Template

`SN-W02852` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A dark, promotional look built around a photograph. A gold-cream display voice (#f8c473) sits over a near-black ground (#111111) and a dimmed food photo. The landing screen is a city-choice menu of stacked dark tiles with cream labels, and one orange-red pill badge (#d93d26) marks a status such as PRONTO. The brand is loud and food-led, with gold type on dark imagery.

**Mood:** dark, promotional, food-led, gold on black

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f8c473` | Headings and primary copy |
| Accent | `#f8c473` | Primary action and highlights |
| Second accent | `#d93d26` | Supporting highlights |

Palette by frequency of use: `#f8c473` · `#d93d26` · `#1a1a1a` · `#f87019` · `#111111` · `#2a2a2a` · `#861919` · `#ffb742` · `#ffffff` · `#09a776`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rustic Printed
- **Body:** Rustic Printed
- **Loaded families:** Bebas Neue, Roboto, Rubik Dirt, Rustic Printed, Rustic Printed Stamp
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-8`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="offer-filter px-4 py-1 rounded-full text-sm font-medium border hover:border-[#f8c473] transition-colors border-[#f8c473] bg-[#f8c473] text-[#111111]">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Menu list (`menu-list`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #1a1a1a;
  --color-text: #f8c473;
  --color-accent: #f8c473;
  --color-accent-2: #d93d26;
  --font-display: "Rustic Printed", sans-serif;
  --font-body: "Rustic Printed", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#1a1a1a',
    ink: '#f8c473',
    accent: '#f8c473',
    accent2: '#d93d26',
  },
  fontFamily: { display: ['Rustic Printed'], sans: ['Rustic Printed'] },
} }
```

## Do and don't

- **Do:** Set headlines and tile labels in gold-cream (#f8c473) on the dark ground
- **Do:** Use the red badge colour (#d93d26) only for status labels such as PRONTO
- **Do:** Dim food photography under a dark overlay before placing type on it
- **Don't:** Don't set small body copy in the gold; it is for headings and labels
- **Don't:** Don't put light backgrounds behind the menu tiles
- **Don't:** Don't use the red badge colour for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
