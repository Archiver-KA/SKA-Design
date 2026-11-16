# Design system — Bloomava Creative Agency Landing Page Template

`SN-W01456` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A greyscale hero with a vertical gradient from near-white to mid grey, and a large sans display in the lower left with a lighter grey word. The layout is quiet and gallery-like, with small image tiles and a text block on the right. No accent colour is visible in the hero, so the page relies on photography and type weight.

**Mood:** monochrome, quiet, gallery-like, minimal, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ff7a59` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#666666` · `#111111` · `#e5e5e5` · `#171717` · `#525252` · `#262626` · `#d4d4d4` · `#f4f4f4` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 12px
- **Weights in use:** medium, normal, extralight
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-normal gap-2 border border-white/30 text-white hover:bg-white hover:text-neutral-900 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #111111;
  --color-muted: #666666;
  --color-border: #e5e5e5;
  --color-accent: #ff7a59;
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
    surface: '#fafafa',
    ink: '#111111',
    muted: '#666666',
    line: '#e5e5e5',
    accent: '#ff7a59',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to a greyscale gradient with the headline in white
- **Do:** Set the display in two weights: a light first word and a bold second word
- **Do:** Let the project imagery supply all the colour
- **Don't:** Don't add an accent colour to the hero
- **Don't:** Don't flatten the hero to plain white, keep the gradient
- **Don't:** Don't set body copy small on the grey field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
