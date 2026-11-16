# Design system — Wild Origins Safari Travel Template

`SN-W03160` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A raw, editorial safari page on a warm beige ground (#e8e3d7), with a very large near-black uppercase sans headline set in tight stacked lines. The nav is a black block that holds the call to action, and the right column stacks numbered index panels in small caps. Colour is near-monochrome, with terracotta (#b55d34) kept for small highlights, so the page reads as earthy and quiet.

**Mood:** editorial, raw, earthy, bold, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e3d7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#b55d34` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#ffffff` · `#b55d34` · `#e8e3d7` · `#000000` · `#222222` · `#a35230`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-2xl`, `max-w-[14rem]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="text-white p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Bento grid (`bento-grid`)
7. FAQ (`faq`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8e3d7;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #111111;
  --color-accent: #b55d34;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e3d7',
    surface: '#ffffff',
    ink: '#111111',
    line: '#111111',
    accent: '#b55d34',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans in near-black (#111111), stacked tight
- **Do:** Use the solid black block for the one call to action in the nav
- **Do:** Number the right-hand index panels in small caps with thin dividers
- **Don't:** Don't set the headline in mixed case; the style is uppercase
- **Don't:** Don't use terracotta (#b55d34) for large fills; keep it for small highlights
- **Don't:** Don't add photographs to the beige hero; it stays type-led

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
