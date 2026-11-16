# Design system — Email Magnet Shopify Landing Page Template

`SN-W01147` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark product page on near-black, with soft blurred glows of green and warm orange behind the hero. The headline is bold white sans-serif, with the second phrase in grey, and two buttons sit below it: a solid white primary and a plain outlined secondary. A dark editor panel under the hero previews the product, so the page sells through a demonstration rather than imagery.

**Mood:** glowing, demonstrative, dark, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000a0c` | Page ground |
| Surface | `#000a0c` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#f5be10` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#009e73` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#000a0c` · `#071119` · `#374151` · `#005a3d` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2.5 rounded-3xl text-sm font-semibold hover:bg-gray-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Bento grid (`bento-grid`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000a0c;
  --color-surface: #000a0c;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #f5be10;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000a0c',
    surface: '#000a0c',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#f5be10',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans-serif, with the second phrase in grey
- **Do:** Keep the soft green and orange glows behind the hero at low intensity
- **Do:** Show the product as a dark editor panel under the hero buttons
- **Don't:** Don't use yellow (#f5be10) for buttons; the primary button is white
- **Don't:** Don't brighten the glows so they compete with the headline
- **Don't:** Don't put light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
