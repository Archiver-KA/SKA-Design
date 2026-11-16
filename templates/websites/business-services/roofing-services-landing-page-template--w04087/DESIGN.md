# Design system — Roofing Services Landing Page Template

`SN-W04087` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, measured roofing hero where a dark navy headline is closed by a muted slate word. The framed house photograph on the right is balanced by a short text column on the left and a row of plain figures beneath. Navy is the only solid button colour, and the verified green is confined to a small status mark.

**Mood:** measured, light, orderly, credible, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#cbd5e1` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 12px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-slate-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline in dark navy sans, with the closing word in slate
- **Do:** Use navy (#0f172a) as the solid fill for the main button
- **Do:** Frame the house photograph and keep the trust card on its lower edge
- **Don't:** Don't use green as a button or link colour
- **Don't:** Don't place the trust card over the text column
- **Don't:** Don't colour the figures; they stay dark navy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
