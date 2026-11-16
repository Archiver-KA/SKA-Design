# Design system — Peptide Telehealth SaaS Landing Page Template

`SN-W00624` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clinical SaaS hero on a near-white ground, with dark slate (#0f172a) headlines and one orange-to-purple gradient across the key phrase. The primary button is solid navy and the secondary is an outline, and a queue-style product panel below signals operations rather than lifestyle. The system font keeps the page neutral and utilitarian.

**Mood:** clinical, utilitarian, light, gradient-accented, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ff751f` | Primary action and highlights |
| Second accent | `#b11fff` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#ffffff` · `#64748b` · `#475569` · `#ff751f` · `#f8fafc` · `#b11fff` · `#94a3b8` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-[6px]` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_2px_4px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-semibold bg-[#1a1a1a] text-white px-4 py-2 rounded-[10px] hover:bg-black transition-all shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-transparent hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ff751f;
  --color-accent-2: #b11fff;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 10px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ff751f',
    accent2: '#b11fff',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Set the orange-to-purple gradient (#ff751f to #b11fff) on one headline phrase only
- **Do:** Use solid dark slate (#0f172a) for primary buttons and outlines for secondary buttons
- **Do:** Show the product as a queue panel with status pills
- **Don't:** Don't put the gradient on body text or buttons
- **Don't:** Don't introduce a display typeface; the page relies on the system font
- **Don't:** Don't add dark sections; the page stays light (#fafafa)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
