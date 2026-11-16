# Design system — Faith-Based E-commerce Landing Page Template

`SN-W01155` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A traditional apparel page that pairs a cream header (#f5f0e8) with a navy announcement strip (#0b1a33) above a full-bleed photograph under a navy overlay. Headlines are in Playfair Display, a high-contrast serif, set white over the image, which gives a formal, scriptural tone. Gold (#d4af37) is kept to small text accents such as the verse in the top bar.

**Mood:** formal, devout, classic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f0e8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0b1a33` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0b1a33` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#0b1a33` · `#f5f0e8` · `#d4af37` · `#ffffff` · `#f3f4f6` · `#c96e4f` · `#2c2c2c` · `#e5e0d8` · `#dde2db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-12`, `gap-4`, `gap-x-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-beige text-navy font-medium text-sm tracking-wide hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Logo cloud (`logo-cloud`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f0e8;
  --color-surface: #ffffff;
  --color-text: #0b1a33;
  --color-border: #ffffff;
  --color-accent: #0b1a33;
  --color-accent-2: #d4af37;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f0e8',
    surface: '#ffffff',
    ink: '#0b1a33',
    line: '#ffffff',
    accent: '#0b1a33',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display; use Inter only for body copy and buttons.
- **Do:** Keep gold (#d4af37) to small accents such as the announcement text and one highlight per section.
- **Do:** Put white headline text over the photograph with a navy gradient (#0b1a33) for legibility.
- **Don't:** Don't set headlines in a sans-serif; the serif is part of the identity.
- **Don't:** Don't use gold as a large fill or button colour.
- **Don't:** Don't place text on the photograph without the navy overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
