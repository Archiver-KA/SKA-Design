# Design system — Roofing Lead Generation Landing Page Template

`SN-W04084` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, airy hero with a soft blue-grey gradient and a centred layout. The headline is dark sans, and its middle phrase is set in a saturated blue that matches the deep blue button below. A small monospace eyebrow label above the headline gives the page a data-driven tone.

**Mood:** airy, centred, data-driven, clear, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#94a3b8` · `#f1f5f9` · `#f8fafc` · `#eff6ff` · `#475569` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Sora
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Sora, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-lg hover:bg-brand transition-all duration-300 shadow-lg shadow-brand/10 hover:shadow-brand/25">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Testimonials (`testimonials`)
5. 3D / canvas scene (`3d-canvas`)
6. FAQ (`faq`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --color-accent-2: #f97316;
  --font-display: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#e2e8f0',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Sora'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline and set its middle phrase in saturated blue
- **Do:** Use the deep blue button for the single main call to action
- **Do:** Set the eyebrow label in small monospace capitals above the headline
- **Don't:** Don't add a second highlight phrase to the headline
- **Don't:** Don't place a second button beside the main action
- **Don't:** Don't set headlines in monospace; it is limited to the eyebrow label

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
