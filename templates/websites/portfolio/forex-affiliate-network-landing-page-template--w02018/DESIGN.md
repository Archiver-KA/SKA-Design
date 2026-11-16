# Design system — Forex Affiliate Network Landing Page Template

`SN-W02018` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black, dark-mode page with a floating, hairline-bordered pill nav and a large white sans headline over two lines. The phrase WhatCPA is set in a grey gradient, and the primary button is a dark pill with a thin border rather than a bright fill. Small orange touches in the logo and the stat strip carry the brand, and a row of stat cards sits along the bottom of the hero.

**Mood:** dark, financial, crisp, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f97316` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#f97316` · `#fb923c` · `#3f3f46` · `#d4d4d8` · `#27272a` · `#e4e4e7` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-orange-900/20`, `shadow-[0_0_15px_rgba(249,115,22,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f97316;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f97316',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the grey gradient only on the brand name inside the headline
- **Do:** Keep buttons as dark pills with thin borders; use orange only for the logo and small highlights
- **Do:** Set headlines in a large white sans with tight leading
- **Don't:** Don't use the orange (#f97316) as the page ground; the page is near-black
- **Don't:** Don't fill the primary button with bright colour
- **Don't:** Don't drop the stat cards at the bottom of the hero; they carry the proof

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
