# Design system — Audio E-commerce Landing Page Template

`SN-W01097` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A monochrome product hero built around one large photograph in a warm tan panel, with oversized display headlines running behind it. The headline type is pale and overlaps the image, which gives a layered poster effect. Stats sit in frosted grey cards on the right, and the single black pill button is the only strong contrast point.

**Mood:** layered, monochrome, bold, poster-like, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#9ca3af` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#000000` · `#d1d5db` · `#fbbf24` · `#9ca3af` · `#111827` · `#6b7280` · `#374151` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 144px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-10`

**Primary button**

```html
<a class="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors flex items-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #9ca3af;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #000000;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#9ca3af',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#000000',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Layer oversized headline type behind the product photograph
- **Do:** Keep stats in frosted grey cards with bold numbers
- **Do:** Use black pill buttons for the primary action
- **Don't:** Don't set headline type at full contrast over busy image areas
- **Don't:** Don't add colour to the hero; it stays grey, black and the photograph
- **Don't:** Don't place body copy over the photograph without a plain backing

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
