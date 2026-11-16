# Design system — Argos Commodity Index | Vývoj komodit v české ekonomice

`SN-W00876` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A light, data-led page on near-white (#f9fafb) with a black sans headline at one large size and a grey subline under it. The primary button is a solid ochre (#c4a45c) beside a white outline button, and a row of small uppercase labels with values runs along the base of the hero. Apart from the ochre, the palette is almost colourless, so the commodity theme is carried by the figures. The copy is in Czech.

**Mood:** light, data-led, sober, institutional, ochre-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#c4a45c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#f3f4f6` · `#6b7280` · `#f9fafb` · `#c4a45c` · `#9ca3af` · `#4b5563` · `#374151` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors text-sm font-medium text-white bg-yellow-600 rounded-md px-6 py-3">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. 3D / canvas scene (`3d-canvas`)
4. Feature grid (`features`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #d1d5db;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #c4a45c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#d1d5db',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#c4a45c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the ochre (#c4a45c) only on the primary button and small eyebrow text
- **Do:** Keep the headline in black sans at one large size with a grey subline below
- **Do:** Set the stat row as small uppercase labels above values along the hero base
- **Don't:** Don't add hero imagery; the page relies on figures and text
- **Don't:** Don't use the ochre for large fills
- **Don't:** Don't drop Czech diacritics from the sans font; the copy needs them

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
