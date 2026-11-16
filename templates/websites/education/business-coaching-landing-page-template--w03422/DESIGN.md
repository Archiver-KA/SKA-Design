# Design system — Business Coaching Landing Page Template

`SN-W03422` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A professional coaching page on white, with a bold sans-serif headline and primary button in deep navy [#103854]. A navy photo-placeholder card balances the hero, and a thin orange-to-green stripe marks its lower edge. The page reads as clear and trustworthy, with the navy doing most of the work.

**Mood:** professional, trustworthy, clear, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fff7ed` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#103854` | Primary action and highlights |
| Second accent | `#f5821f` | Supporting highlights |

Palette by frequency of use: `#103854` · `#ffffff` · `#475569` · `#cbd5e1` · `#e2e8f0` · `#f5821f` · `#f9a51a` · `#93c83e` · `#fff7ed` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="hidden rounded-lg bg-[#103854] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b43] lg:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fff7ed;
  --color-text: #334155;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #103854;
  --color-accent-2: #f5821f;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fff7ed',
    ink: '#334155',
    muted: '#475569',
    line: '#ffffff',
    accent: '#103854',
    accent2: '#f5821f',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the deep navy (#103854) for headlines and primary buttons
- **Do:** Set headlines in a bold sans-serif with tight line spacing
- **Do:** Pair the navy with white and light grey surfaces only
- **Don't:** Don't use the orange (#f5821f) for large areas; keep it to thin accents
- **Don't:** Don't use more than one orange accent per section
- **Don't:** Don't use decorative gradients on headline text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
