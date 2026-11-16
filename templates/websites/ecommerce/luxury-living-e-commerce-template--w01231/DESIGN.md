# Design system — Luxury Living E-commerce Template

`SN-W01231` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A classic retail hero: white and pale grey panels, a dark navy strip across the top and solid navy buttons. The serif headline sits in a white card floated over a grey image placeholder, making that card the focal point. Navigation is small uppercase sans with a serif category list on the left. Colour stays neutral apart from a red clearance link.

**Mood:** classic, neutral, retail, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#e5e7eb` · `#d1d5db` · `#9ca3af` · `#f9fafb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h2 24px · h3 30px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="inline-block bg-gray-900 text-white px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #111827;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
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
    line: '#f3f4f6',
    accent: '#111827',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark navy (#111827) for the announcement strip and primary buttons
- **Do:** Float the hero text in a white card over the grey image panel
- **Do:** Keep category navigation as a serif list in a left column
- **Don't:** Don't add a second strong colour beyond the red clearance link
- **Don't:** Don't place the hero text directly on the photo without the card
- **Don't:** Don't set navigation labels in serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
