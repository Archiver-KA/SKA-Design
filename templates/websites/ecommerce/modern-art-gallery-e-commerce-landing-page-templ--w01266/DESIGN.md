# Design system — Modern Art Gallery E-commerce Landing Page Template

`SN-W01266` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A gallery-style hero on near-white with a large serif headline stacked over four lines, where the middle phrase That Transforms is set in grey italic. A dark slate solid button sits beside a thin outlined one, and the nav is a small serif wordmark with plain sans links. The palette is slate and off-white, so the hero rests on type alone.

**Mood:** gallery, quiet, classic, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#c5a065` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#94a3b8` · `#1e293b` · `#f8fafc` · `#e2e8f0` · `#475569` · `#cbd5e1` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-8 py-4 bg-slate-900 text-slate-50 text-sm tracking-widest uppercase hover:bg-accent-600 transition-colors duration-300 text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Listings (`listings`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #1e293b;
  --color-accent-2: #c5a065;
  --font-display: "Playfair Display", serif;
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
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#1e293b',
    accent2: '#c5a065',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the middle phrase in grey italic
- **Do:** Use dark slate (#1e293b) for the solid button and keep the outlined button thin
- **Do:** Keep the nav to a small serif wordmark and sans links
- **Don't:** Don't add a colour accent; the page is slate on off-white
- **Don't:** Don't set the headline in bold
- **Don't:** Don't fill the hero with colour blocks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
