# Design system — Van Rental Service Landing Page

`SN-W04122` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy page with a large white headline whose second line is set in green (#34d399). Translucent glass panels with rounded corners hold feature tiles, a search field and a testimonial card, and each tile carries a small coloured icon block. The look is soft and atmospheric, with the green carrying the emphasis.

**Mood:** atmospheric, soft, glassy, dark, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#9ca3af` · `#10b981` · `#22c55e` · `#4ade80` · `#d1d5db` · `#60a5fa` · `#06b6d4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Manrope
- **Scale (largest breakpoint):** h1 30px · h2 72px · body 20px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white px-8 py-4 rounded-3xl font-semibold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-105 glow group font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in green (#34d399) on the dark navy ground
- **Do:** Build feature tiles and testimonial cards as rounded translucent panels
- **Do:** Give each feature tile a single coloured icon block
- **Don't:** Don't use sharp corners on panels
- **Don't:** Don't put more than one bright accent in a tile
- **Don't:** Don't use a light background for cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
