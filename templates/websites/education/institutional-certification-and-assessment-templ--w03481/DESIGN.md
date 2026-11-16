# Design system — Institutional Certification and Assessment Template

`SN-W03481` · education · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A clean, professional services page on white and pale grey, with near-black headlines set large in Inter. Dark navy buttons carry the primary action, and the hero shows a product-style panel with progress bars, status tags and a short list of steps. Amber tags mark pending items, and the layout is built from rounded cards on a light grey section.

**Mood:** professional, clean, orderly, trustworthy, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#020617` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#020617` | Primary action and highlights |
| Second accent | `#d97706` | Supporting highlights |

Palette by frequency of use: `#020617` · `#ffffff` · `#e2e8f0` · `#475569` · `#0284c7` · `#64748b` · `#f8fafc` · `#cbd5e1` · `#94a3b8` · `#7dd3fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-slate-200/70`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #020617;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #020617;
  --color-accent-2: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#020617',
    muted: '#475569',
    line: '#ffffff',
    accent: '#020617',
    accent2: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in near-black (#020617) at large size
- **Do:** Use amber (#d97706) for pending or next-step tags only
- **Do:** Show process status in rounded panels with progress bars
- **Don't:** Don't use amber for headlines or buttons
- **Don't:** Don't add decorative imagery beside the hero panel
- **Don't:** Don't set body text in pale grey on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
