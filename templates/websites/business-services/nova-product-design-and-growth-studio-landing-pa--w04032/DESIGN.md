# Design system — NOVA Product Design & Growth Studio Landing Page Template

`SN-W04032` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light product-studio page with an off-white ground and dark ink headlines in a grotesque sans-serif. One clause of each headline is set in italic serif, which adds an editorial voice. The right side holds a large mint-to-green gradient panel with a dark data card, making green the single strong colour on the page.

**Mood:** modern, editorial, fresh, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#262626` · `#e5e5e5` · `#d1fae5` · `#059669` · `#737373` · `#404040` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="mt-8 w-full inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-900 px-6 py-3 text-sm font-medium hover:bg-emerald-200 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Dashboard preview (`dashboard-preview`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #059669;
  --color-accent-2: #9333ea;
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
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#059669',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one clause of each headline in italic serif
- **Do:** Use mint-to-green gradients only behind dashboard panels
- **Do:** Keep primary buttons in dark ink (#171717) with rounded corners
- **Don't:** Don't use purple anywhere on the page
- **Don't:** Don't place more than one gradient in a view
- **Don't:** Don't place the dark data card without the mint panel behind it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
