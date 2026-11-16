# Design system — Business Coach Landing Page Template

`SN-W03848` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light page with a left-aligned headline in heavy dark navy sans-serif, stacked over three lines, and a short paragraph in slate grey beneath. A pale teal label above the headline and a navy primary button give the page a professional, business-first tone. The right half holds a photograph of people at a desk, which grounds the offer in real work and keeps the layout plain.

**Mood:** professional, plain, approachable, businesslike

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#172554` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#0e7490` · `#172554` · `#ffffff` · `#475569` · `#e2e8f0` · `#0891b2` · `#334155` · `#f8fafc` · `#cbd5e1` · `#cffafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-cyan-950/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="hidden rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-700 sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Stats band (`stats`)
9. Integrations (`integrations`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #172554;
  --color-accent-2: #ea580c;
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
    surface: '#f8fafc',
    ink: '#1e293b',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#172554',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif with tight spacing, in dark navy.
- **Do:** Use the navy button for the primary action and the teal for the small label.
- **Do:** Place the photograph on the right half of the hero.
- **Don't:** Don't use decorative shapes behind the headline.
- **Don't:** Don't use the orange accent in the hero.
- **Don't:** Don't set body copy in pure black; keep it slate grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
