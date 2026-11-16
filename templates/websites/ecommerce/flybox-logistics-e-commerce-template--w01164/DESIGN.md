# Design system — Flybox Logistics E-commerce Template

`SN-W01164` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A logistics landing page on a white ground with near-black headlines in bold uppercase sans. Red (#dc2626) does the emphasis work: it colours the key words in the headline, the primary button and the active nav item. Hero copy is short and direct, set beside a large warehouse photograph with a dark circular stat badge overlapping its edge.

**Mood:** direct, logistic, bold, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#dc2626` · `#ffffff` · `#111827` · `#6b7280` · `#000000` · `#9ca3af` · `#f3f4f6` · `#f9fafb` · `#f87171` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Awards / press (`awards-press`)
6. Product grid (`product-grid`)
7. About (`about`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #dc2626;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#dc2626',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour only the key words of a headline in red (#dc2626), not whole lines.
- **Do:** Use the solid red button for the primary action and a white outline for the secondary.
- **Do:** Keep headlines in bold uppercase Inter and body copy in sentence case.
- **Don't:** Don't use the yellow (#facc15) for text or buttons; it marks small stat accents only.
- **Don't:** Don't set the headline in a serif; the family is Inter throughout.
- **Don't:** Don't use red for large section backgrounds; it is for emphasis.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
