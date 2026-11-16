# Design system — Islamic Book Landing Page Template

`SN-W01191` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, traditional stance: a cream page, an olive-green book cover as the hero object, and a gold button as the one bright note. The headline is a classic serif set large, with the second line in a lighter italic in the olive tone, and an Arabic title line sits above it in gold. Generous space and a single product image keep it calm and devotional.

**Mood:** devotional, calm, traditional, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f4` | Page ground |
| Surface | `#f0eee6` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#5f6b50` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |

Palette by frequency of use: `#c5a059` · `#333333` · `#5f6b50` · `#000000` · `#f9f8f4` · `#ffffff` · `#f0eee6` · `#e5e5e5` · `#b08d4b` · `#4a543f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Amiri, Cinzel, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-gold/20`
- **Content width:** `max-w-[200px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-16`, `gap-24`

**Primary button**

```html
<a class="bg-charcoal text-white px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f4;
  --color-surface: #f0eee6;
  --color-text: #333333;
  --color-muted: #5f6b50;
  --color-border: #000000;
  --color-accent: #c5a059;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f4',
    surface: '#f0eee6',
    ink: '#333333',
    muted: '#5f6b50',
    line: '#000000',
    accent: '#c5a059',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#c5a059) only for the primary call to action and the Arabic title line.
- **Do:** Set the main headline in a serif, with the second line in italic olive (#5f6b50).
- **Do:** Keep the cream background (#f9f8f4) under the hero copy and place the product on a flat olive panel.
- **Don't:** Don't use bright or saturated colours; the page stays in cream, olive and gold.
- **Don't:** Don't set the headline in a sans-serif; the serif is part of the devotional tone.
- **Don't:** Don't crowd the hero with badges or icons; keep only copy, a button and the product.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
