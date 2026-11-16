# Design system — NOTH Streetwear E-commerce Landing Page Template

`SN-W01277` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark streetwear product page: a near-black ground (#0c0c0d) with white type and a large product photo on a dark stage. Headlines are big, tightly set uppercase Inter with a model number, and the four-point star mark is the only graphic flourish. Size selectors and the buy button sit in a left column with square edges, so the page reads like a sneaker drop.

**Mood:** dark, streetwear, minimal, product-first, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0d` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#efefec` · `#ffffff` · `#0c0c0d` · `#111111`.

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
3. Process / steps (`how-it-works`)
4. Product grid (`product-grid`)
5. Product detail (`product-detail`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0c0c0d;
  --color-surface: #111111;
  --color-text: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0d',
    surface: '#111111',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#0c0c0d) with white text
- **Do:** Show the product large on a dark stage with no competing images
- **Do:** Use outlined square size buttons and an outlined full-width ADD TO BAG button
- **Don't:** Don't use the light grey (#efefec) ground; the page is dark.
- **Don't:** Don't round the corners of buttons or cards; the edges are square
- **Don't:** Don't add colour to product imagery or UI; the design is black, white and silver

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
