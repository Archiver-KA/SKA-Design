# Design system — Travel Rewards SaaS Landing Page Template

`SN-W03151` · travel · light mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

A sales-led educational page on white, with navy headlines set tight in a bold sans. The second phrase of the headline drops to a lighter grey (#94a3b8), which separates the claim from its support. A dark navy card sits under the copy as the product block, and the page relies on navy against white rather than on colour.

**Mood:** direct, sales-led, clean, bold, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fee2e2` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0a2540` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0a2540` · `#f97316` · `#334155` · `#e2e8f0` · `#94a3b8` · `#475569` · `#fee2e2` · `#ef4444` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-3xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full block bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Comparison (`comparison`)
4. Product grid (`product-grid`)
5. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fee2e2;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0a2540;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fee2e2',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0a2540',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold sans in navy (#0a2540), tightly leaded
- **Do:** Drop the second headline phrase into lighter grey (#94a3b8) for contrast
- **Do:** Use one dark navy card as the product block under the copy
- **Don't:** Don't use the orange (#f97316) as a headline colour
- **Don't:** Don't add decorative gradients to the headlines
- **Don't:** Don't set body copy in navy at the same weight as the headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
