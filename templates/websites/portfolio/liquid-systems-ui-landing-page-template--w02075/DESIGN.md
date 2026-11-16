# Design system — Liquid Systems UI Landing Page Template

`SN-W02075` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy product page on a pale grey-blue ground (#f7f9fa) with a heavy dark headline in two short lines, left-aligned beside a phone-sized dashboard mockup. The mockup carries the colour: a blue progress ring, a green bar chart and a purple toggle, while the page chrome stays white and grey. White pill buttons float on the soft background.

**Mood:** clean, technical, airy, modern, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f9fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#0f172a` · `#f1f5f9` · `#3b82f6` · `#1e293b` · `#334155` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-inner`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-48`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Timeline (`timeline`)
6. Stats band (`stats`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f9fa;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
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
    background: '#f7f9fa',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) as the data accent and green (#10b981) for chart highlights only.
- **Do:** Set headlines in a heavy sans in near-black (#0f172a), left-aligned.
- **Do:** Keep the page chrome white and grey and let colour sit inside the product mockup.
- **Don't:** Don't put chart colours on the page chrome or buttons.
- **Don't:** Don't use a dark background; the page is pale.
- **Don't:** Don't fill the buttons with dark colour; they stay white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
