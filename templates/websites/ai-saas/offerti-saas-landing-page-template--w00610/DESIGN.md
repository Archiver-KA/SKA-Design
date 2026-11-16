# Design system — Offerti SaaS Landing Page Template

`SN-W00610` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light SaaS landing page on a white ground with a system sans face and a single blue (#2563eb) accent. Dark slate text sits on a light surface, with a large headline at about 88px.

**Mood:** light, clean, standard, neutral, provisional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#e2e8f0` · `#1e293b` · `#94a3b8` · `#0f172a` · `#f1f5f9` · `#f8fafc` · `#475569` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 14px · body 20px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold rounded-full transition-all duration-300 shadow-sm border border-slate-200 hover:border-slate-300 flex items-center justify-center gap-3 group hover:-translate-y-1">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #ef4444;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the page ground to white (#ffffff) with dark slate headlines (#0f172a).
- **Do:** Use the blue (#2563eb) for the primary action only.
- **Do:** Keep the large headline in the system sans at a single weight.
- **Don't:** Don't treat the red (#ef4444) as a brand accent.
- **Don't:** Don't swap the system sans for a decorative face.
- **Don't:** Don't add decorative glows to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
