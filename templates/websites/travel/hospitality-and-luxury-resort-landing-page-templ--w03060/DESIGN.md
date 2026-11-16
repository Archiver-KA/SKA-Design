# Design system — Hospitality and Luxury Resort Landing Page Template

`SN-W03060` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet hotel hero with a muted sage-green ground that darkens toward the bottom edge, a centred white serif headline set in two short lines, and small spaced caps for the eyebrow and navigation. The cream page ground sits behind a sage hero field, which makes green the main colour. Type is light and widely spaced, which keeps the page slow and calm.

**Mood:** quiet, calm, organic, slow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f2e8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#102317` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#b8afa2` | Hairlines, dividers, outlines |
| Accent | `#173d24` | Primary action and highlights |
| Second accent | `#e7ddce` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#102317` · `#b8afa2` · `#737373` · `#f7f2e8` · `#173d24` · `#4f7c55` · `#e7ddce` · `#2d6037` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px)
- **Content width:** `max-w-[1240px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 bg-[#B08A4A] text-[#102317] px-6 py-3 rounded-md text-[10px] font-medium uppercase tracking-widest hover:bg-[#A65F45] hover:text-white transition-colors btn">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. 3D / canvas scene (`3d-canvas`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f2e8;
  --color-surface: #ffffff;
  --color-text: #102317;
  --color-muted: #737373;
  --color-border: #b8afa2;
  --color-accent: #173d24;
  --color-accent-2: #e7ddce;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f2e8',
    surface: '#ffffff',
    ink: '#102317',
    muted: '#737373',
    line: '#b8afa2',
    accent: '#173d24',
    accent2: '#e7ddce',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Keep the headline in a light serif, set in short centred lines
- **Do:** Use small spaced uppercase for eyebrows and navigation
- **Do:** Let the green ground fade to darker at the bottom edge of the hero
- **Don't:** Don't use the cream (#f7f2e8) as the hero ground; the hero is sage
- **Don't:** Don't set headlines in bold weights
- **Don't:** Don't add bright accent colours to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
