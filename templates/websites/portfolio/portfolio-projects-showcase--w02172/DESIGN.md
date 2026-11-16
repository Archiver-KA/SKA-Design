# Design system — Portfolio Projects Showcase

`SN-W02172` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Playful and soft: a white ground with large blurred pastel blobs in pink, blue and lilac behind the hero, and a pink-to-orange gradient reserved for the active filter and the header button. The system sans-serif headline is centred in dark slate, with the key word in pink. Filter chips form the main interaction, which makes the page feel like a gallery index.

**Mood:** playful, soft, gallery-like, pastel, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fdf2f8` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#fb923c` · `#4b5563` · `#374151` · `#1f2937` · `#a855f7` · `#f9a8d4` · `#d8b4fe` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fdf2f8;
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-accent: #ec4899;
  --color-accent-2: #fb923c;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fdf2f8',
    ink: '#1f2937',
    muted: '#4b5563',
    accent: '#ec4899',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the pink (#ec4899) to orange (#fb923c) gradient only on the active filter and the header button
- **Do:** Keep the hero blobs large, blurred and pastel
- **Do:** Use pill-shaped filter chips for project categories
- **Don't:** Don't add hard drop shadows; depth comes from the blurred blobs
- **Don't:** Don't use more than two accent hues in one view
- **Don't:** Don't set small body text over the blobs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
