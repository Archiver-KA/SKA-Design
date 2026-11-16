# Design system — Rasarth Organic Ghee Product Page Template

`SN-W01309` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A calm product-detail page on warm off-white (#f9f8f4), with a large title and a dark green (#2f3e30) add-to-cart button that carries most of the colour. The product photograph sits in a large pale frame on the left, with thumbnails below, and size options are outlined boxes with one selected. Everything else stays neutral, with warm grey for supporting copy.

**Mood:** calm, wholesome, clean, premium, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f4` | Page ground |
| Surface | `#e8e4d9` | Cards, panels, raised areas |
| Text | `#2c2c2c` | Headings and primary copy |
| Muted text | `#5c5c5c` | Secondary copy, captions |
| Border | `#e8e4d9` | Hairlines, dividers, outlines |
| Accent | `#2f3e30` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2f3e30` · `#e8e4d9` · `#1a1a1a` · `#5c5c5c` · `#7d6a58` · `#4a4a4a` · `#9ca3af` · `#d97706` · `#f9f8f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Crimson Pro
- **Body:** Inter
- **Loaded families:** Crimson Pro, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="border-2 border-[#2F3E30] bg-[#2F3E30]/5 rounded-lg py-3 px-4 text-sm font-medium text-[#1A1A1A] relative flex justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f8f4;
  --color-surface: #e8e4d9;
  --color-text: #2c2c2c;
  --color-muted: #5c5c5c;
  --color-border: #e8e4d9;
  --color-accent: #2f3e30;
  --font-display: "Crimson Pro", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f4',
    surface: '#e8e4d9',
    ink: '#2c2c2c',
    muted: '#5c5c5c',
    line: '#e8e4d9',
    accent: '#2f3e30',
  },
  fontFamily: { display: ['Crimson Pro'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fill the add-to-cart button in dark green (#2f3e30) with white text
- **Do:** Show size options as outlined boxes, with the selected one outlined and tagged
- **Do:** Keep the product photograph large on a pale frame with thumbnails below
- **Don't:** Don't use the amber (#d97706) accent.
- **Don't:** Don't set the page on pure white; keep the warm off-white ground
- **Don't:** Don't set the title in a serif; it reads as sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
