# Design system — CØFF Specialty Coffee Landing Page Template

`SN-W02875` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Dark, monochrome and gallery-like. A charcoal ground (#1d1d1c) carries a very large high-contrast serif headline in warm cream (#e2dcd0), above a small tracked caption in a monospace-style face and a lighter body paragraph. The main action is a cream fill and the second is an outlined ghost button beside it, so the page reads like an exhibition catalogue with no colour beyond cream and charcoal.

**Mood:** gallery-like, dark, monochrome, exacting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1d1d1c` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#e2dcd0` | Headings and primary copy |
| Muted text | `#4f5343` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f3eee2` | Primary action and highlights |

Palette by frequency of use: `#e2dcd0` · `#ffffff` · `#1d1d1c` · `#4f5343` · `#d3cdc0` · `#cebfa9` · `#e0dcd1` · `#4d5240` · `#b1b2a9` · `#f3eee2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** JetBrains Mono, Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 72px · body 16px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-[44px]` (44px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full transition-all duration-300 shadow-xl group bg-surface text-dark hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1d1d1c;
  --color-surface: #ffffff;
  --color-text: #e2dcd0;
  --color-muted: #4f5343;
  --color-border: #ffffff;
  --color-accent: #f3eee2;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1d1d1c',
    surface: '#ffffff',
    ink: '#e2dcd0',
    muted: '#4f5343',
    line: '#ffffff',
    accent: '#f3eee2',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in large high-contrast serif in cream (#e2dcd0)
- **Do:** Use cream (#f3eee2) as the filled button colour and keep the second button as an outline
- **Do:** Set captions and navigation in small tracked caps, in a monospace-style face
- **Don't:** Don't introduce colour; the palette is charcoal and cream
- **Don't:** Don't set the headline in a bold weight
- **Don't:** Don't place the headline on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
