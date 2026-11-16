# Design system — Skincare E-commerce Landing Page Template

`SN-W01320` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, editorial skincare hero on an off-white ground (#fafaf9) with stone-toned ink (#1c1917). The headline is large, bold sans-serif, set tight and left-aligned, and the primary button is solid stone-black with an outlined pill for the secondary. A saturated photograph on the right supplies the only colour; the interface itself stays in warm neutrals, so the image carries the brand.

**Mood:** warm, neutral, editorial, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#e7e5e4` · `#a8a29e` · `#f5f5f4` · `#292524` · `#fafaf9` · `#0c0a09` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Comparison (`comparison`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Inter, tight and left-aligned, in stone-black (#1c1917)
- **Do:** Make the primary button solid stone-black with an outlined pill for the secondary
- **Do:** Let the full-bleed photograph supply the colour; keep UI elements in warm neutrals
- **Don't:** Don't add coloured UI chrome; the page stays in warm neutrals
- **Don't:** Don't centre the hero copy; it sits left against the photograph
- **Don't:** Don't place a second photo style or illustration beside the hero image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
