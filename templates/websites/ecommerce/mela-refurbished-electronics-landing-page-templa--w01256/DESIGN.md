# Design system — MELA Refurbished Electronics Landing Page Template

`SN-W01256` · ecommerce · light mode · Sinera Atlas theme `market` · language `it`

## Direction

A clean, product-first hero on warm off-white with a heavy near-black sans headline stacked over four lines, its last word in grey. A black solid button sits beside a white outlined one, and a tilted photograph of an orange phone on a pale card carries all the colour. The interface is black, white and grey, and lime shows only as a small dot in the nav.

**Mood:** clean, premium, minimal, product-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#191919` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d9ff3f` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f7f7f5` · `#171717` · `#151515` · `#d9ff3f` · `#191919` · `#e5e6e1` · `#78a300` · `#efefed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 16px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#d9ff3f] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e5ff72]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)
9. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f5;
  --color-surface: #ffffff;
  --color-text: #191919;
  --color-border: #000000;
  --color-accent: #d9ff3f;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f5',
    surface: '#ffffff',
    ink: '#191919',
    line: '#000000',
    accent: '#d9ff3f',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the interface black, white and grey and let the product photograph carry colour
- **Do:** Set the headline heavy and tight, with the last word in grey
- **Do:** Use one black solid button beside one white outlined button
- **Don't:** Don't use lime as a fill; it appears only as a small dot
- **Don't:** Don't add coloured backgrounds behind product photos
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
