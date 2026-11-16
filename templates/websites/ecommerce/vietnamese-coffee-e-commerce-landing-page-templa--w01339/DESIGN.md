# Design system — Vietnamese Coffee E-commerce Landing Page Template

`SN-W01339` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A quiet, tactile coffee page on a warm bone ground (#f4f1ea), with a faint textured, bokeh-like pattern across the hero. The headline is a large, high-contrast serif in deep espresso brown (#2c1810), with 'pas un' set in italic and indented to create a staggered rhythm. Small tracked uppercase navigation and a short sans paragraph sit on the right, so the page reads as a culture magazine more than a shop.

**Mood:** tactile, literary, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c1810` | Headings and primary copy |
| Muted text | `#f4f1ea` | Secondary copy, captions |
| Border | `#2c1810` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#2c1810` · `#f4f1ea` · `#c2410c` · `#ffffff` · `#ebe7de` · `#2c1f1b` · `#231713`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 14px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="w-full py-3 border border-[#2C1810] text-xs uppercase tracking-widest hover:bg-[#2C1810] hover:text-[#F4F1EA] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #2c1810;
  --color-muted: #f4f1ea;
  --color-border: #2c1810;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ea',
    surface: '#ffffff',
    ink: '#2c1810',
    muted: '#f4f1ea',
    line: '#2c1810',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in large serif in espresso brown (#2c1810), with one indented italic line
- **Do:** Keep the ground warm bone (#f4f1ea) with the soft texture as the only background detail
- **Do:** Set navigation and calls to action in small tracked uppercase sans-serif
- **Don't:** Don't add an orange or saturated colour to the hero; the page is bone and brown
- **Don't:** Don't use a solid filled button in the first screen; the actions are text links
- **Don't:** Don't set the body paragraph in the serif; it stays in small sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
