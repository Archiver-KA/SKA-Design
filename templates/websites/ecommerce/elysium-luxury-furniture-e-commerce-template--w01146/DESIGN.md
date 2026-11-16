# Design system — Elysium Luxury Furniture E-commerce Template

`SN-W01146` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A near-black luxury furniture page has small tracked uppercase navigation at the top, with a serif wordmark centred below it. A thin rule and small captions run along the bottom edge beside a vertical scroll line. The look rests on the dark ground, the spaced caption type and the restraint.

**Mood:** quiet, luxurious, dark, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#f4f4f4` | Headings and primary copy |
| Muted text | `#a39f97` | Secondary copy, captions |
| Border | `#2d2d2d` | Hairlines, dividers, outlines |
| Accent | `#6b4c3a` | Primary action and highlights |

Palette by frequency of use: `#f4f4f4` · `#111111` · `#2d2d2d` · `#a29e85` · `#1a1a1a` · `#e8e4db` · `#a39f97` · `#2a2a2a` · `#6b4c3a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 36px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[90rem]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="px-8 py-4 border border-borderline text-xs tracking-widest uppercase font-medium hover:bg-primary hover:text-base transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #111111;
  --color-text: #f4f4f4;
  --color-muted: #a39f97;
  --color-border: #2d2d2d;
  --color-accent: #6b4c3a;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#111111',
    ink: '#f4f4f4',
    muted: '#a39f97',
    line: '#2d2d2d',
    accent: '#6b4c3a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#111111) and let the product images carry the colour
- **Do:** Set the wordmark in a serif, centred, with navigation in small tracked uppercase
- **Do:** Use thin rules and small captions along the bottom edge of the hero
- **Don't:** Don't add a bright accent colour.
- **Don't:** Don't set body copy in the dark ground colour
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
