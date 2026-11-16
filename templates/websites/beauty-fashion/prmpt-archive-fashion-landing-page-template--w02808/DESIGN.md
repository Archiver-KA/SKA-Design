# Design system — PRMPT Archive Fashion Landing Page Template

`SN-W02808` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A stark monochrome fashion archive on pure black (#000000) with white type and no accent colour. The wordmark is a large lowercase serif, while navigation and product labels are small uppercase sans. Content sits in open black space, with the product title and price anchored to the lower right, so the page reads as a gallery rather than a shop.

**Mood:** stark, monochrome, gallery-like, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Scale (largest breakpoint):** h2 30px
- **Weights in use:** normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[2000px]`
- **Common gaps:** `gap-[20px]`, `gap-[50px]`, `gap-[80px]`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Keep the page on #000000 with #ffffff type only
- **Do:** Set navigation and labels in small uppercase sans
- **Do:** Let large prices and titles sit in open space, anchored to a corner
- **Don't:** Don't add an accent colour; the design relies on black and white alone
- **Don't:** Don't use grey panels or cards that break the black ground
- **Don't:** Don't set long blocks of body copy; the page uses short lines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
