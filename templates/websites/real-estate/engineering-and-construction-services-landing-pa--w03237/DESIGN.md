# Design system — Engineering & Construction Services Landing Page Template

`SN-W03237` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, corporate engineering-services hero with a near-black headline in two lines and a blue second line, Support Services, that carries the accent. A blue rule and a blue subline mark the second level of hierarchy, while a photograph of a workstation sits in a rounded card on the right with a small floating stat card. Colour is limited to blue, slate and white, which makes the page measured and dependable.

**Mood:** measured, dependable, corporate, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e0e7ff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#475569` · `#f1f5f9` · `#94a3b8` · `#2563eb` · `#0891b2` · `#4f46e5` · `#059669` · `#cffafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white hover:bg-slate-50 text-slate-800 font-medium px-8 py-4 rounded-xl border border-slate-200 transition-all hover:shadow-lg flex items-center gap-3 text-base hover:border-slate-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Logo cloud (`logo-cloud`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e0e7ff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #d1fae5;
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
    surface: '#e0e7ff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black sans, with the key phrase in blue (#2563eb).
- **Do:** Use the blue (#2563eb) for the primary button and the subline rule.
- **Do:** Place a photograph in a rounded card on the right with small floating stat cards over its corners.
- **Don't:** Don't use the pale cyan (#cffafe) as a text or button colour; it is a badge tint only.
- **Don't:** Don't introduce a second bright colour; blue, slate and white are the set.
- **Don't:** Don't crowd the hero with more than two floating cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
