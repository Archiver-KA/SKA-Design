# Design system — Vintassic E-commerce Landing Page Template

`SN-W01341` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal fashion hero on white, with a navy announcement strip across the top. The centred headline is a large serif in near-black (#111827), followed by two grey lines of supporting copy and a single dark navy pill button. The first screen is type-only and calm, and a photograph of a clothed torso sits below the fold to carry the product.

**Mood:** minimal, calm, classic, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#e5e7eb` · `#d1d5db` · `#4b5563` · `#f9fafb` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Playfair Display, Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-1.5`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="w-full bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium py-2.5 rounded-full border border-gray-200 hover:bg-white shadow-sm transition-colors font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #111827;
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
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#111827',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Centre the headline in a large serif in near-black (#111827)
- **Do:** Use the dark navy pill (#111827) as the one button style for actions
- **Do:** Keep the announcement strip in navy with small white text above the navigation
- **Don't:** Don't add colour accents to the hero; the page is navy, white and grey
- **Don't:** Don't left-align the headline; the centred composition is the structure
- **Don't:** Don't crowd the first screen with badges; the headline and button are enough

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
