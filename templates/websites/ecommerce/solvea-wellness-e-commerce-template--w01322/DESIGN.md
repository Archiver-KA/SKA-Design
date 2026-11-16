# Design system — SOLVEA Wellness E-commerce Template

`SN-W01322` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, quiet wellness page on cream (#fbf8f2), with a soft golden glow (#e8b44a) bleeding in from the top left like a light source rather than a graphic. A near-black announcement strip and a near-black pill button frame the navigation. The first screen is mostly open cream field, so the palette leans on paper-like neutrals and keeps saturated colour to light.

**Mood:** warm, quiet, paper-like, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf8f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1a17` | Headings and primary copy |
| Muted text | `#6b7f5e` | Secondary copy, captions |
| Border | `#1c1a17` | Hairlines, dividers, outlines |
| Accent | `#1c1a17` | Primary action and highlights |
| Second accent | `#e7e3f1` | Supporting highlights |

Palette by frequency of use: `#1c1a17` · `#fbf8f2` · `#f3ede2` · `#e8b44a` · `#6b7f5e` · `#d97a45` · `#8b6b3d` · `#efe6d6` · `#ffffff` · `#7c6da0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_20px_60px_-20px_rgba(28,26,23,0.35)]`
- **Content width:** `max-w-[1320px]`, `max-w-[16rem]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="shrink-0 h-10 px-5 rounded-full bg-[#F3EDE2] text-[#1C1A17] text-sm font-medium hover:bg-white transition">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Benefits (`benefits`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Bento grid (`bento-grid`)
8. Product grid (`product-grid`)
9. Call to action (`cta`)
10. 3D / canvas scene (`3d-canvas`)
11. Testimonials (`testimonials`)
12. Articles (`blog-articles`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fbf8f2;
  --color-surface: #ffffff;
  --color-text: #1c1a17;
  --color-muted: #6b7f5e;
  --color-border: #1c1a17;
  --color-accent: #1c1a17;
  --color-accent-2: #e7e3f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf8f2',
    surface: '#ffffff',
    ink: '#1c1a17',
    muted: '#6b7f5e',
    line: '#1c1a17',
    accent: '#1c1a17',
    accent2: '#e7e3f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground cream (#fbf8f2) and use the golden glow (#e8b44a) only as soft light behind the hero
- **Do:** Set the primary button as a near-black pill (#1c1a17) in the navigation
- **Do:** Keep the announcement strip in near-black with small, uppercase, widely spaced text
- **Don't:** Don't add hard-edged colour blocks; the palette is soft and tonal
- **Don't:** Don't use the golden glow as a solid fill or behind text
- **Don't:** Don't add decorative graphics to the open hero; let the cream field breathe

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
