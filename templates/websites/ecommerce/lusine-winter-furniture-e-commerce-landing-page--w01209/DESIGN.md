# Design system — Lusine Winter Furniture E-commerce Landing Page Template

`SN-W01209` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A warm, photographic stance: a full-width interior photograph in brown and cream fills the hero, with a white serif headline at its lower left and a white pill button beneath. The header is a pale beige band, and the page below turns white. The brown leather tones in the photograph are the only strong colour, so the type and buttons stay white or beige.

**Mood:** warm, photographic, calm, seasonal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8e4dc` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#78593d` | Primary action and highlights |
| Second accent | `#1a3c34` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#000000` · `#f5f5f5` · `#525252` · `#020617` · `#e8e4dc` · `#1a1a1a` · `#171717` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 30px · h3 60px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[1600px]`
- **Common gaps:** `gap-1`, `gap-6`, `gap-x-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)
3. Call to action (`cta`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e8e4dc;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #e5e5e5;
  --color-accent: #78593d;
  --color-accent-2: #1a3c34;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e8e4dc',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#e5e5e5',
    accent: '#78593d',
    accent2: '#1a3c34',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put the hero headline in white serif at the lower left of a full-width photograph.
- **Do:** Use a white pill button with dark text over the hero, with small carousel dots.
- **Do:** Let the leather tones of the photography supply the colour; keep UI elements white or beige.
- **Don't:** Don't use the rust (#a85f3f) as a page background; use beige and white.
- **Don't:** Don't place body copy over the photograph without a darkening layer.
- **Don't:** Don't use dark grey text on the photograph; keep the hero type white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
