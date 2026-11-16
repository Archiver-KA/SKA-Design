# Design system — AI Fashion E-commerce Landing Page Template

`SN-W01078` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

An off-white, grid-based showcase page sets headlines at extreme size in black heavy sans, cropped at the edge. Each feature sits in a hairline-divided cell with one large word or a small diagram, so the grid carries the layout. Lime (#d4ff33) is a sparing highlight, not a page fill, and black type carries the rest of the colour.

**Mood:** bold, grid-driven, editorial, stark, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#0f1f12` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d4ff33` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#000000` · `#0f1f12` · `#ffffff` · `#d4ff33` · `#f3f4ef` · `#4ade80` · `#ffb8d0` · `#333333` · `#bef264` · `#ffe0bd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 112px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter-custom`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-md`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="group flex items-center gap-2 text-sm font-medium bg-[#0f1f12] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4ef;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #0f1f12;
  --color-border: #000000;
  --color-accent: #d4ff33;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4ef',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#0f1f12',
    line: '#000000',
    accent: '#d4ff33',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines huge in black heavy sans, cropped at the edge
- **Do:** Divide content with hairline grid cells rather than cards
- **Do:** Use lime (#d4ff33) only for small highlights
- **Don't:** Don't fill large areas with lime green
- **Don't:** Don't round the grid cells
- **Don't:** Don't add shadows to the cells

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
