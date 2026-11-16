# Design system — KGlow Skincare E-commerce Template

`SN-W01199` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A pale cream top area sits above a dark brown band at the bottom, with a taupe headline. The palette is brown and beige, with blurred glow shapes and a 3D canvas, and the stance is soft and spa-like.

**Mood:** soft, spa-like, warm, muted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfaf8` | Page ground |
| Surface | `#8a7359` | Cards, panels, raised areas |
| Text | `#e8d8c8` | Headings and primary copy |
| Border | `#8a7359` | Hairlines, dividers, outlines |
| Accent | `#e8d8c8` | Primary action and highlights |

Palette by frequency of use: `#8a7359` · `#ffffff` · `#2c241b` · `#5a4e41` · `#eae2d8` · `#e8d8c8` · `#fcfaf8` · `#f6f4f0` · `#000000` · `#ebe3dc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Loaded families:** Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 56px · h3 24px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_40px_rgb(0,0,0,0.08)]`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto text-center rounded-full border border-[#8A7359]/25 bg-[#FCFAF8]/60 backdrop-blur-sm px-8 py-4 text-lg font-medium text-[#2C241B] hover:bg-[#FCFAF8] hover:border-[#8A7359]/40 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Stats band (`stats`)
3. Hero (`hero`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fcfaf8;
  --color-surface: #8a7359;
  --color-text: #e8d8c8;
  --color-border: #8a7359;
  --color-accent: #e8d8c8;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfaf8',
    surface: '#8a7359',
    ink: '#e8d8c8',
    line: '#8a7359',
    accent: '#e8d8c8',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the warm brown (#4a3525) for lower bands and the taupe (#8a7359) for borders and secondary text.
- **Do:** Check text contrast after the entry animation finishes.
- **Do:** Use the beige (#e8d8c8) for headline text only on dark brown fields.
- **Don't:** Don't set beige or taupe text on the cream top area; the contrast is too low.
- **Don't:** Don't rely on the blurred 3D background for legibility; keep headline text on a flat area.
- **Don't:** Don't use hard shadows; depth comes from blur and glow.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
