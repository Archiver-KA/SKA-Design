# Design system — NOTH Urban Athletics & Streetwear E-commerce Template

`SN-W01278` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, cinematic streetwear landing page with a near-black (#0a0a0a) hero and white uppercase headlines. The product is shown large beside the copy, and the four-point star mark is used as a quiet motif. Below the hero the layout is grid-based, for drops and product tiles, with the same stark contrast.

**Mood:** dark, cinematic, streetwear, brand-forward, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#efefec` · `#0a0a0a` · `#0c0c0d` · `#111111` · `#bbbbbb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Anton, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Process / steps (`how-it-works`)
5. Product grid (`product-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on #0a0a0a with white uppercase headlines
- **Do:** Place the product image large against the dark ground
- **Do:** Use the star mark as the only ornament
- **Don't:** Don't use the light #efefec page ground; the hero is dark
- **Don't:** Don't add rounded corners to buttons or cards
- **Don't:** Don't add accent colours; the palette is black, white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
