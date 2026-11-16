# Design system — React Pro Course Landing Page Template

`SN-W03525` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, technical course page on pure black (#000000) with a large white headline in Inter and short grey supporting copy. The hero pairs the text with a dark code-preview panel and small stat tiles, and the primary and secondary buttons are both dark grey pills with white labels. Colour is almost absent, so the page reads as a serious developer product.

**Mood:** technical, sober, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#5eead4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#e5e7eb` · `#5eead4` · `#d1d5db` · `#f3f4f6` · `#60a5fa` · `#93c5fd` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #5eead4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#5eead4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size in white, with short grey supporting copy
- **Do:** Keep primary and secondary buttons as dark grey pills with white labels
- **Do:** Show code and metrics inside dark, rounded preview panels with small stat tiles
- **Don't:** Don't add bright gradients or colourful illustrations to the hero
- **Don't:** Don't set body copy in pure white
- **Don't:** Don't use square buttons or sharp panel corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
