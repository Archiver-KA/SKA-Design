# Design system — Fitness Coach SaaS Landing Page Template

`SN-W02595` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark SaaS-style page on black with a large white headline and a grey second line, centred over short body copy. A solid white button and an outlined button form the calls to action, and a faint indigo (#6366f1) square in the logo is the only colour. The page reads as a clean software product, with a dark app preview panel below the hero.

**Mood:** software, dark, clean, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#64748b` · `#000000` · `#818cf8` · `#cbd5e1` · `#10b981` · `#475569` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-indigo-500/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. 3D / canvas scene (`3d-canvas`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans-serif at large size with the second line in grey
- **Do:** Use a solid white button for the main action and an outlined button for the demo
- **Do:** Use the indigo (#6366f1) only for the logo mark and small accents
- **Don't:** Don't fill large areas with indigo; the page is black and grey
- **Don't:** Don't set body copy in pure white; the grey text keeps the hierarchy
- **Don't:** Don't add busy imagery to the hero; the product panel below carries the detail

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
