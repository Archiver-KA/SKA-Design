# Design system — Gourmet Spices E-commerce Landing Page Template

`SN-W01176` · ecommerce · dark mode · Sinera Atlas theme `market` · language `es`

## Direction

A dark, warm spice-shop hero on charcoal (#1c1c1c), with a beige header bar (#e3dccf) above it. The headline is a large serif in white, and its second line is set in italic terracotta (#b85c38), the same colour as the primary button. A thin outlined pill above the headline carries the heritage line in small uppercase, and the page is more artisan than commercial.

**Mood:** warm, heritage, artisan, rich

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1c1c` | Page ground |
| Surface | `#e3dccf` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#7a8c6e` | Secondary copy, captions |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |
| Accent | `#b85c38` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1c1c` · `#b85c38` · `#f9f5ee` · `#efe9df` · `#7a8c6e` · `#f3f4f6` · `#e3dccf` · `#e5e7eb` · `#a34f2f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[3px]` (3px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(184,92,56,0.2)]`, `shadow-sm`, `shadow-[10px_10px_30px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-[#B85C38] hover:bg-[#A34F2F] text-white text-sm font-medium px-8 py-3.5 rounded-[3px] transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1c1c;
  --color-surface: #e3dccf;
  --color-text: #ffffff;
  --color-muted: #7a8c6e;
  --color-border: #1c1c1c;
  --color-accent: #b85c38;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1c1c',
    surface: '#e3dccf',
    ink: '#ffffff',
    muted: '#7a8c6e',
    line: '#1c1c1c',
    accent: '#b85c38',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Cormorant Garamond, white for the first line and italic terracotta (#b85c38) for the second.
- **Do:** Use terracotta (#b85c38) for the primary button and the italic emphasis, and nothing else.
- **Do:** Keep the header bar on beige (#e3dccf) with a spaced wordmark and small navigation.
- **Don't:** Don't place light text on the beige header; it has to stay dark.
- **Don't:** Don't set body copy in terracotta; body copy is light on charcoal.
- **Don't:** Don't drop the outlined pill above the headline; it carries the heritage line.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
