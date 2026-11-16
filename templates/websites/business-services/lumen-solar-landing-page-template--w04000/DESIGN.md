# Design system — Lumen Solar Landing Page Template

`SN-W04000` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A minimal, light solar page on an off-white ground. The large black sans-serif headline has one italic phrase, and a small yellow eyebrow line carries the energy theme. Black buttons keep the calls to action firm, while the yellow stays in small accents such as the logo mark and the eyebrow.

**Mood:** minimal, bright, clean, optimistic, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#f3f4f6` · `#facc15` · `#4b5563` · `#1f2937` · `#e5e7eb` · `#f9fafb` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-yellow-400 text-gray-900 text-lg font-medium hover:bg-yellow-300 transition-colors w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Stats band (`stats`)
7. Product grid (`product-grid`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #facc15;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#facc15',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#facc15) only for small accents such as eyebrow lines and the logo
- **Do:** Set the headline in black, large and tight, with one italic phrase
- **Do:** Keep the primary button solid black with white text
- **Don't:** Don't set body copy in yellow on light backgrounds
- **Don't:** Don't add more than one italic phrase per headline
- **Don't:** Don't set the hero on a dark background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
