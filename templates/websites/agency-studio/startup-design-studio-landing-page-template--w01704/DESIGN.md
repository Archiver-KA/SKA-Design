# Design system — Startup Design Studio Landing Page Template

`SN-W01704` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale off-white ground with very large dark green-black sans words in stacked, broken lines: 'Design', then '& Code', then 'for Startups', split across grid cells. Pale lime and pink shapes sit in the cells as decoration. The layout is a visible grid with thin rules, and the type does the work rather than images.

**Mood:** bold, graphic, grid-based, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f1f12` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d4ff33` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0f1f12` · `#f3f4ef` · `#d4ff33` · `#4ade80` · `#ffb8d0` · `#333333` · `#f3f4f6` · `#a3e635`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 176px · h2 112px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter-custom`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_15px_rgba(74,222,128,0.3)]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 border border-black/10 rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Team (`team`)
5. Code / terminal (`code-terminal`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4ef;
  --color-surface: #ffffff;
  --color-text: #0f1f12;
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
    ink: '#0f1f12',
    line: '#000000',
    accent: '#d4ff33',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very large heavy sans, broken across grid cells.
- **Do:** Use thin rules to divide the hero into cells, and fill one cell with a colour shape.
- **Do:** Keep the ground pale (#f3f4ef) and the type near-black green (#0f1f12).
- **Don't:** Don't use the lime (#bef264) as a full-page background; it appears as a cell fill only.
- **Don't:** Don't add drop shadows to the shapes.
- **Don't:** Don't shrink the headline below the cell size; the type fills the cells.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
