# Design system — Tactical Equipment & Night Vision Landing Page Template

`SN-W00763` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A light warm-grey page (#e9e8e6) where very large dark display type, Night Vision, overlaps a photograph of an olive chest rig, with a faint outline echo of the same words behind it. Small uppercase labels, swatch dots and a configurator layout are set in black and grey. Colour is almost absent, so the product photograph and the type do the work.

**Mood:** brutalist, gallery-like, monochrome, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e9e8e6` | Page ground |
| Surface | `#d4d4d4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#a3a3a3` | Hairlines, dividers, outlines |
| Accent | `#2d3a6b` | Primary action and highlights |

Palette by frequency of use: `#a3a3a3` · `#d4d4d4` · `#525252` · `#ffffff` · `#262626` · `#404040` · `#171717` · `#737373` · `#2d3a6b` · `#111524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 144px · h2 96px · h3 24px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-inner`, `shadow`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-1.5 rounded-full bg-neutral-300/60 text-sm font-medium text-neutral-700 hover:bg-neutral-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Product detail (`product-detail`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e9e8e6;
  --color-surface: #d4d4d4;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #a3a3a3;
  --color-accent: #2d3a6b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e9e8e6',
    surface: '#d4d4d4',
    ink: '#171717',
    muted: '#525252',
    line: '#a3a3a3',
    accent: '#2d3a6b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display titles at very large size in near-black, allowed to overlap the product image
- **Do:** Keep the ground light warm grey (#e9e8e6) with black and grey text only
- **Do:** Use small uppercase labels and swatch dots for configuration controls
- **Don't:** Don't add bright colour to the product page; the photograph supplies it
- **Don't:** Don't set display titles in light grey on the light ground
- **Don't:** Don't add gradients or glows; the page is flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
