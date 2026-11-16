# Design system — Luxury E-commerce Landing Page Template

`SN-W01214` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold, high-contrast stance: a near-black hero with a very large uppercase grotesque headline in white, set on three lines. The one colour is a muted gold (#c9a96e) on the primary button and the support bubble, and small grey copy sits under the button. The layout is flat and tight, with a clean top navigation in small caps.

**Mood:** bold, high-contrast, stark, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#c9a96e` · `#9ca3af` · `#6b7280` · `#f3f4f6` · `#d1d5db` · `#e5e7eb` · `#000000` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#C9A96E] text-[#0A0A0A] uppercase tracking-widest text-xs font-medium py-4 px-10 rounded-full hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. 3D / canvas scene (`3d-canvas`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Comparison (`comparison`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #f3f4f6;
  --color-accent: #c9a96e;
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
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#f3f4f6',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif at display size, in white, on three lines.
- **Do:** Use the muted gold (#c9a96e) for the primary button and the support bubble only.
- **Do:** Keep the payment and shipping note small and grey under the call to action.
- **Don't:** Don't use the light page ground (#fafafa) for the hero; keep it near-black.
- **Don't:** Don't add a second accent colour; gold is the only one.
- **Don't:** Don't set the headline in a serif; keep it sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
