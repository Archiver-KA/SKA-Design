# Design system — Luxury Perfume E-commerce Landing Page Template

`SN-W01235` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A photo-led editorial hero: a full-bleed glass perfume bottle against pale pink roses, with a black serif headline whose last word is italic. Small tracked caps sit above the headline and a square black button sits below. The interface is black on white with no accent, so the photograph supplies the colour.

**Mood:** editorial, photographic, soft, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f4ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#5d5d5a` | Secondary copy, captions |
| Border | `#5d5d5a` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#def1d0` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#cbceea` · `#5d5d5a` · `#f5f4ed` · `#f8e5e5` · `#def1d0` · `#cdebf1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-6 py-2 text-xs uppercase tracking-widest rounded-full hover:bg-[#CBCEEA]/20 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. About (`about`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f4ed;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #5d5d5a;
  --color-border: #5d5d5a;
  --color-accent: #000000;
  --color-accent-2: #def1d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f4ed',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#5d5d5a',
    line: '#5d5d5a',
    accent: '#000000',
    accent2: '#def1d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Let the product photograph supply the colour; keep the interface black and white
- **Do:** Set headlines in a high-contrast serif with the last word in italic
- **Do:** Use small uppercase tracked labels above each headline
- **Don't:** Don't add a coloured accent to buttons or links
- **Don't:** Don't use rounded pill buttons; the button is a square black block
- **Don't:** Don't overlay text on the bottle image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
