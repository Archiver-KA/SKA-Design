# Design system — Digital Agency Landing Page Template

`SN-W01529` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale page with a serif display headline in dark navy, and a violet highlight on the key word, which is the accent that matters here. The primary button is violet and a glass panel with a floating card sits on the right, so the page reads as airy and product-like. Slate greys do the supporting work, and the serif headline sets the editorial tone.

**Mood:** airy, editorial, violet-accented, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#334155` · `#94a3b8` · `#5b58f6` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, &quot
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Integrations (`integrations`)
6. Product grid (`product-grid`)
7. 3D / canvas scene (`3d-canvas`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #8b5cf6;
  --color-accent-2: #8b5cf6;
  --font-display: "Playfair Display", serif;
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
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#8b5cf6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#8b5cf6) for the highlighted headline word and the primary button
- **Do:** Set headlines in Playfair Display with body copy in Inter
- **Do:** Keep panels white (#ffffff) on a pale slate ground (#f8fafc)
- **Don't:** Don't use violet for body text
- **Don't:** Don't use violet for more than one accent in a section
- **Don't:** Don't set headlines in Inter; the serif is the signature

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
