# Design system — AI Solutions Feature Overview

`SN-W00159` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Feature grid over a saturated, blurred backdrop of pink, teal and violet light arcs. Frosted glass cards with small white titles sit on top, so the colour lives in the backdrop and the cards stay neutral. The centred light sans heading and quiet copy keep the page glassy and atmospheric.

**Mood:** glassy, atmospheric, colourful, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#3b82f6` · `#818cf8` · `#111111` · `#000000` · `#93c5fd` · `#a855f7` · `#6366f1` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h1 64px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111111',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep feature cards as frosted glass with white titles
- **Do:** Let the blurred gradient arcs be the only colour behind the grid
- **Do:** Set the page heading as a centred light sans with a short subline
- **Don't:** Don't place solid coloured cards over the backdrop
- **Don't:** Don't put the gradient arcs behind body text
- **Don't:** Don't add more than one card row above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
