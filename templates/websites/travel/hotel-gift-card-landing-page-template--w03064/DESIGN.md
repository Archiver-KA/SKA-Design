# Design system — Hotel Gift Card Landing Page Template

`SN-W03064` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm gift card page on a cream ground (#f7f0e7) with a dark navy header bar (#081c3a) and a copper (#b57a44) button for the primary action. The hero shows a gift voucher card as the product, with a copper price value and small labelled rows. Serif-free sans type and rounded corners keep it friendly and approachable rather than formal.

**Mood:** warm, friendly, upscale, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f0e7` | Page ground |
| Surface | `#fbf5ee` | Cards, panels, raised areas |
| Text | `#3e3330` | Headings and primary copy |
| Muted text | `#5e4e45` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b57a44` | Primary action and highlights |
| Second accent | `#081c3a` | Supporting highlights |

Palette by frequency of use: `#5e4e45` · `#e3d5c8` · `#2f2624` · `#fbf5ee` · `#b57a44` · `#8d7a6a` · `#3e3330` · `#f1c9a1` · `#f7f0e7` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[#F1C9A1]/40`, `shadow-[0_0_0_1px_rgba(148,119,96,0.18)]`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-12`, `py-14`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full border border-[#F1C9A1] bg-[#F1C9A1]/10 text-[#FCE9D6] text-xs font-medium tracking-tight px-3 py-1.5 hover:bg-[#F1C9A1]/20 hover:border-[#F1C9A1] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Services (`services`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. FAQ (`faq`)
8. 3D / canvas scene (`3d-canvas`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f7f0e7;
  --color-surface: #fbf5ee;
  --color-text: #3e3330;
  --color-muted: #5e4e45;
  --color-border: #ffffff;
  --color-accent: #b57a44;
  --color-accent-2: #081c3a;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f0e7',
    surface: '#fbf5ee',
    ink: '#3e3330',
    muted: '#5e4e45',
    line: '#ffffff',
    accent: '#b57a44',
    accent2: '#081c3a',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use copper (#b57a44) for the primary button and price values
- **Do:** Keep the navigation bar navy (#081c3a) and the page cream (#f7f0e7)
- **Do:** Show the product as a voucher card with small labelled rows
- **Don't:** Don't use navy for body text on the cream ground
- **Don't:** Don't use the light peach (#f1c9a1) for buttons; it is a tint only
- **Don't:** Don't remove the rounded corners from cards and buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
