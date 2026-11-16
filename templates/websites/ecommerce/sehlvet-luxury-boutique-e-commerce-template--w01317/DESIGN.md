# Design system — Sehlvet Luxury Boutique E-commerce Template

`SN-W01317` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, romantic boutique page on a pale rose ground (#fecdd3) that fades to white. The headline is a large, high-contrast serif (Cormorant Garamond) in near-black, and the one italic word 'Sarees' carries a rose-to-amber gradient as the only expressive colour. Navigation and buttons stay small and restrained, with a near-black primary button anchoring the hero.

**Mood:** romantic, elegant, soft, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fecdd3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e11d48` · `#111827` · `#f43f5e` · `#fecdd3` · `#6b7280` · `#1f2937` · `#e5e7eb` · `#f3f4f6` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-rose-200`, `shadow-2xl`
- **Content width:** `max-w-[95%]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="magnetic-wrap px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 transition-colors font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fecdd3;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e11d48;
  --color-accent-2: #f59e0b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fecdd3',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e11d48',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, with one italic word per headline
- **Do:** Use the rose-to-amber gradient only on the highlighted headline word
- **Do:** Keep the ground pale rose (#fecdd3) fading to white, with near-black buttons
- **Don't:** Don't set body copy in the serif; Inter handles paragraphs, labels and buttons
- **Don't:** Don't put the gradient on buttons or icons; it belongs to the headline
- **Don't:** Don't crowd the hero; the large serif needs open space around it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
