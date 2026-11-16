# Design system — Luxury Jewelry E-commerce Template

`SN-W01230` · ecommerce · light mode · Sinera Atlas theme `market` · language `de`

## Direction

A quiet jewellery-house layout: white page, black type and a serif headline stacked over three lines, its last word in warm gold italic. Gold appears only in that word and the logo mark. The product photograph sits on a pale panel with thin contour lines, and buttons stay black or outlined.

**Mood:** quiet, editorial, restrained, jewellery-house

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#9ca3af` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#4b5563` · `#fde047` · `#374151` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** normal, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-x-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-normal text-center overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #fde047;
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
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#fde047',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a high-contrast serif and colour the last word in gold italic
- **Do:** Keep the page white with black text and use gold only on the accent word and thin rules
- **Do:** Frame product photography on a pale panel with generous white space
- **Don't:** Don't add filled coloured buttons; calls to action are black or outlined
- **Don't:** Don't use drop shadows or gradients on the hero
- **Don't:** Don't set the headline in a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
