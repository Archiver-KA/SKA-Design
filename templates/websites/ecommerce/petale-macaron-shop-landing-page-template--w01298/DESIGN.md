# Design system — Pétale Macaron Shop Landing Page Template

`SN-W01298` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, confectionery product page on near-white (#fafafa) with near-black headings (#171717) and a rose (#f43f5e) add-to-cart button. The product band is tinted pale pink, the macaron photograph sits in a flat square frame, and pack sizes are outlined cards with a radio mark on the selected one. Rose appears only on actions and selection, so the page stays calm.

**Mood:** sweet, soft, polished, playful, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#171717` · `#525252` · `#f43f5e` · `#404040` · `#f5f5f5` · `#fafafa` · `#737373` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 36px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[260px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white px-5 py-3 text-sm font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #f43f5e;
  --color-accent-2: #f59e0b;
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
    accent: '#f43f5e',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use rose (#f43f5e) for the add-to-cart button and the selected option only
- **Do:** Frame product photographs as flat squares with no shadow
- **Do:** Show pack sizes as outlined cards with a radio mark on the selected one
- **Don't:** Don't use rose for headings or body text
- **Don't:** Don't round the product photograph frame; it is square
- **Don't:** Don't add amber (#f59e0b) highlights.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
