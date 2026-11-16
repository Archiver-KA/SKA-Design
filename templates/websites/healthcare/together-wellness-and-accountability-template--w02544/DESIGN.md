# Design system — Together Wellness and Accountability Template

`SN-W02544` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A quiet, practical peer-support page: a light warm-grey ground (#f5f5f4) under a floating white navigation pill, with a heavy near-black sans headline. Teal (#0f766e) appears only in the small uppercase eyebrow label, while the primary button is near-black, so the page reads as calm and utilitarian. The stance is plain and human, with no imagery in the hero.

**Mood:** calm, practical, human, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#0f766e` | Primary action and highlights |
| Second accent | `#6d28d9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f766e` · `#475569` · `#e7e5e4` · `#d6d3d1` · `#0f172a` · `#64748b` · `#2dd4bf` · `#6d28d9` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-300/30`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="rounded-full border border-slate-600 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-800 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Sign-in form (`auth-form`)
4. Benefits (`benefits`)
5. About (`about`)
6. Call to action (`cta`)
7. Listings (`listings`)
8. Logo cloud (`logo-cloud`)
9. Dashboard preview (`dashboard-preview`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #e7e5e4;
  --color-accent: #0f766e;
  --color-accent-2: #6d28d9;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#e7e5e4',
    accent: '#0f766e',
    accent2: '#6d28d9',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use teal (#0f766e) for eyebrow labels and small accents only
- **Do:** Make the primary button near-black (#0f172a) with white text
- **Do:** Set the hero as a left-aligned headline with a short paragraph below
- **Don't:** Don't use teal for the primary button
- **Don't:** Don't add hero photography; the page is typographic
- **Don't:** Don't use the purple (#6d28d9) in the hero; it does not appear above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
