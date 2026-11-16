# Design system — Fintech Employee Payout Landing Page Template

`SN-W00951` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with a pale mint wash (#ecfdf5) and deep green (#065f46) primary buttons over dark green text (#022c22). The headline is set large in DM Serif Display, centred, which gives an editorial, trustworthy tone against the Inter body. Floating white status cards around the hero add product detail without extra colour.

**Mood:** editorial, trustworthy, calm, green, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfdf5` | Cards, panels, raised areas |
| Text | `#022c22` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ecfdf5` | Hairlines, dividers, outlines |
| Accent | `#065f46` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#022c22` · `#064e3b` · `#065f46` · `#34d399` · `#d1fae5` · `#111827` · `#ecfdf5` · `#047857` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** Inter
- **Loaded families:** DM Serif Display, Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-emerald-800 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-emerald-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Comparison (`comparison`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfdf5;
  --color-text: #022c22;
  --color-muted: #6b7280;
  --color-border: #ecfdf5;
  --color-accent: #065f46;
  --color-accent-2: #fef3c7;
  --font-display: "DM Serif Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ecfdf5',
    ink: '#022c22',
    muted: '#6b7280',
    line: '#ecfdf5',
    accent: '#065f46',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in DM Serif Display at large size and centre the hero.
- **Do:** Use deep green (#065f46) for primary buttons and the wordmark.
- **Do:** Float small white status cards around the hero image.
- **Don't:** Don't set body copy in the serif face.
- **Don't:** Don't use bright green fills for buttons.
- **Don't:** Don't place the status cards over body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
