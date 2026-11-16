# Design system — Beauty Product Landing Page Template

`SN-W02719` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Hair appliance product page on a warm cream ground (#fcfbf8), with a large black sans headline and a dusty-rose italic word that carries the emphasis. The black pill button and a small muted paragraph make the hero plain and direct. Flat cream and rose, with few other elements, give the page a soft, product-first feel.

**Mood:** warm, soft, product-first, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf8` | Page ground |
| Surface | `#fcfbf8` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#171717` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#c98a8a` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#171717` · `#f5f5f5` · `#ffffff` · `#525252` · `#c98a8a` · `#000000` · `#737373` · `#fcfbf8` · `#f9f6f0` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-neutral-900/20`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-neutral-900 text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors tracking-widest uppercase whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf8;
  --color-surface: #fcfbf8;
  --color-text: #000000;
  --color-muted: #171717;
  --color-border: #f5f5f5;
  --color-accent: #c98a8a;
  --color-accent-2: #d4af37;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf8',
    surface: '#fcfbf8',
    ink: '#000000',
    muted: '#171717',
    line: '#f5f5f5',
    accent: '#c98a8a',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold black sans, with one italic word in dusty rose (#c98a8a).
- **Do:** Keep the ground warm cream (#fcfbf8) and the nav thin and uppercase.
- **Do:** Make the primary button a black pill with white text.
- **Don't:** Don't set the rose as a large fill; it is for the headline word.
- **Don't:** Don't use gold (#d4af37) on the hero; the palette is cream and rose.
- **Don't:** Don't cover the product image with a coloured overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
