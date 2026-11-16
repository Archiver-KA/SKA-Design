# Design system — E-Commerce Product Detail Page Template

`SN-W01144` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A beauty product page on white, with a large pink-tinted product image panel on the left and a text column on the right. Name, price, rating and the shade selector stack in a clear vertical order. Stars are yellow and the active navigation item is blue, and the pink comes from the product itself, so the page reads as a clean retail template.

**Mood:** clean, retail, product-led, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#111827` · `#374151` · `#4b5563` · `#e5e7eb` · `#2563eb` · `#fbbf24` · `#ffffff` · `#d1d5db` · `#16a34a` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #374151;
  --color-border: #e5e7eb;
  --color-accent: #fbbf24;
  --color-accent-2: #2563eb;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#374151',
    line: '#e5e7eb',
    accent: '#fbbf24',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the product image in a large panel on the left, with the shade tint as its colour
- **Do:** Stack price, rating and shade selector in a clear vertical order on the right
- **Do:** Use yellow for star ratings and blue (#2563eb) for the active navigation item
- **Don't:** Don't use the red-pink badge for anything except the bestseller label
- **Don't:** Don't use the pink product tint for the page background
- **Don't:** Don't put more than one solid badge over the product image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
