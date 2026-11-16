# Design system — The Home of Exquisite Luxury

`SN-W01331` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A black, almost empty jewellery hero: a single wide-tracked white word, ETHEREAL, sits in the centre above a small tracked label, with a corner-bracketed outline button below. A white floating navigation bar is the only light element on the first screen. Type is the ornament, and generous black space does the rest, so the page reads as a gallery wall rather than a shop.

**Mood:** minimal, luxurious, quiet, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#f3f4f6` · `#d1d5db` · `#9ca3af` · `#111827` · `#e5e7eb` · `#4b5563` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 60px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-black text-white px-8 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-gray-900 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Menu list (`menu-list`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Video / media (`video-media`)
6. Product grid (`product-grid`)
7. Timeline (`timeline`)
8. Product detail (`product-detail`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero black (#000000) with white type in a centred layout
- **Do:** Set the hero word in wide-tracked uppercase sans-serif, with small tracked caps above it
- **Do:** Frame the primary button with thin corner brackets rather than a filled block
- **Don't:** Don't add colour to the hero; the page is black and white
- **Don't:** Don't fill the button; the bracket outline is the button's shape
- **Don't:** Don't place photography in the first screen; the typography is the image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
