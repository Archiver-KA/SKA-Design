# Design system — Commercial Oven Manufacturer Landing Page Template

`SN-W03869` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, product-led manufacturer page on white with a heavy black sans-serif headline and a red primary button (#dc2626). Secondary actions sit as light outlined buttons beside it, and a large dark product card with a model name anchors the right half. Small trust badges sit under the copy, and colour is kept to the one red action.

**Mood:** clean, industrial, direct, bold, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#525252` · `#000000` · `#f5f5f5` · `#dc2626` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-red-500/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm shadow-red-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Logo cloud (`logo-cloud`)
8. About (`about`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #dc2626;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#dc2626',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button red (#dc2626) and use that red for no other action
- **Do:** Set headlines in heavy black sans-serif at a large size
- **Do:** Show products on a large dark card with the model name in white text
- **Don't:** Don't use red for headings or large backgrounds; it signals action only
- **Don't:** Don't enlarge the trust badges into blocks; they stay small under the copy
- **Don't:** Don't place the product panel on a light tint; the dark card carries the contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
