# Design system — Luxury Tailor E-commerce Landing Page Template

`SN-W01241` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark menswear hero: a near-black photograph of a tailored jacket sits behind a large serif headline, with Sartorial upright in white and Elegance in light grey italic. A small amber eyebrow line runs above it in widely tracked caps, and a solid white button sits below. The nav is a dark bar with one amber-outlined pill. The design is monochrome, and amber is the only accent.

**Mood:** tailored, dark, editorial, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#d97706` · `#262626` · `#f59e0b` · `#a3a3a3` · `#404040` · `#111111` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-amber-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-500 transition-all mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Footer (`footer`)
6. Sign-in form (`auth-form`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d97706;
  --color-accent-2: #14532d;
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
    surface: '#111111',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d97706',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair an upright serif word with an italic light grey word in one headline
- **Do:** Use amber (#d97706) only for the eyebrow line and the one nav pill
- **Do:** Keep the photograph dark and centre the text over it with one solid white button
- **Don't:** Don't brighten the photograph; the jacket stays in shadow
- **Don't:** Don't use amber for body copy or large fills
- **Don't:** Don't set the headline in sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
