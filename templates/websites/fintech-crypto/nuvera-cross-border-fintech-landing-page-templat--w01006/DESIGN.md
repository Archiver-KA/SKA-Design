# Design system — Nuvera Cross-Border Fintech Landing Page Template

`SN-W01006` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light infrastructure page on an off-white ground (#f6f6f6), with near-black bold headlines whose lower lines are set in vermilion (#ef5f3c). The hero headline is a heavy serif, which gives the fintech an editorial voice, and the eyebrow is an outlined pill. Black pill buttons carry every call to action, so the single warm colour does all the emphasis.

**Mood:** editorial, direct, warm, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f6f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0c0b07` | Headings and primary copy |
| Muted text | `#5e5e5e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef5f3c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0c0b07` · `#d6d3d1` · `#000000` · `#ef5f3c` · `#5e5e5e` · `#e7e5e4` · `#f97316` · `#22c55e` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 80px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]`, `shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)]`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1440px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-8 py-4 bg-[#0C0B07] text-white rounded-full text-lg font-medium hover:bg-black/80 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. 3D / canvas scene (`3d-canvas`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f6f6f6;
  --color-surface: #ffffff;
  --color-text: #0c0b07;
  --color-muted: #5e5e5e;
  --color-border: #ffffff;
  --color-accent: #ef5f3c;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f6f6',
    surface: '#ffffff',
    ink: '#0c0b07',
    muted: '#5e5e5e',
    line: '#ffffff',
    accent: '#ef5f3c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the second and third headline lines in vermilion (#ef5f3c).
- **Do:** Use black pill buttons for every call to action.
- **Do:** Keep the eyebrow as an outlined pill above the headline.
- **Don't:** Don't use vermilion for body text.
- **Don't:** Don't add a dark hero band.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
