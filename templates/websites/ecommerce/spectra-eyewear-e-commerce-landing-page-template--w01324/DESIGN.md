# Design system — Spectra Eyewear E-commerce Landing Page Template

`SN-W01324` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A light, airy eyewear page on a cool pale slate ground (#f1f5f9), with dark navy serif headlines and one italic phrase in clear blue (#3b82f6). The blue appears as the italic word and as a thin frame around the product image, so the colour reads as a line rather than a fill. A black pill and an outlined pill split the two shop actions, keeping the hierarchy simple.

**Mood:** airy, crisp, refined, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#3b82f6` · `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#475569` · `#f1f5f9` · `#94a3b8` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, black
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-300 shadow-lg shadow-slate-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Process / steps (`how-it-works`)
7. About (`about`)
8. FAQ (`faq`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #3b82f6;
  --color-accent-2: #facc15;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#3b82f6',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a high-contrast serif and the highlight phrase in italic blue (#3b82f6)
- **Do:** Frame the product image with a thin blue border on the pale slate ground
- **Do:** Use a black pill for the main action and an outlined pill for the second
- **Don't:** Don't set body copy in the serif; Inter is for paragraphs and labels
- **Don't:** Don't fill large sections with the blue; it is a line and highlight colour
- **Don't:** Don't add heavy shadows around the product frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
