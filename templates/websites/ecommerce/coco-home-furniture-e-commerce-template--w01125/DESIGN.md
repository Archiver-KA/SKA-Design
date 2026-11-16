# Design system — Coco Home Furniture E-commerce Template

`SN-W01125` · ecommerce · light mode · Sinera Atlas theme `market` · language `hu`

## Direction

A furniture page that opens on a full-bleed interior photograph with a dark, moody tone, and white Inter headlines set left over the image. A thin announcement strip sits above a small navigation row. The buttons are a solid white block and a white outline, so the page relies on the photograph rather than colour for its look.

**Mood:** moody, minimal, interior, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f7f7f7` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#f7f7f7` · `#fafaf9` · `#262626` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-white text-neutral-900 rounded-none hover:bg-neutral-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f7f7f7;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #171717;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f7f7f7',
    ink: '#171717',
    muted: '#737373',
    line: '#171717',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lead the hero with a full-bleed interior photograph
- **Do:** Set the headline left-aligned in white Inter at large size
- **Do:** Use a solid white button beside a white outlined button
- **Don't:** Don't add a bright accent colour; the red (#dc2626) does not show in the hero
- **Don't:** Don't place text over the brightest part of the photograph
- **Don't:** Don't round the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
