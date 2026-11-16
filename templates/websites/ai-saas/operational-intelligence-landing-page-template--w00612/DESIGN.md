# Design system — Operational Intelligence Landing Page Template

`SN-W00612` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, clinical dashboard page on a pale blue-grey ground (#f7f9fa) with a heavy black sans headline and grey supporting copy. The hero's right side shows a phone-sized dashboard with a blue progress ring, pale blue bars and a green bar, so blue (#3b82f6) carries the data and green marks the live state. The result is calm, neutral and precise, with colour kept to the data visuals.

**Mood:** clinical, calm, light, precise, data-led

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

- **Do:** Set the page ground to pale blue-grey (#f7f9fa) with black headlines (#0f172a).
- **Do:** Use blue (#3b82f6) for the data ring and bars and the primary button.
- **Do:** Use green (#10b981) only to mark live or healthy states in the mockup.
- **Don't:** Don't use the pale grey (#e2e8f0) as the accent; it only tints inactive chart bars.
- **Don't:** Don't make the nav links coloured; they are small grey text.
- **Don't:** Don't add a purple (#a855f7) accent to the hero; only the toggle in the mockup uses it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
