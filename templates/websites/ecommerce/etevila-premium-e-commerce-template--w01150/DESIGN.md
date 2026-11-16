# Design system — Etevila Premium E-commerce Template

`SN-W01150` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A plain, product-first garden shop page sits on a white ground with near-black text. A saturated green announcement bar and green pill buttons mark the calls to action, and the red-brown accent #a93614 is kept for small highlights. Type is a single bold sans-serif for headlines and body, and the layout relies on flat blocks and grid spacing rather than decoration.

**Mood:** plain, product-first, garden, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a93614` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c9c9d0` · `#a93614`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** extrabold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #a93614;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
  --radius: 10px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#a93614',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Use the green of the announcement bar and primary button for calls to action, and keep it to those elements.
- **Do:** Set headlines in the bold body sans-serif; the page uses one family throughout.
- **Do:** Frame category and product images with rounded-[10px] corners on a white ground.
- **Don't:** Don't introduce a second typeface; display and body share var(--sa-font-body).
- **Don't:** Don't add shadows or gradients; the first screen is flat.
- **Don't:** Don't use the red-brown accent for large areas; it is a small-highlight colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
