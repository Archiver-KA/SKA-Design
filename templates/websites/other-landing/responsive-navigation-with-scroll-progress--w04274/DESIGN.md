# Design system — Responsive Navigation with Scroll Progress

`SN-W04274` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black landing page with a large white sans headline and a thin teal line along the top edge that works as a scroll progress indicator. Teal (#2dd4bf) fills the primary button beside a dark translucent secondary button. A dark product frame on the right carries floating metric cards, so text on the left balances a product view on the right.

**Mood:** sharp, dark, precise, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |
| Second accent | `#e879f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#9ca3af` · `#5eead4` · `#d1d5db` · `#f3f4f6` · `#2dd4bf` · `#1f2937` · `#111827` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, &quot
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D, Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
  --color-accent-2: #e879f9;
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
    accent: '#2dd4bf',
    accent2: '#e879f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Run a thin teal line along the top edge of the page as the scroll indicator
- **Do:** Use teal (#2dd4bf) for the primary button and the progress line only
- **Do:** Set headlines large in Inter, with the lead paragraph in light grey
- **Don't:** Don't use teal for body copy or large fills
- **Don't:** Don't place the hero on a light background
- **Don't:** Don't remove the product frame from the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
