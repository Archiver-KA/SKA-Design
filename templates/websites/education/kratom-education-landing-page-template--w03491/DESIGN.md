# Design system — Kratom Education Landing Page Template

`SN-W03491` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A deep forest-green landing page with large pale green headlines (#e9f0ca) set in Inter and a faint photographic wash of foliage behind the hero. Feature cards sit in a slightly darker green panel, each with a small icon and an arrow link. The palette is limited to deep green and pale cream-green, with soft glow shapes adding depth.

**Mood:** natural, calm, deep, gentle, muted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c3a13` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#e9f0ca` | Headings and primary copy |
| Muted text | `#5a6b57` | Secondary copy, captions |
| Border | `#f5f5f0` | Hairlines, dividers, outlines |
| Accent | `#1c3a13` | Primary action and highlights |
| Second accent | `#e9f0ca` | Supporting highlights |

Palette by frequency of use: `#1c3a13` · `#e9f0ca` · `#f2f4e6` · `#ffffff` · `#6b8e23` · `#5a6b57` · `#f5f5f0` · `#000000` · `#2d5016` · `#8fa876`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[#1C3A13]/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative overflow-hidden bg-[#1C3A13] text-[#E9F0CA] px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#2D5016] transition-all duration-300 hover:shadow-lg hover:shadow-[#1C3A13]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Benefits (`benefits`)
5. Modal / overlay (`modal-overlay`)
6. Cart / checkout (`cart-checkout`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c3a13;
  --color-surface: #ffffff;
  --color-text: #e9f0ca;
  --color-muted: #5a6b57;
  --color-border: #f5f5f0;
  --color-accent: #1c3a13;
  --color-accent-2: #e9f0ca;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c3a13',
    surface: '#ffffff',
    ink: '#e9f0ca',
    muted: '#5a6b57',
    line: '#f5f5f0',
    accent: '#1c3a13',
    accent2: '#e9f0ca',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in pale green (#e9f0ca) on the deep green ground (#1c3a13)
- **Do:** Keep feature cards as rounded panels with a small icon and an arrow
- **Do:** Use the pale green as the only text accent
- **Don't:** Don't put light cards on the green ground
- **Don't:** Don't add bright colours beyond the green palette
- **Don't:** Don't set body copy at low contrast on the green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
