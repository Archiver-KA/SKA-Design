# Design system — Solar System Visualization Experience Template

`SN-W04100` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

The interface is minimal and quiet on a near-black ground (#0a0a0a), with small uppercase labels, a thin speed slider and a rounded glass control bar along the bottom. Orange (#f97316) is the only warm colour and marks the title and the sun, while the rest is neutral grey. The type stays small so the 3D canvas remains the visual subject.

**Mood:** immersive, minimal, dark, technical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#0a0a0a` · `#f97316` · `#fde047` · `#000000` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 20px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,165,0,0.5)]`, `shadow-black/50`
- **Content width:** `max-w-[200px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the interface on near-black (#0a0a0a) with grey text
- **Do:** Use the orange (#f97316) only for the title marker and the main highlight
- **Do:** Keep controls small and in translucent rounded panels at the edges
- **Don't:** Don't cover the central canvas with opaque panels
- **Don't:** Don't set labels at larger sizes or in bright colours
- **Don't:** Don't add a second accent colour to the interface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
