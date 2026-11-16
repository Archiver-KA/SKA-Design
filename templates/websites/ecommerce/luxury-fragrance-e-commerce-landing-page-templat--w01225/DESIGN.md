# Design system — Luxury Fragrance E-commerce Landing Page Template

`SN-W01225` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dim, romantic fragrance stance: a dark photograph of deep red flowers and a bottle, darkened heavily so a centred white serif headline reads across it. The French eyebrow is small tracked uppercase, the navigation is tracked uppercase on a dark bar, and a thin outline button sits under the copy. Deep red from the photograph is the only colour, and the type stays off-white.

**Mood:** dim, romantic, refined, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0e0d` | Page ground |
| Surface | `#161513` | Cards, panels, raised areas |
| Text | `#e3ded5` | Headings and primary copy |
| Muted text | `#a38a5e` | Secondary copy, captions |
| Border | `#a38a5e` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a38a5e` · `#e3ded5` · `#827d73` · `#0f0e0d` · `#ffffff` · `#9a9488` · `#000000` · `#161513` · `#555555` · `#141311`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.15em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-x-8`, `gap-y-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-10 py-4 border border-[#a38a5e]/50 text-[#e3ded5] text-xs uppercase tracking-[0.15em] hover:bg-[#a38a5e] hover:text-[#0f0e0d] hover:border-[#a38a5e] transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0e0d;
  --color-surface: #161513;
  --color-text: #e3ded5;
  --color-muted: #a38a5e;
  --color-border: #a38a5e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0e0d',
    surface: '#161513',
    ink: '#e3ded5',
    muted: '#a38a5e',
    line: '#a38a5e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, centred, over a heavily darkened photograph.
- **Do:** Use a thin outline button rather than a filled one for the single call to action.
- **Do:** Keep the eyebrow and navigation in small, widely tracked uppercase.
- **Don't:** Don't use a bright fill for the call to action; the outline is the style.
- **Don't:** Don't let the product photograph's brand labels show at full strength; keep the darkening layer.
- **Don't:** Don't set the body copy in small grey type over the photograph without the dark layer.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
