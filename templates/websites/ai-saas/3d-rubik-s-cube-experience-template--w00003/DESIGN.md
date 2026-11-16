# Design system — 3D Rubik's cube Experience Template

`SN-W00003` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black field holds a control-panel snippet for a 3D cube, with the interface kept to small text. The purple square logo (#9333ea) is the only saturated colour and tints the active Auto Solve control. The moves counter sits in a small rounded card on the right, so the controls read as a toolbar around the viewport.

**Mood:** minimal, playful, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Accent | `#9333ea` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#6366f1` · `#d4d4d8` · `#a1a1aa` · `#09090b` · `#9333ea` · `#52525b` · `#818cf8` · `#a5b4fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`
- **Content width:** `max-w-[200px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #09090b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-accent: #9333ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#09090b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    accent: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep controls in a bottom-centre bar of small text buttons
- **Do:** Use purple (#9333ea) only for the logo mark and the active control
- **Do:** Place the moves counter in a small rounded card on the right edge
- **Don't:** Don't fill the page background with indigo (#6366f1)
- **Don't:** Don't put text over the centre of the cube viewport
- **Don't:** Don't use heavy shadows on the bottom control bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
