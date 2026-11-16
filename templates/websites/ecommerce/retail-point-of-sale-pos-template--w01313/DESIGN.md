# Design system — Retail Point of Sale (POS) Template

`SN-W01313` · ecommerce · light mode · Sinera Atlas theme `market` · language `fa`

## Direction

A right-to-left point-of-sale screen built as a two-column workspace: an invoice panel on one side and a grid of product cards with thumbnails on the other. The ground is pale slate with white surfaces and thin borders, and deep purple (#4d3772) marks the main payment action and the active category chip. Vazirmatn sets all the text, so hierarchy comes from weight and spacing rather than from colour or display type.

**Mood:** utilitarian, orderly, quiet, fast to scan

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4d3772` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#4d3772` · `#ffffff` · `#e2e8f0` · `#f1f5f9` · `#475569` · `#1e293b` · `#94a3b8` · `#64748b` · `#f8fafc` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Vazirmatn
- **Body:** Vazirmatn
- **Loaded families:** Vazirmatn
- **Scale (largest breakpoint):** h1 20px · h3 14px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-[#4D3772]/30`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-5 py-2 rounded-lg text-sm font-medium transition-colors bg-[#4D3772] text-white shadow-sm shadow-[#4D3772]/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #4d3772;
  --color-accent-2: #e2e8f0;
  --font-display: "Vazirmatn", sans-serif;
  --font-body: "Vazirmatn", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#4d3772',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Vazirmatn'], sans: ['Vazirmatn'] },
} }
```

## Do and don't

- **Do:** Set the layout right-to-left and mirror the invoice and product panels
- **Do:** Use deep purple (#4d3772) only for the payment action and the active category chip
- **Do:** Set all text in Vazirmatn and use weight and spacing for hierarchy
- **Don't:** Don't use purple for large fills or decorative panels
- **Don't:** Don't reverse the digits of prices or totals; keep numbers in their normal order
- **Don't:** Don't add ornament to product cards; the thumbnails carry the visual weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
