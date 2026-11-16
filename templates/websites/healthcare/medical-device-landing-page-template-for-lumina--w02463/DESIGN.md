# Design system — Medical Device Landing Page Template for Lumina TFL System

`SN-W02463` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clinical white page with a large black sans headline, its second line set in mid grey, and a single red (#dc2626) pill as the primary action. Red is the only colour and appears on the main button and a small status badge, so the page reads as austere and precise. Generous white space and a centred layout give the device the stage.

**Mood:** clinical, austere, precise, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#737373` · `#ffffff` · `#000000` · `#a3a3a3` · `#dc2626` · `#171717` · `#f5f5f5` · `#e5e5e5` · `#fafafa` · `#fef2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-red-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #dc2626;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#dc2626',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) only for the primary button and the status badge
- **Do:** Set the headline in heavy black sans, with the second line in grey
- **Do:** Centre the hero and keep generous white space above and below it
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use red for body text or links
- **Don't:** Don't add more than the faint red glow behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
