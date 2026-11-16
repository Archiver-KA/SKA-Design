# Design system — Luxury Footwear E-commerce Landing Page Template

`SN-W01224` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, performance-footwear stance: a near-black page with a serif section title in off-white and a grey subline. Two buttons, one solid pale and one outline, sit under the navigation, above a scrolling marquee of widely tracked uppercase feature words. Product frames are thin white outlines on black, so the shoes carry the colour and the interface stays sleek and understated.

**Mood:** dark, technical, sleek, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d97706` · `#78716c` · `#000000` · `#050505` · `#a8a29e` · `#0c0a09` · `#451a03` · `#1c1917` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-20`, `gap-2`

**Primary button**

```html
<a class="bg-[#d97706] text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b45309] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Product detail (`product-detail`)
5. Call to action (`cta`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0c0a09;
  --color-text: #e5e5e5;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0c0a09',
    ink: '#e5e5e5',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set section titles in serif in off-white and sub-lines in grey.
- **Do:** Use a scrolling marquee of widely tracked uppercase feature words as a divider between sections.
- **Do:** Frame product images in thin white outlines on the black ground.
- **Don't:** Don't set product frames on coloured fills; the layout is designed for black.
- **Don't:** Don't use the olive (#4b5320) as a large field.
- **Don't:** Don't put the dark product frames on light backgrounds; the grid is built for black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
