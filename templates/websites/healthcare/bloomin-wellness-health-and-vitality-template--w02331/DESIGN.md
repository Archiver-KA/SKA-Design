# Design system — Bloomin Wellness Health & Vitality Template

`SN-W02331` · healthcare · light mode · Sinera Atlas theme `calm` · language `tr`

## Direction

A product-led supplement landing page on white, with a pale pink panel behind the product and a strong pink (#ec4899) for the add-to-cart button and the announcement strip. The product title is a bold sans at modest size, and the layout splits product image from buy box. Pink carries all the colour, so the page reads as bright and commercial.

**Mood:** bright, commercial, clean, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fdf2f8` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#fce7f3` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |

Palette by frequency of use: `#ec4899` · `#db2777` · `#ffffff` · `#525252` · `#fbcfe8` · `#262626` · `#fce7f3` · `#404040` · `#171717` · `#fdf2f8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 30px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-pink-600/25`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-14`, `py-16`
- **Common gaps:** `gap-2`, `gap-0.5`, `gap-3`

**Primary button**

```html
<a class="mt-4 w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-pink-600/25">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Stats band (`stats`)
4. Announcement bar (`announcement-bar`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fdf2f8;
  --color-text: #262626;
  --color-muted: #525252;
  --color-border: #fce7f3;
  --color-accent: #ec4899;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fdf2f8',
    ink: '#262626',
    muted: '#525252',
    line: '#fce7f3',
    accent: '#ec4899',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use pink (#ec4899) only for the add-to-cart button and the announcement strip.
- **Do:** Keep the product image on a pale pink panel (#fce7f3) with the product centred.
- **Do:** Set product titles in bold sans at a modest size, with the price row in a larger weight.
- **Don't:** Don't use pink for body text or headings.
- **Don't:** Don't add serif type; the page is sans only.
- **Don't:** Don't use dark backgrounds; the page stays white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
