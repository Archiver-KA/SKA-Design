# Design system — Eco-Friendly Cleaning Subscription Landing Page Template

`SN-W03881` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, product-led cleaning page on a near-black ground, with a bright green primary button and a white product card floating over a dark panel on the right. Headlines are large, bold white sans-serif, and the brand name carries green in the header. Small pill tags and plan labels stay quiet, and the green is kept for the main action and the logo.

**Mood:** dark, clean, fresh, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#16a34a` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#171717` · `#d4d4d4` · `#525252` · `#4ade80` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-green-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 bg-[#16a34a] text-white text-sm font-medium px-6 py-3.5 rounded-lg hover:bg-[#15803d] transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Pricing (`pricing`)
5. Map / location (`map-location`)
6. Listings (`listings`)
7. Feature grid (`features`)
8. Call to action (`cta`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #16a34a;
  --color-accent-2: #38bdf8;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#16a34a',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a near-black ground and set headlines in heavy white sans-serif
- **Do:** Use the green (#16a34a) for the primary button and the logo mark only
- **Do:** Show the product on a white card floating over a dark panel
- **Don't:** Don't set the page on a light background; the dark ground defines the brand
- **Don't:** Don't use the green for body text; it stays on actions and the logo
- **Don't:** Don't add a second solid button colour beside the primary green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
