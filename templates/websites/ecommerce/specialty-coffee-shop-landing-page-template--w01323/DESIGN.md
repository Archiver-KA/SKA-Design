# Design system — Specialty Coffee Shop Landing Page Template

`SN-W01323` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm editorial coffee page on an off-white ground (#fafaf9), with near-black (#1c1917) display type set heavy and tight. The word 'Vietnamese' is the one italic, set in burnt orange (#b45309), which is the page's accent and recurs in the small label on the product card. Buttons are a solid near-black pill and an outlined pill, and the feature card uses a cream-to-grey gradient rather than a photograph.

**Mood:** warm, editorial, bold, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#b45309` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#e7e5e4` · `#047857` · `#eab308` · `#b45309` · `#d6d3d1` · `#fafaf9` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="text-sm font-semibold bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 ease-out">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
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
  --color-accent: #b45309;
  --color-accent-2: #b45309;
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
    accent: '#b45309',
    accent2: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Inter, tight, with one italic word in burnt orange (#b45309)
- **Do:** Use burnt orange (#b45309) for the highlight word and small card labels only
- **Do:** Make the primary button solid near-black (#1c1917) with an outlined pill beside it
- **Don't:** Don't use the orange for buttons or large fills
- **Don't:** Don't introduce a cool accent; the page is warm throughout
- **Don't:** Don't set the headline in a light weight; the heavy weight is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
