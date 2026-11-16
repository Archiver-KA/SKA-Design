# Design system — Champagne Winery Landing Page Template

`SN-W01120` · ecommerce · dark mode · Sinera Atlas theme `market` · language `de`

## Direction

A dark, formal winery page on a deep brown-black ground (#1c1917), with a centred white serif headline in very large size. A small tracked uppercase line sits above it for the region, and an italic subtitle sits below in the same serif. Colour is almost absent from the hero, so the page reads as traditional and restrained; the red accent in the data does not show in the first screen.

**Mood:** traditional, restrained, formal, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#292524` · `#78716c` · `#d6d3d1` · `#ffffff` · `#57534e` · `#44403c` · `#f5f5f4` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1800px]`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #ef4444;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#292524',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in a large white serif on the dark ground
- **Do:** Use a small tracked uppercase line above the headline for the region
- **Do:** Keep the italic subtitle in the same serif, set lighter in tone
- **Don't:** Don't add bright accent colours to the hero
- **Don't:** Don't move the logo to a left-aligned corner; it sits centred at the top
- **Don't:** Don't set the headline in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
