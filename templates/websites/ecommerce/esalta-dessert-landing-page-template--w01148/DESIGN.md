# Design system — Esalta Dessert Landing Page Template

`SN-W01148` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A French patisserie page on a warm off-white ground, with a large dark serif headline whose second line is in a light italic serif. A small green-tinted label sits above it. The primary button is near-black, with a light outlined button beside it, and the product photograph sits in a rounded frame at right with a small white note card floating over its corner.

**Mood:** refined, warm, patisserie, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#57534e` · `#fafaf9` · `#78716c` · `#292524` · `#16a34a` · `#44403c` · `#dcfce7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-[0_2px_20px_rgb(0,0,0,0.03)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold serif, with the second line in italic
- **Do:** Use the near-black button for the primary action and the outlined button for secondary
- **Do:** Frame the product photograph with rounded corners and a small floating note card
- **Don't:** Don't use the bright green (#16a34a) for buttons; it marks the small label only
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't add a second floating card to the same panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
