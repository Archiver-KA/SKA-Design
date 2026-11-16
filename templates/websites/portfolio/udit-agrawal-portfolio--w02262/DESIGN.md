# Design system — Udit Agrawal Portfolio

`SN-W02262` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A game-like 3D portfolio on a deep navy ground (#020617) shows a small HUD card at the top left, outlined in teal with a status dot, and a keyboard-controls panel at the top right. The first screen behaves like a game interface rather than a page, so structure lives in the HUD and the 3D scene behind it. Teal is the live accent, and the HUD card is the recognisable element.

**Mood:** futuristic, game-like, dark, immersive, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d946ef` · `#1e293b` · `#020617` · `#3b82f6` · `#0f172a` · `#10b981` · `#06b6d4` · `#8b5cf6` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 14px · h2 20px · h3 14px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-cyan-500/20`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. About (`about`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #d946ef;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#334155',
    ink: '#cbd5e1',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep HUD panels as small outlined cards with a teal (#10b981) border and status dot.
- **Do:** Set the 3D scene on a dark navy ground (#020617).
- **Do:** Show control hints as small keycap-style tiles.
- **Don't:** Don't put body text on the first screen; the HUD is the interface.
- **Don't:** Don't use the magenta (#d946ef) as a large fill; it is for highlights only.
- **Don't:** Don't use light surfaces; the design is navy throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
