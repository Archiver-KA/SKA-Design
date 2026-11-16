# Design system — Formare Community Management Template

`SN-W03606` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The management template is a product-led SaaS page on white, with a thin framed border and a wide open field. A short paragraph sits at the left, and a stacked product mockup of panels and cards sits at the right, overlapping the edge of the layout. Blue (#2563eb) marks the primary action and the interface highlights, and a deep navy card (#06145b) is the strongest dark area. The layout is airy and product-oriented.

**Mood:** product-led, airy, technical, corporate, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#020617` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#e2e8f0` · `#ffffff` · `#1d4ed8` · `#f8fafc` · `#bfdbfe` · `#06145b` · `#2563eb` · `#020617` · `#dbeafe` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-[-0.02em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[18px]` (18px)
- **Shadows:** `shadow-sm`, `shadow-[0_12px_26px_rgba(37,99,235,0.22)]`, `shadow-[0_28px_80px_rgba(37,99,235,0.16)]`
- **Content width:** `max-w-[1600px]`, `max-w-[260px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group flex items-center justify-between gap-6 rounded-[18px] border border-slate-200 bg-white/78 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)] backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.06)]">…</a>
```

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)
2. Process / steps (`how-it-works`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #020617;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#020617',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563eb) for the primary button and interface highlights
- **Do:** Let the product mockup overlap the edge of the layout as the main visual
- **Do:** Keep the supporting copy short and to the left of the mockup
- **Don't:** Don't fill the open field with extra illustrations
- **Don't:** Don't use the deep navy (#06145b) on more than one panel per screen
- **Don't:** Don't set body copy in blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
