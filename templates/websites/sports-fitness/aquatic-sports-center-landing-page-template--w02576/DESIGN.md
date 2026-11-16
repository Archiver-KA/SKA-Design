# Design system — Aquatic Sports Center Landing Page Template

`SN-W02576` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `ru`

## Direction

A calm, luxurious spa-style page on a deep teal-black ground (#071416) with pale serif headlines and a warm tan accent. The tan (#c4a574) fills the primary and secondary pill buttons, and the stat row below the hero uses small sans-serif labels over serif values. Generous space and a single thin rule near the bottom give the page a quiet, premium tone suited to a sea-water pool.

**Mood:** calm, luxurious, deep, quiet, aquatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#071416` | Page ground |
| Surface | `#0c2a2e` | Cards, panels, raised areas |
| Text | `#e7efe8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4a574` | Primary action and highlights |

Palette by frequency of use: `#e7efe8` · `#e8dcc8` · `#ffffff` · `#c4a574` · `#071416` · `#0c2a2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-[0.24em]`, `tracking-[0.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="rounded-full bg-bronze px-4 py-2 text-sm font-semibold text-ink">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Comparison (`comparison`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #071416;
  --color-surface: #0c2a2e;
  --color-text: #e7efe8;
  --color-border: #ffffff;
  --color-accent: #c4a574;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#071416',
    surface: '#0c2a2e',
    ink: '#e7efe8',
    line: '#ffffff',
    accent: '#c4a574',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the tan (#c4a574) for the primary pill buttons and the price highlight
- **Do:** Set headlines in the light serif display face and keep body copy in the sans-serif
- **Do:** Use small uppercase sans-serif labels above the stat values
- **Don't:** Don't use bright blue for water imagery; the palette stays in deep teal and warm tan
- **Don't:** Don't set large amounts of body copy in pale grey on the teal; keep it short
- **Don't:** Don't add heavy shadows or borders; separation comes from tone and spacing

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
