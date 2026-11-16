# Design system — Ferva Beverage Landing Page Template

`SN-W02378` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A rich, product-led hero on a deep bottle-green ground, with a large serif headline in white and a yellow italic line that carries the brand voice. A tall amber bottle image and scattered fruit illustrations supply the colour, so the page feels warm and artisanal. The first screen is dark green, although the template declares light mode, and the yellow (#facc15) is the main accent.

**Mood:** artisanal, warm, brand-forward, organic, vibrant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#facc15` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#0d9488` | Supporting highlights |

Palette by frequency of use: `#475569` · `#64748b` · `#facc15` · `#f59e0b` · `#0d9488` · `#f8fafc` · `#334155` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Playfair Display, DM Sans, Italiana
- **Scale (largest breakpoint):** body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Map / location (`map-location`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #facc15;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-accent: #facc15;
  --color-accent-2: #0d9488;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#facc15',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    accent: '#facc15',
    accent2: '#0d9488',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the final line in yellow (#facc15) italic.
- **Do:** Use yellow for the primary button and the one highlight per section.
- **Do:** Let the product image carry the colour rather than adding more accents.
- **Don't:** Don't use the amber (#f59e0b) and the yellow together on one button; pick one.
- **Don't:** Don't set body copy in yellow; it is for headings and buttons.
- **Don't:** Don't crowd the product image with extra decoration beyond the scattered fruit.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
