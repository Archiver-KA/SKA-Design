# Design system — GlowMist Skincare E-commerce Landing Page Template

`SN-W01175` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A skincare page on a near-white ground has a soft rose wash behind the hero. The headline pairs a regular-weight serif line with an italic rose second line, and the primary button is a deep maroon (#9f1239) pill. Large pale rounded panels and a small floating product card add softness, so the type reads as editorial while the palette stays calm.

**Mood:** soft, editorial, calm, feminine

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#9f1239` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#292524` · `#ffffff` · `#9f1239` · `#78716c` · `#a8a29e` · `#fafaf9` · `#f5f5f4` · `#e7e5e4` · `#e11d48` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-glow`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-rose-900 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-800 transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #9f1239;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#9f1239',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif, with the second line in italic rose.
- **Do:** Use the deep maroon (#9f1239) for the primary button and keep the secondary as a light outline.
- **Do:** Keep the rose wash behind the hero and use a pale rounded panel for the product image.
- **Don't:** Don't use the maroon for large fills; it is for buttons and italic emphasis.
- **Don't:** Don't set the headline in a heavy weight; the serif is light and open.
- **Don't:** Don't add a green accent to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
