# Design system — Vitals Pro Medical Management Landing Page Template

`SN-W02549` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A premium health-software page on a near-white ground with a heavy near-black headline whose last phrase fades into slate grey. Teal (#0d9488) is the single accent, used on the primary action, while the navigation's dark slate button carries the demo request. The stance is confident and professional, a B2B product that leans on its headline and a soft diagonal wash rather than illustration.

**Mood:** confident, professional, clean, b2b

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#475569` · `#0d9488` · `#94a3b8` · `#14b8a6` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#f0fdfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-teal-100/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0d9488;
  --color-accent-2: #e2e8f0;
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
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0d9488',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use teal (#0d9488) for the primary action button and small accents only
- **Do:** Set the headline in a heavy near-black sans, with the closing phrase in slate grey
- **Do:** Keep the demo request as a dark slate button in the navigation
- **Don't:** Don't use teal for headlines; headings are near-black or slate
- **Don't:** Don't add illustrations; the page relies on type and a soft wash
- **Don't:** Don't set the closing phrase in a second bright colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
