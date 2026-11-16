# Design system — Visual Artist Portfolio Website Template

`SN-W02285` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A monochrome gallery page on an off-white ground with near-black text and no brand colour at all. A narrow left column holds a quiet index of links and small uppercase labels, while the artwork title sits large in a Cormorant Garamond serif with a grey subtitle. The artwork supplies all the colour, and generous space separates the labels from the main column.

**Mood:** gallery, monochrome, quiet, refined, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#a3a3a3` · `#171717` · `#e5e5e5` · `#525252` · `#737373` · `#fafafa` · `#262626` · `#f5f5f5` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 30px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-6`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="w-full py-3 border border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #fafafa;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#fafafa',
    ink: '#262626',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set artwork titles in Cormorant Garamond at a large size
- **Do:** Set labels in small uppercase Inter with hairline dividers
- **Do:** Keep the page to near-black text on off-white and let the images carry colour
- **Don't:** Don't add a brand accent colour; the page is neutral
- **Don't:** Don't place images full bleed inside the sidebar column
- **Don't:** Don't centre the artwork title

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
