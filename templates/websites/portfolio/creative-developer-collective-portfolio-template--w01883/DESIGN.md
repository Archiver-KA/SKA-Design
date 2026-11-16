# Design system — Creative Developer Collective Portfolio Template

`SN-W01883` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale grey ground with one large lowercase wordmark, 'recit.', set in heavy black sans and filled with a yellow-olive gradient over a soft blue field (#3d3bff). The blurred colour is the only colour in the page and sits behind the type, so it reads as light rather than graphics. Navigation and coordinates are small uppercase text in the corners, leaving the centre open.

**Mood:** minimal, airy, gestural, art-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#3d3bff` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#3d3bff` · `#ffffff` · `#d4d4d4` · `#a3a3a3` · `#e5e5e5` · `#737373` · `#f4f4f4` · `#262626` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 60px · h3 12px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-8 py-3 rounded-full border border-neutral-300 text-xs font-medium uppercase tracking-wide hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Case studies (`case-studies`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f4;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #3d3bff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f4',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#3d3bff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the blurred blue field (#3d3bff) behind the wordmark, never behind text blocks.
- **Do:** Set the wordmark lowercase with its full stop, large, in heavy black sans.
- **Do:** Keep navigation and coordinates small, uppercase and in the corners.
- **Don't:** Don't add a second saturated colour beside the blue field.
- **Don't:** Don't place body copy on the blurred area.
- **Don't:** Don't fill the hero with imagery; the centre stays open.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
