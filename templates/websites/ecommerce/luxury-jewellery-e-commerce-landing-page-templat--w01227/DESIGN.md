# Design system — Luxury Jewellery E-commerce Landing Page Template

`SN-W01227` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold, dramatic jewellery stance: a near-black hero sits under a bright red top bar, with a large uppercase serif headline in white and its second line in italic. A solid red button is the primary call to action beside a thin outline. The red recurs in the logo's second word, the eyebrow and the button, so it reads as one brand colour over dark photography.

**Mood:** bold, dramatic, luxurious, saturated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#171717` · `#dc2626` · `#a3a3a3` · `#262626` · `#737373` · `#7f1d1d` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full py-3 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-red-600 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ef4444;
  --color-accent-2: #eab308;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase serif, with the second line in italic.
- **Do:** Use the red (#ef4444) on the primary button, the logo's second word and small eyebrows.
- **Do:** Keep the photography dark so the white headline holds against it.
- **Don't:** Don't use the deep red (#991b1b) as a page background; it is the top bar only.
- **Don't:** Don't use the yellow (#eab308) as an accent here.
- **Don't:** Don't add a second red for buttons; the page uses one red throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
