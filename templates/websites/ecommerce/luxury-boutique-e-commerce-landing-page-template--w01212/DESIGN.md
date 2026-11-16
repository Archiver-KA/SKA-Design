# Design system — Luxury Boutique E-commerce Landing Page Template

`SN-W01212` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A romantic, celebratory stance: a white page washed with blush pink at the top right and warm yellow at the bottom left. The headline is a large serif in near-black, and its italic middle word is a rose-to-amber gradient. Pill buttons pair a solid near-black primary with a white secondary, and a small rose badge sets the seasonal tone.

**Mood:** romantic, celebratory, airy, warm

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

- **Do:** Set the italic headline word with a rose-to-amber gradient (#e11d48 to #f59e0b).
- **Do:** Use the blush wash only as a background gradient, never as a solid block.
- **Do:** Use the near-black pill for the primary button and a white pill for the secondary.
- **Don't:** Don't set body copy over the pink wash; the copy sits on white.
- **Don't:** Don't set the headline in a sans-serif; the serif is the signature.
- **Don't:** Don't put the gradient on buttons; it is for the headline word only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
