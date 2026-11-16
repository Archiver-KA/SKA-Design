# Design system — Metabolic OS Health Landing Page Template

`SN-W02481` · healthcare · light mode · Sinera Atlas theme `calm` · language `zh-CN`

## Direction

A pale warm-grey page with a large black sans headline whose second line is set in light grey italic serif. Headline figures sit in a short stat row with thin captions, and the product visual is a soft white card with a small status bar. The page is restrained and editorial, with black as the only accent and the Chinese body copy set in the same light grey.

**Mood:** editorial, restrained, minimal, precise, bilingual

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#67e8f9` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#b4925a` · `#a8a29e` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#000000` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Noto Serif SC, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-stone-900 text-white px-5 py-2 text-xs font-medium tracking-wide rounded-full hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #1c1917;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #67e8f9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#1c1917',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#67e8f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, with the second line in light grey italic
- **Do:** Use near-black (#1c1917) for the primary button and the status bar fill
- **Do:** Show headline figures with small uppercase captions beneath
- **Don't:** Don't add a colour accent; the page is black, grey and white
- **Don't:** Don't set the Chinese body copy in a heavy weight
- **Don't:** Don't put the stat row on a dark background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
