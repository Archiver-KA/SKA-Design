# Design system — Candle d’Ange E-commerce Landing Page Template

`SN-W01118` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A warm French candle shop that opens on a full-bleed photograph of lit jars in brown and cream tones. The hero headline is a large light sans-serif in white, with the second word set in a pale rose italic, so the contrast between the two styles carries the mood. The navigation is thin and centred over the photograph, and the page keeps a feminine, quiet feel.

**Mood:** warm, feminine, quiet, artisanal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffbfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffe4e6` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#fff1f2` · `#ffe4e6` · `#fb7185` · `#881337` · `#f43f5e` · `#e11d48` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-rose-50 transition-all shadow-xl shadow-black/5 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fffbfc;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #ffe4e6;
  --color-accent: #fb7185;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffbfc',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#ffe4e6',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lead the hero with a full-bleed photograph of the product
- **Do:** Set the second headline word in a pale rose italic against the sans-serif first word
- **Do:** Keep the navigation thin and set over the photograph
- **Don't:** Don't place body copy on a busy photo without a dark overlay
- **Don't:** Don't introduce saturated colour; keep to cream, brown and rose
- **Don't:** Don't fill the header with a solid bar that hides the hero image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
