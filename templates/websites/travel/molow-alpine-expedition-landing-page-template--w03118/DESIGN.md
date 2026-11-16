# Design system — Molow. Alpine Expedition Landing Page Template

`SN-W03118` · travel · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A near-black hero (#0a0a0a) dominated by a very large heavy sans-serif wordmark, Molow., set across the lower half of the screen. A dark grey card (#171717) sits on the right with a white heading and muted body copy in French. The primary button is white, and the navigation is minimal. The design is stark and type-led, with the wordmark as its main image.

**Mood:** stark, bold, minimal, alpine

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#525252` · `#262626` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 14px
- **Weights in use:** normal, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-xs md:text-sm font-normal hover:bg-neutral-200 transition-colors tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Timeline (`timeline`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, Alpine.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand name very large and heavy in white across the lower half of the hero
- **Do:** Keep the white fill for the single primary button
- **Do:** Place short copy in a dark grey card (#171717) over the wordmark
- **Don't:** Don't add colour to the hero; it is monochrome
- **Don't:** Don't set the wordmark small; its scale is the design
- **Don't:** Don't place small body text over the large letters without the card behind it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
