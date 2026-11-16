# Design system — Bootcamp Hero Education Landing Page Template

`SN-W03420` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A light, editorial hero on warm off-white [#f8f8f6] with a large sans headline, and its key phrase set in deep red [#ad1317]. Red is used for the primary button and the emphasised words, while the stats row uses the same red for its figures. Image cards sit beneath the hero with thin borders, giving a calm, product-led look.

**Mood:** premium, warm, clean, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f6` | Page ground |
| Surface | `#fefefc` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#6d6d72` | Secondary copy, captions |
| Border | `#e5e5e0` | Hairlines, dividers, outlines |
| Accent | `#ad1317` | Primary action and highlights |
| Second accent | `#4e9b57` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#fefefc` · `#6d6d72` · `#d9d9d3` · `#4e9b57` · `#e5e5e0` · `#8b8b91` · `#ad1317` · `#d4a7a4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Loaded families:** Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_16px_35px_rgba(24,24,27,0.08)]`, `shadow-sm`, `shadow-[0_20px_50px_rgba(24,24,27,0.08)]`
- **Content width:** `max-w-[520px]`, `max-w-[1400px]`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-12`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-[#18181B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#343438] font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f6;
  --color-surface: #fefefc;
  --color-text: #18181b;
  --color-muted: #6d6d72;
  --color-border: #e5e5e0;
  --color-accent: #ad1317;
  --color-accent-2: #4e9b57;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f6',
    surface: '#fefefc',
    ink: '#18181b',
    muted: '#6d6d72',
    line: '#e5e5e0',
    accent: '#ad1317',
    accent2: '#4e9b57',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in deep red (#ad1317)
- **Do:** Use red for the primary button and the stat figures only
- **Do:** Keep the background warm off-white (#f8f8f6) with thin light borders
- **Don't:** Don't use red for body text or large background areas
- **Don't:** Don't mix in other saturated colours beyond the red
- **Don't:** Don't set headlines in all caps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
