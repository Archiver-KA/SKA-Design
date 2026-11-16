# Design system — Luxury Perfumery E-commerce Template

`SN-W01236` · ecommerce · dark mode · Sinera Atlas theme `market` · language `es`

## Direction

A dark, quiet perfume-house hero on a near-black ground, with a very large light grey italic serif wordmark centred. Small letter-spaced caps sit above and below it, and two thin outlined buttons are the only interface elements. Gold appears only as a faint tint on the button edges.

**Mood:** dark, understated, elegant, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a87c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c6a87c` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#525252` · `#fdfbf7` · `#171717` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 30px · body 10px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-48`, `py-32`
- **Common gaps:** `gap-16`, `gap-32`, `gap-4`

**Primary button**

```html
<a class="group relative px-10 py-5 bg-gold/10 backdrop-blur-md border border-gold/30 text-white text-[10px] tracking-[0.3em] uppercase overflow-hidden hover:border-gold transition-all duration-700">…</a>
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
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c6a87c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c6a87c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a large italic serif in light grey
- **Do:** Use letter-spaced small caps for every label and nav item
- **Do:** Keep buttons as thin outlines with no solid fill
- **Don't:** Don't use a light background on the hero.
- **Don't:** Don't fill buttons with solid colour
- **Don't:** Don't use more than a faint gold tint for the accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
