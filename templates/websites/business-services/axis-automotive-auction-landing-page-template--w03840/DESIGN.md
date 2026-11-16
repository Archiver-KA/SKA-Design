# Design system — Axis Automotive Auction Landing Page Template

`SN-W03840` · business-services · dark mode · Sinera Atlas theme `route` · language `ru`

## Direction

A dark, photographic hero: a darkened forest-toned photograph of a car sits behind a large white sans-serif headline, and its middle phrase is set in pale green (#86efac). Frosted, translucent cards on the right show auction figures, a countdown and a lot panel, so the interface reads as a live dashboard layered over the image. The blur on those panels is what separates the content from the photograph.

**Mood:** luxurious, dark, live, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0d` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f2f0ec` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#86efac` | Primary action and highlights |
| Second accent | `#d8b27a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f2f0ec` · `#d8b27a` · `#000000` · `#0a0a0d` · `#86efac` · `#c4b5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 24px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-[0_8px_40px_rgba(129,140,248,0.25)]`, `shadow-[0_0_40px_8px_rgba(129,140,248,0.35)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 rounded-full bg-[#F2F0EC] px-7 py-3.5 text-sm font-medium text-[#0A0A0D] shadow-lg transition hover:bg-white sm:px-8 sm:py-4">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0d;
  --color-surface: #000000;
  --color-text: #f2f0ec;
  --color-border: #ffffff;
  --color-accent: #86efac;
  --color-accent-2: #d8b27a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0d',
    surface: '#000000',
    ink: '#f2f0ec',
    line: '#ffffff',
    accent: '#86efac',
    accent2: '#d8b27a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline phrase in pale green (#86efac) only.
- **Do:** Layer frosted translucent cards with auction figures over the photograph.
- **Do:** Keep the photograph darkened so the white headline reads clearly.
- **Don't:** Don't use green for body copy or large areas.
- **Don't:** Don't put a bright photograph behind the headline.
- **Don't:** Don't remove the blur from the glass panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
