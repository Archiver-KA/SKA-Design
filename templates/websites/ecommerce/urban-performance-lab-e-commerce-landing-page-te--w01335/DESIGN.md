# Design system — Urban Performance Lab E-commerce Landing Page Template

`SN-W01335` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

An editorial sportswear page on white, with a heavy, tightly leaded display headline in near-black and a small tracked grey eyebrow above it. The right half is a large dark monochrome photograph of a sneaker, which supplies the only tonal contrast on the first screen. Buttons are a solid near-black block and a pale grey block, and no colour appears in the hero.

**Mood:** editorial, monochrome, athletic, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#737373` · `#ffffff` · `#f5f5f5` · `#e5e5e5` · `#171717` · `#a3a3a3` · `#262626` · `#fafafa` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="hidden sm:block bg-black text-white px-4 py-2 rounded text-xs font-medium hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy, tightly leaded display type in near-black (#171717)
- **Do:** Use a small grey tracked eyebrow above each headline
- **Do:** Place large monochrome product photography on the right, filling its column
- **Don't:** Don't add an accent colour to the hero; the page is monochrome
- **Don't:** Don't set body copy in the display face; use the sans for paragraphs
- **Don't:** Don't use a coloured button; the black and pale grey pair is the system

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
