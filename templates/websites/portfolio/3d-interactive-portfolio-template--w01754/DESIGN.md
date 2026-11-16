# Design system — 3D Interactive Portfolio Template

`SN-W01754` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black 3D scene with a small status label in the top-left and a WASD key-hint panel in the top-right. The interface is dark zinc with emerald and blue accents, small 12px type and a Three.js canvas. It works as a dark HUD built from small labels, status lines and key panels.

**Mood:** dark, game-like, hud, immersive, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#09090b` · `#10b981` · `#27272a` · `#d4d4d8` · `#3b82f6` · `#a855f7` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 12px · h2 20px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_30px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-[200px]`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. About (`about`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use small status labels in the corners and a key-hint panel for controls
- **Do:** Keep the scene background near-black (#09090b) with zinc surfaces (#18181b)
- **Do:** Use emerald (#10b981) only for the active status indicator
- **Don't:** Don't add large headlines over the 3D canvas
- **Don't:** Don't use light backgrounds
- **Don't:** Don't add decorative gradients over the canvas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
