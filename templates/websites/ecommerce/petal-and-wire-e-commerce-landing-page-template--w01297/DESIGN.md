# Design system — Petal & Wire E-commerce Landing Page Template

`SN-W01297` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A refined boutique page on white, with warm-grey text (#292524) and a large Inter headline. The middle phrase is set in a pink italic, which is the page's single warm accent. A pale peach pill tags the eyebrow line, and the product photograph sits in a large rounded card with a small name and price caption over its corner.

**Mood:** refined, boutique, soft, romantic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#57534e` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#fafaf9` · `#d6d3d1` · `#292524` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Logo cloud (`logo-cloud`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafaf9;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ffedd5;
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
    surface: '#fafaf9',
    ink: '#292524',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle headline phrase in pink italic as the single warm accent
- **Do:** Use warm greys (#292524, #78716c) for all text on white
- **Do:** Tag eyebrow lines with a small pale peach pill
- **Don't:** Don't add a second accent colour; the page is pink italic on warm neutrals
- **Don't:** Don't use cool greys for text
- **Don't:** Don't use square corners on the product card or the pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
