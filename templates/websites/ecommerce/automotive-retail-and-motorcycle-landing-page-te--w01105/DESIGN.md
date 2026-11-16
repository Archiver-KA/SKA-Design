# Design system — Automotive Retail and Motorcycle Landing Page Template

`SN-W01105` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold motorcycle dealership hero with a dark photograph under a heavy overlay and oversized uppercase white headlines. Red (#e3001b) is the one brand colour, used for the top strip, the primary button and the nav call to action, while the secondary is a dark outlined button. The page reads as aggressive and product-first, with the bike filling the lower half.

**Mood:** bold, aggressive, product-first, dark, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e3001b` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e3001b` · `#000000` · `#0a0a0a` · `#e5e7eb` · `#6b7280` · `#f3f4f6` · `#18181b` · `#eab308` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Barlow Condensed, Playfair Display
- **Scale (largest breakpoint):** h1 130px · h2 72px · h3 24px · body 14px
- **Weights in use:** black, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[4px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[1320px]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-[#E3001B] hover:bg-[#FF1A2E] hover:scale-105 text-white px-7 py-3 rounded-full text-xs font-bold uppercase transition-all shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Schedule (`schedule-agenda`)
4. Pricing (`pricing`)
5. Logo cloud (`logo-cloud`)
6. Stats band (`stats`)
7. Map / location (`map-location`)
8. Articles (`blog-articles`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e3001b;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e3001b',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase white sans, filling the top of the hero
- **Do:** Use red (#e3001b) for the primary button and the top strip only
- **Do:** Keep the photograph dark with a gradient overlay behind the copy
- **Don't:** Don't use red for body text
- **Don't:** Don't place light backgrounds behind the hero copy
- **Don't:** Don't fill the secondary button in red; keep it outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
