# Design system — Luxury Car Concierge Landing Page Template

`SN-W03077` · travel · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark automotive concierge page: a greyscale photograph of a sports car sits behind a near-black veil, with a large white sans headline in two short lines. The palette is neutral, and the only colour is a small green (#10b981) status dot beside the availability label. Buttons are white and outlined pills, so the page reads as a sleek, restrained showroom.

**Mood:** dark, restrained, sleek, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#171717` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#000000` · `#262626` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(16,185,129,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white text-neutral-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a greyscale photograph under a dark veil as the hero
- **Do:** Keep the green (#10b981) to the live status dot only
- **Do:** Set the headline in a large white sans in two short lines
- **Don't:** Don't use green for buttons or headings
- **Don't:** Don't place the subline over the brightest part of the car photo
- **Don't:** Don't add decorative shapes; the photograph is the graphic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
