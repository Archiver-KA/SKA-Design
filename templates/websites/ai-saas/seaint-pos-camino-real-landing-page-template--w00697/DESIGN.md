# Design system — SeaInt POS Camino Real Landing Page Template

`SN-W00697` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, clean fintech landing page: white ground with near-navy text and one saturated blue (#2563eb) carrying the headline accents and the primary button. The large headline is set in a blue serif-looking face, which departs from the sans-serif recorded for this template, so that serif is the recognisable detail. Product mockups of card terminals sit on white panels with thin light borders.

**Mood:** clean, trustworthy, bright, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#e2e8f0` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#0f172a` · `#e2e8f0` · `#f8fafc` · `#f1f5f9` · `#475569` · `#eff6ff` · `#334155` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Inter, DM Sans, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #94a3b8;
  --color-text: #0f172a;
  --color-muted: #0f172a;
  --color-border: #e2e8f0;
  --color-accent: #2563eb;
  --color-accent-2: #22c55e;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#94a3b8',
    ink: '#0f172a',
    muted: '#0f172a',
    line: '#e2e8f0',
    accent: '#2563eb',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in blue (#2563eb) at large size, one phrase per line.
- **Do:** Use the blue (#2563eb) only for the primary button and headline accents.
- **Do:** Build panels as white cards with thin light borders rather than filled tiles.
- **Don't:** Don't set the page on a blue ground; the page background is white.
- **Don't:** Don't add dark sections to this light layout.
- **Don't:** Don't use heavy shadows; keep depth light and border-led.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
