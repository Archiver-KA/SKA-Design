# Design system — Modular Sofa Product Page Template

`SN-W01268` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A functional product page on white, with a black solid add-to-cart button as the primary action beside a short sans product title and a struck-through original price. A dark green strip runs across the top. Colour sits in the material swatches on the right, so the interface stays neutral.

**Mood:** functional, clean, catalogue, warm-neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#78593d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f3f4f6` · `#000000` · `#64748b` · `#020617` · `#1e293b` · `#e5e5e5` · `#0f172a` · `#475569` · `#5475f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 42px · h3 16px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-blue-500/20`
- **Content width:** `max-w-[1500px]`, `max-w-[1400px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="hover:bg-[#4365FF] shadow-blue-500/20 transition-all active:scale-[0.98] font-medium text-white bg-slate-950 w-full rounded-full px-6 py-3.5 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #64748b;
  --color-border: #f3f4f6;
  --color-accent: #1e293b;
  --color-accent-2: #78593d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#64748b',
    line: '#f3f4f6',
    accent: '#1e293b',
    accent2: '#78593d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the add-to-cart button a solid black block with white text
- **Do:** Show finishes as small colour swatches and let them carry the colour
- **Do:** Keep the product title in sans with the price below and the original struck through
- **Don't:** Don't use a peach ground; the page is white
- **Don't:** Don't use a brown text colour; the title is black
- **Don't:** Don't add colour to the interface outside the swatches and the sale link

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
