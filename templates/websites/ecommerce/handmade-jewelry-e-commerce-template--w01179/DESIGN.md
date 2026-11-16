# Design system — Handmade Jewelry E-commerce Template

`SN-W01179` · ecommerce · dark mode · Sinera Atlas theme `market` · language `cs`

## Direction

A dark, warm jewellery page on a near-black ground (#101310) with ivory text (#f3f0e8). The hero stacks offset photographs with rounded corners, and a large faded sans wordmark spans the bottom of the screen, adding depth through scale rather than shadow. Terracotta (#c98a6f) appears as small dots and outline button borders, and the mood is quiet and tactile.

**Mood:** tactile, dark, quiet, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101310` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f3f0e8` | Headings and primary copy |
| Border | `#f3f0e8` | Hairlines, dividers, outlines |
| Accent | `#c98a6f` | Primary action and highlights |

Palette by frequency of use: `#f3f0e8` · `#c98a6f` · `#0b0a09` · `#ff5a1f` · `#000000` · `#ffffff` · `#101310` · `#151713` · `#d8cbb5` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h2 96px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-[0.14em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[28px]` (28px), `rounded-[18px]` (18px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-[360px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Product grid (`product-grid`)
7. Call to action (`cta`)
8. Newsletter signup (`newsletter`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)
12. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #101310;
  --color-surface: #000000;
  --color-text: #f3f0e8;
  --color-border: #f3f0e8;
  --color-accent: #c98a6f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101310',
    surface: '#000000',
    ink: '#f3f0e8',
    line: '#f3f0e8',
    accent: '#c98a6f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#101310) and set text in warm ivory (#f3f0e8).
- **Do:** Use terracotta (#c98a6f) for small dots and outline button borders only.
- **Do:** Stack the hero photographs in offset layers with rounded corners.
- **Don't:** Don't use the bright orange (#ff5a1f) for buttons.
- **Don't:** Don't set the faded oversized wordmark at full strength; it sits behind the content.
- **Don't:** Don't add heavy drop shadows to the layered photographs; the depth comes from offset stacking.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
