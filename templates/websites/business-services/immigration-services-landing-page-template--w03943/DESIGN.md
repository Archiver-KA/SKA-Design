# Design system — Immigration Services Landing Page Template

`SN-W03943` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, minimal visual system that sets all text in Inter, using weight and size alone for hierarchy. The hero shows a soft grey gradient meeting a pale curved edge, which suggests smooth, layered surfaces rather than hard lines. A warm copper accent (#c8956c) is used sparingly for highlights, which keeps the page calm and modern.

**Mood:** minimal, soft, modern, calm, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#c9d0da` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8956c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#c8956c` · `#f3f4f6` · `#374151` · `#1f2937` · `#d1d5db` · `#e5e7eb` · `#4b5563` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, Noto Sans Arabic
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-gray-300/60`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-3 text-sm font-medium text-gray-900 bg-white rounded-full pl-8 pr-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden isolate">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #c9d0da;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #374151;
  --color-border: #ffffff;
  --color-accent: #c8956c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#c9d0da',
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#374151',
    line: '#ffffff',
    accent: '#c8956c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set all text in Inter, using weight and size for hierarchy
- **Do:** Use the copper (#c8956c) accent sparingly for highlights
- **Do:** Keep hero surfaces soft, with gradients and curved edges rather than hard dividers
- **Don't:** Don't add a second typeface
- **Don't:** Don't use the copper accent for large background areas
- **Don't:** Don't use hard-edged dividers between sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
