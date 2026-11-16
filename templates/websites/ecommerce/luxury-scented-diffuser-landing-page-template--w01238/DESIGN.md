# Design system — Luxury Scented Diffuser Landing Page Template

`SN-W01238` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A meditative centred hero on warm off-white, with a large light serif in dark taupe, the first word in italic, and tiny letter-spaced caps above it. One small outlined button sits alone below, with no imagery on the first screen.

**Mood:** still, airy, ritual, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f7f4` | Page ground |
| Surface | `#f8f7f4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#292524` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#57534e` · `#f8f7f4` · `#ffffff` · `#f5f5f4` · `#d4d4d8` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 36px · body 12px
- **Weights in use:** light, semibold, thin
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="interactable glass-panel px-8 py-3 rounded-full text-xs uppercase tracking-widest text-stone-600 hover:bg-white/40 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-stone-200/50">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f7f4;
  --color-surface: #f8f7f4;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f7f4',
    surface: '#f8f7f4',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the first screen to type and one button, with no imagery
- **Do:** Set the title in a light serif with the first word in italic
- **Do:** Use letter-spaced small caps for the eyebrow label
- **Don't:** Don't fill the background with colour; warm off-white only
- **Don't:** Don't set the headline in a bold weight
- **Don't:** Don't add a heavy filled button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
