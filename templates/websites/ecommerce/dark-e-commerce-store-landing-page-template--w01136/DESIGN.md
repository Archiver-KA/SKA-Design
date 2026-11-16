# Design system — Dark E-commerce Store Landing Page Template

`SN-W01136` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A black and white store page sits on a near-black ground, with a bold sans-serif headline in white where the last phrase fades to grey. The hero is split: copy on the left and a tall grayscale fashion photograph on the right. Buttons are white and dark grey, and with no colour on the page the product photography and type carry the look.

**Mood:** monochrome, editorial, minimal, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#050505` · `#111111` · `#6366f1` · `#ef4444` · `#333333` · `#555555` · `#fca5a5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[400px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="group px-8 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-sm hover:bg-white/90 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Pricing (`pricing`)
5. Call to action (`cta`)
6. Timeline (`timeline`)
7. Testimonials (`testimonials`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e7eb',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif in white, with the last phrase in grey
- **Do:** Use a tall grayscale photograph on the right of the hero
- **Do:** Keep the primary button white with dark text and the secondary in outline
- **Don't:** Don't introduce an accent colour; the page is black, white and grey.
- **Don't:** Don't set the hero on a light background
- **Don't:** Don't round the photograph's corners; it has square edges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
