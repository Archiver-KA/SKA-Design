# Design system — Minimal E-commerce Landing Page Template

`SN-W01259` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A calm, airy product page on near-white with a large dark sans headline, its final phrase set in lavender italic as the one accent. A dark solid button sits beside a plain text link. Feature points sit as small icon-led lines under the buttons, and a photo with floating dark spec cards fills the right side.

**Mood:** calm, editorial, minimal, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f5f2` | Page ground |
| Surface | `#d1c9bb` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f7f5f2` · `#d1c9bb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** Space Grotesk
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-ink-900/50`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Articles (`blog-articles`)
6. Call to action (`cta`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f5f2;
  --color-surface: #d1c9bb;
  --color-text: #111111;
  --font-display: "DM Serif Display", serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f5f2',
    surface: '#d1c9bb',
    ink: '#111111',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the headline large and dark, with the last phrase in lavender italic
- **Do:** Use one dark solid button beside a plain text link
- **Do:** Place floating dark spec cards over the product photo, not over the copy
- **Don't:** Don't add a second accent beside the lavender
- **Don't:** Don't set the headline in a heavy weight; it stays light to medium
- **Don't:** Don't use a dark page background; the hero is near-white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
