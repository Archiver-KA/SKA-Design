# Design system — Minimalist E-commerce Fashion Template

`SN-W01264` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A monochrome, poster-like fashion hero on warm grey (#efede8). An oversized heavy black sans wordmark, YK CRAFT, spans the full width and overlaps a framed model photograph. A narrow left column holds small tracked caps as a tagline with a short rule, and a thin black announcement bar runs across the top. Colour is absent; scale and weight create the hierarchy, and the photograph is the only tonal change.

**Mood:** monochrome, bold, architectural, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efede8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#101010` | Headings and primary copy |
| Muted text | `#88847e` | Secondary copy, captions |
| Border | `#101010` | Hairlines, dividers, outlines |
| Accent | `#101010` | Primary action and highlights |

Palette by frequency of use: `#101010` · `#efede8` · `#ffffff` · `#88847e` · `#e4e1dc` · `#252525` · `#000000` · `#333333` · `#595650`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo
- **Scale (largest breakpoint):** h2 16px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1440px]`, `max-w-[22ch]`
- **Section padding:** `py-16`, `py-14`
- **Common gaps:** `gap-3`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="bg-[#101010] px-8 py-4 text-xs font-medium uppercase tracking-[0.19em] text-[#efede8] transition-colors hover:bg-[#333333]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #efede8;
  --color-surface: #ffffff;
  --color-text: #101010;
  --color-muted: #88847e;
  --color-border: #101010;
  --color-accent: #101010;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efede8',
    surface: '#ffffff',
    ink: '#101010',
    muted: '#88847e',
    line: '#101010',
    accent: '#101010',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in heavy black sans at the full width of the hero
- **Do:** Use a thin left column of spaced caps and a short rule as the navigation
- **Do:** Keep the ground warm grey (#efede8) and the type near-black
- **Don't:** Don't add colour; the page is greyscale
- **Don't:** Don't use a serif for display type
- **Don't:** Don't shrink the title to fit the image frame; scale is the point

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
