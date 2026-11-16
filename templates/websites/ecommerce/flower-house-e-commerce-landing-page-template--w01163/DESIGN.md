# Design system — Flower House E-commerce Landing Page Template

`SN-W01163` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A quiet florist page sits on a warm off-white ground (#f5f5f4) with near-black text (#1c1917). The hero sets a large serif headline in roman, with an italic grey second line, which reads as a literary, gallery-like voice. Small letter-spaced uppercase labels sit above the headline, and one solid dark button is the only strong colour.

**Mood:** literary, quiet, natural, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#f5f5f4` · `#292524` · `#e7e5e4` · `#fdfcf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-stone-900 text-stone-50 text-sm font-medium overflow-hidden rounded-sm transition-all hover:bg-stone-800 hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif, roman first line and italic grey second line.
- **Do:** Keep the page on the warm off-white ground (#f5f5f4); use the near-black (#1c1917) only for text and the one solid button.
- **Do:** Put small letter-spaced uppercase labels above section headings.
- **Don't:** Don't add a bright accent; the page depends on neutral warm greys.
- **Don't:** Don't set the italic line in the dark text colour; it is grey (#57534e).
- **Don't:** Don't switch the hero headline to a sans-serif; the serif is the identity of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
