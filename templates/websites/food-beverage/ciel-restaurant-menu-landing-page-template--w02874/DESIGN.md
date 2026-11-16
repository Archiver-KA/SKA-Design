# Design system — CIEL Restaurant Menu Landing Page Template

`SN-W02874` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm, typographic menu on a warm cream ground (#fdfcf8). The page heading is a serif set large in dark brown (#3e2723), with section titles on a thin rule, item names in sans and small descriptions beneath. Veg and non-veg are marked with small green and red dots rather than coloured text, so colour stays functional and the page remains brown and cream. Prices sit right-aligned on the item line.

**Mood:** calm, typographic, warm, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Text | `#3e2723` | Headings and primary copy |
| Muted text | `#5d4037` | Secondary copy, captions |
| Border | `#3e2723` | Hairlines, dividers, outlines |
| Accent | `#3e2723` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#5d4037` · `#3e2723` · `#16a34a` · `#dc2626` · `#8d6e63` · `#d84315` · `#fdfcf8` · `#bcaaa4` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#3E2723] text-[#FDFCF8] px-5 py-2.5 rounded-full text-lg font-medium hover:bg-[#5D4037] transition-all shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-text: #3e2723;
  --color-muted: #5d4037;
  --color-border: #3e2723;
  --color-accent: #3e2723;
  --color-accent-2: #dc2626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    ink: '#3e2723',
    muted: '#5d4037',
    line: '#3e2723',
    accent: '#3e2723',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set section headings in the dark brown serif (#3e2723) on a thin rule
- **Do:** Use small green and red dots to mark veg and non-veg, not coloured text
- **Do:** Set each item price right-aligned on the same line as its name
- **Don't:** Don't use the green or red dots for decoration
- **Don't:** Don't set menu descriptions in the serif
- **Don't:** Don't use a light brown for body text on the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
