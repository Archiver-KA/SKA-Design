# Design system — Mediation & Arbitration Landing Page Template

`SN-W00528` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft light page whose hero is a mint-to-pale-green gradient, with a dark heavy headline and a green (#059669) emphasis on the word Above. Solid green pills carry the primary actions and white outlines the secondary, and the stat row sits in dark type under the buttons. The page is calm and trustworthy, with the green used as a single, consistent accent.

**Mood:** calm, trustworthy, fresh, light, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#059669` · `#475569` · `#ecfdf5` · `#10b981` · `#e2e8f0` · `#64748b` · `#f1f5f9` · `#047857`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-slate-200`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-3`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Services (`services`)
4. Team (`team`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #059669;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#059669',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word of the headline in green (#059669).
- **Do:** Use solid green pills for the primary action and white outlines for the secondary.
- **Do:** Set the stat row in dark type with large numerals.
- **Don't:** Don't use the navy (#1e293b) as a button fill.
- **Don't:** Don't put the green gradient behind body text.
- **Don't:** Don't add shadows to the stat row.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
