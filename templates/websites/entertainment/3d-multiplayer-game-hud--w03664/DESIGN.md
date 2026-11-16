# Design system — 3D Multiplayer Game HUD

`SN-W03664` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A heads-up display overlay for a three-dimensional scene, built from dark translucent panels in the corners. Yellow is used for labels and the primary stats, green for the leaderboard heading, and small icons mark the controls. The first frame shows the overlay alone, so the look rests on the panels and their type rather than on the scene.

**Mood:** game-like, functional, legible, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#9ca3af` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#000000` · `#4ade80` · `#9ca3af` · `#2563eb` · `#60a5fa` · `#c084fc` · `#dc2626` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Segoe UI
- **Body:** Segoe UI
- **Scale (largest breakpoint):** h2 20px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px)
- **Common gaps:** `gap-2`

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #9ca3af;
  --color-accent: #facc15;
  --color-accent-2: #4ade80;
  --font-display: "Segoe UI", sans-serif;
  --font-body: "Segoe UI", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#9ca3af',
    accent: '#facc15',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Segoe UI'], sans: ['Segoe UI'] },
} }
```

## Do and don't

- **Do:** Use yellow (#facc15) for stat labels and key values
- **Do:** Keep the panels small and in the corners so the 3D scene stays visible
- **Do:** Set the title in the green accent (#4ade80) only
- **Don't:** Don't place panels over the centre of the scene
- **Don't:** Don't use more than three accent colours in one HUD
- **Don't:** Don't use pure white text on light panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
