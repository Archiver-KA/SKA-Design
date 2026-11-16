# Design system — Artisanal Coffee & Roastery Landing Page Template

`SN-W02836` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark café page on charcoal (#1d1d1c) with a large cream serif headline set in tight, high-contrast lines, and small uppercase labels above it. The primary button is a cream fill (#f3eee2) with dark text, paired with a plain text link, so the cream does the work of an accent. The page is restrained and cinematic, relying on type scale and warm off-white rather than colour.

**Mood:** restrained, cinematic, warm-neutral, typographic

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

- **Do:** Set the page ground on charcoal (#1d1d1c) with cream (#e2dcd0) type
- **Do:** Make the primary button a cream fill (#f3eee2) with dark text
- **Do:** Set eyebrow labels and navigation in small uppercase monospace
- **Don't:** Don't use the light grey-beige (#e0dcd1) as the ground; the hero is charcoal
- **Don't:** Don't add colour; the palette is charcoal and cream
- **Don't:** Don't set the headline in a sans-serif; the serif carries the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
