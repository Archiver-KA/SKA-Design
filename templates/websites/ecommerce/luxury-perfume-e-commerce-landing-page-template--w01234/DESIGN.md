# Design system — Luxury Perfume E-commerce Landing Page Template

`SN-W01234` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, cinematic perfume hero: a deep navy ground with the oversized sans wordmark CHAMBERS filled with a silver-to-grey gradient. A tracked subtitle, a small gold-outlined badge and muted body copy sit left-aligned beneath it, and the white pill button is the only solid shape.

**Mood:** cinematic, sparse, silver, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f59e0b` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f59e0b` · `#fde68a` · `#e5e7eb` · `#d97706` · `#fbbf24` · `#10b981` · `#34d399` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-6`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-3 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f59e0b;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fde68a;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f59e0b',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#fde68a',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark large in a sans with a silver gradient fill
- **Do:** Keep the single white pill as the only solid button in the hero
- **Do:** Track the subtitle widely and set it in uppercase
- **Don't:** Don't centre the hero text; it stays left-aligned
- **Don't:** Don't add a second bright colour behind the wordmark
- **Don't:** Don't use an orange ground; the hero stays dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
