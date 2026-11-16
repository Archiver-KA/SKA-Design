# Design system — Afrofuturist Fashion E-commerce Landing Page Template

`SN-W01074` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal fashion page on an off-white ground (#fdfcf8), where the headline is set very large in a heavy neutral sans and fills the top of the screen. Colour is restrained: the rose-red (#e11d48) appears in a small eyebrow dot and label, not in the headline. Background glow shapes are faint and blurred, so depth is soft rather than graphic.

**Mood:** minimal, editorial, bold, soft, fashion

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#92400e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e11d48` · `#f5f5f4` · `#78716c` · `#a8a29e` · `#f43f5e` · `#fdfcf8` · `#fecdd3` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 16px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-white text-stone-900 text-sm font-semibold rounded hover:bg-stone-100 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Modal / overlay (`modal-overlay`)
6. Call to action (`cta`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #e11d48;
  --color-accent-2: #92400e;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#e11d48',
    accent2: '#92400e',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set headlines at display size in near-black (#1c1917) with tight leading
- **Do:** Use rose (#e11d48) only for the eyebrow dot and small labels
- **Do:** Keep the background glow shapes soft and low-contrast behind the hero
- **Don't:** Don't use rose for headlines or large fills
- **Don't:** Don't put hard-edged graphics over the hero glow
- **Don't:** Don't use a serif for headings; the sans is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
