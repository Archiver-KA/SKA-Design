# Design system — Markium COD E-commerce Landing Page Template

`SN-W01250` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark green hero with a lime accent: a solid lime announcement strip sits above a near-black green nav, and the second headline phrase is set in lime italic serif against a white main line. Solid lime buttons lead the action, with a dark outlined button beside them. The page sits on deep green with a soft glow.

**Mood:** confident, energetic, dark-green, lime-lit

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#84cc16` · `#6b7280` · `#a3e635` · `#111827` · `#ffffff` · `#9ca3af` · `#f9fafb` · `#65a30d` · `#f3f4f6` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-lime-500/10`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-lime-500 hover:bg-lime-400 text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #84cc16;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#84cc16',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in lime italic and keep the rest white
- **Do:** Use solid lime only for the announcement strip and primary buttons
- **Do:** Keep the hero on deep green with a soft glow and a white-on-dark nav
- **Don't:** Don't use an amber accent; only lime appears
- **Don't:** Don't set body text in lime; the grey lede stays neutral
- **Don't:** Don't replace the green ground with a flat white hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
