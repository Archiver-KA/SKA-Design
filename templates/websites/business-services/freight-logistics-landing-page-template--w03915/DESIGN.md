# Design system — Freight Logistics Landing Page Template

`SN-W03915` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A deep navy page with a flat, heavy uppercase headline in white, set very large and tightly spaced. Red (#b91c1c) is the single accent, used for the primary quote button and the thin eyebrow label above the headline. Outlined navigation and secondary buttons stay neutral, so the red reads as the only urgent signal. Corners are square throughout, which keeps the page direct.

**Mood:** direct, forceful, industrial, square, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#162137` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#162137` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#d1d5db` · `#b91c1c` · `#991b1b` · `#7f1d1d` · `#f9fafb` · `#162137` · `#0a101c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo
- **Scale (largest breakpoint):** h1 144px · h2 12px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Shadows:** `shadow-sm`, `shadow-red-900/20`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center space-x-2 text-white text-sm font-medium uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-brand-navy transition-colors rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #162137;
  --color-surface: #f9fafb;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
  --color-accent-2: #162137;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#162137',
    surface: '#f9fafb',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#b91c1c',
    accent2: '#162137',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase at very large size with tight spacing, in white.
- **Do:** Use the red (#b91c1c) only for the primary quote button and the eyebrow label.
- **Do:** Keep buttons square-cornered, with outlined styling for secondary actions.
- **Don't:** Don't add rounded corners to buttons or cards; the square edges are part of the style.
- **Don't:** Don't use red for large background areas.
- **Don't:** Don't place a light ground behind the hero; the navy field carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
