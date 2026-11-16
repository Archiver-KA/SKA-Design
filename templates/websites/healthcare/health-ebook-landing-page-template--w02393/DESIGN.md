# Design system — Health Ebook Landing Page Template

`SN-W02393` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A clean, mobile-friendly ebook hero on a near-white ground, with a dark sans-serif headline and the second line in green that carries the brand. A rounded photograph of a plated meal sits on the right inside a soft card, with a small checkmark callout over it. The layout is airy and direct, and the green is the only accent.

**Mood:** clean, wholesome, direct, airy, food-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f8fafc` · `#e2e8f0` · `#475569` · `#64748b` · `#94a3b8` · `#f1f5f9` · `#10b981` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]`, `shadow-2xl`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Comparison (`comparison`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #34d399;
  --color-accent-2: #34d399;
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
    accent: '#34d399',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark sans-serif, with the second line in green (#34d399 or the darker green in the heading).
- **Do:** Keep the photograph inside a rounded card with the callout overlapping its lower edge.
- **Do:** Use the green only for the headline emphasis and the checkmark.
- **Don't:** Don't set body copy in the green; it is for emphasis.
- **Don't:** Don't add shadows to the photograph card beyond the soft edge.
- **Don't:** Don't use a second accent colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
