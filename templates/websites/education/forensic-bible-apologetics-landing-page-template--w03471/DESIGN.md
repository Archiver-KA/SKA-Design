# Design system — Forensic Bible Apologetics Landing Page Template

`SN-W03471` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet, scholarly page on a near-white slate ground with a large heavy headline in dark slate (#1e293b) and a faint pastel glow in the corners. The system font is used throughout, and a small tag above the headline reads like a lab label, with a monospace caption in the navigation. The page is a single scroll of timeline sections over full-width panels.

**Mood:** scholarly, measured, clean, serious, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#1e293b` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#f8fafc` · `#cbd5e1` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #f1f5f9;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #10b981;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#f1f5f9',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set headlines in the system font at a heavy weight in slate (#1e293b)
- **Do:** Use small monospace text for lab-style labels above headlines
- **Do:** Keep sections as one timeline with full-width panels
- **Don't:** Don't add saturated colour to the ground
- **Don't:** Don't use decorative icons; labels stay as text
- **Don't:** Don't set headlines below a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
