# Design system — LumaGlow Candle E-commerce Landing Page Template

`SN-W01204` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A calm, editorial stance: an off-white page with a large serif headline in near-black, the second word set in grey italic, and a framed candle photograph on the right. Solid black and outline buttons sit under short copy. The photograph carries the warmth because the page itself is neutral, and the nav is a thin rule with small icons.

**Mood:** calm, editorial, warm, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#292524` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#ffffff` · `#78716c` · `#e7e5e4` · `#d6d3d1` · `#faf9f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_10px_rgba(0,0,0,0.03)]`, `shadow-[0_12px_24px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-full hover:bg-stone-800 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #f59e0b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, with the second word in grey italic.
- **Do:** Let the candle photograph carry the warm tones; keep the page itself neutral.
- **Do:** Use solid black for the primary button and an outline for the secondary.
- **Don't:** Don't use the amber (#f59e0b) on buttons; it works only as a small dot.
- **Don't:** Don't tint the page background warm grey (#e7e5e4); keep a lighter neutral ground.
- **Don't:** Don't place small text over the photograph without its own card.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
