# Design system — BetterCraft Voxel Sandbox Template

`SN-W00249` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A flat, game-like voxel sandbox start screen: a muted teal-slate ground with a centred monospace title and a single white rounded button. The hotbar at the bottom uses small block-coloured tiles (green, sand and stone) that carry the only colour. All type is monospace, with tracked caps for the controls hint, so the screen reads as a block-world game rather than a marketing page.

**Mood:** playful, blocky, monochrome ui, retro

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#87ceeb` | Page ground |
| Surface | `#8d8d92` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4a4a4f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e6d9a3` | Primary action and highlights |
| Second accent | `#a8d8e8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#87ceeb` · `#6ab04c` · `#8a6a48` · `#8d8d92` · `#e6d9a3` · `#6e4a2b` · `#a9763f` · `#a8d8e8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-monospace
- **Body:** ui-monospace
- **Scale (largest breakpoint):** h1 48px · h2 16px · h3 12px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-0`

**Primary button**

```html
<a class="pointer-events-auto px-6 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #87ceeb;
  --color-surface: #8d8d92;
  --color-text: #000000;
  --color-muted: #4a4a4f;
  --color-border: #ffffff;
  --color-accent: #e6d9a3;
  --color-accent-2: #a8d8e8;
  --font-display: "ui-monospace", sans-serif;
  --font-body: "ui-monospace", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#87ceeb',
    surface: '#8d8d92',
    ink: '#000000',
    muted: '#4a4a4f',
    line: '#ffffff',
    accent: '#e6d9a3',
    accent2: '#a8d8e8',
  },
  fontFamily: { display: ['ui-monospace'], sans: ['ui-monospace'] },
} }
```

## Do and don't

- **Do:** Set all text in the monospace face, with the title and button centred
- **Do:** Use the block colours (#6ab04c, #8a6a48) only in the hotbar tiles
- **Do:** Keep the start button white with a rounded corner
- **Don't:** Don't use a serif or sans-serif display face; the monospace is the identity
- **Don't:** Don't add decorative gradients over the 3D scene
- **Don't:** Don't put more than one button on the start screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
