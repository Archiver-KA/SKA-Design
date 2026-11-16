# Design system — Interactive Pricing with Animated Shader

`SN-W04223` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The design is a soft, light pricing page built on a pale grey-blue ground (#d8dce0) with white glass cards and generous rounded corners. A slow iridescent gradient blob at the top, drawing on pink (#f5d0fe) and mint (#ecfccb), is the only colour and gives the page its character. Inter sets headings at a large size over plain, low-contrast secondary text.

**Mood:** soft, airy, glassy, iridescent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d8dce0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5d0fe` | Primary action and highlights |
| Second accent | `#ecfccb` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#6b7280` · `#f5d0fe` · `#ecfccb` · `#e879f9` · `#67e8f9` · `#020617` · `#d8dce0` · `#d9f99d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Geist
- **Scale (largest breakpoint):** h1 48px · h3 20px · body 20px
- **Weights in use:** extrabold, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full rounded-xl py-3 bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-lime-200 text-black font-bold shadow-xl ring-2 ring-fuchsia-200/40 hover:scale-105 hover:from-fuchsia-300 hover:to-lime-100 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #d8dce0;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f5d0fe;
  --color-accent-2: #ecfccb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d8dce0',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f5d0fe',
    accent2: '#ecfccb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground light grey (#d8dce0) with white glass cards
- **Do:** Use Inter at large sizes for headings and prices
- **Do:** Reserve the pink and mint gradient for the hero accent and the highlighted plan
- **Don't:** Don't use solid saturated fills for plan cards
- **Don't:** Don't add a dark theme; the glass effect needs a light ground
- **Don't:** Don't use the gradient as a background for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
