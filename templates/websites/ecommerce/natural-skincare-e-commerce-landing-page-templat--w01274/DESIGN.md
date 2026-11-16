# Design system — Natural Skincare E-commerce Landing Page Template

`SN-W01274` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, editorial skincare page on a white ground with dark brown-grey type (#2d2b2a) and a thin announcement bar at the top. Section titles are set in a light serif at large size, which gives a calm spa tone. Product photography and beige image panels (#e8e4db) do most of the work, with breadcrumbs and generous margins around them.

**Mood:** warm, spa-like, editorial, calm, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#2d2b2a` | Cards, panels, raised areas |
| Text | `#2d2b2a` | Headings and primary copy |
| Muted text | `#2d2b2a` | Secondary copy, captions |
| Border | `#e8e4db` | Hairlines, dividers, outlines |
| Accent | `#c19a5b` | Primary action and highlights |

Palette by frequency of use: `#2d2b2a` · `#c67d63` · `#ffffff` · `#e8e4db` · `#6a6662` · `#8b857d` · `#c19a5b` · `#a39e97` · `#faf8f5` · `#d1ceca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 24px · body 18px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 rounded-full border border-[#D1CECA] bg-white text-sm text-[#2D2B2A] font-light hover:border-[#C67D63] hover:text-[#C67D63] transition-colors flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #2d2b2a;
  --color-text: #2d2b2a;
  --color-muted: #2d2b2a;
  --color-border: #e8e4db;
  --color-accent: #c19a5b;
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
    surface: '#2d2b2a',
    ink: '#2d2b2a',
    muted: '#2d2b2a',
    line: '#e8e4db',
    accent: '#c19a5b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set page headings in a light serif at large size in #2d2b2a
- **Do:** Keep image panels in the beige #e8e4db with the product photo inside
- **Do:** Use the announcement bar for shipping offers only, in one muted tone
- **Don't:** Don't use the terracotta (#c67d63) as a page background
- **Don't:** Don't set headings in a heavy sans-serif; the look depends on the light serif
- **Don't:** Don't add gradients or glow shapes; this design stays flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
