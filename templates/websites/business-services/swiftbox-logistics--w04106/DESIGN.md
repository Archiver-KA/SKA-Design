# Design system — SwiftBox Logistics

`SN-W04106` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, airy page on a near-white ground (#f8fafc), with indigo (#4f46e5) used for the emphasised second headline line and the primary buttons. Headlines are large, bold and set in the system sans with a tight, confident rhythm. White rounded cards with soft shadows show product UI, which is the main visual device.

**Mood:** clean, airy, confident, modern, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4f46e5` · `#0f172a` · `#64748b` · `#94a3b8` · `#f1f5f9` · `#6366f1` · `#e2e8f0` · `#1e293b` · `#e0e7ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Listings (`listings`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
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
    accent: '#4f46e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in indigo (#4f46e5)
- **Do:** Use white rounded cards on the near-white ground (#f8fafc)
- **Do:** Show product UI in rounded cards as the main hero visual
- **Don't:** Don't use indigo for body text
- **Don't:** Don't place dark sections between light ones without a clear purpose
- **Don't:** Don't use more than one accent colour on the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
