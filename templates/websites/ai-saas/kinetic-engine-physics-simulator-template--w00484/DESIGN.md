# Design system — Kinetic Engine Physics Simulator Template

`SN-W00484` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal physics demo on a near-black ground with a thin horizontal grid and a glass-style info card in the top left. The simulation's blue particles are the only saturated colour on the screen, and the control bar at the bottom uses dark rounded buttons with small grey labels. The page is a working tool rather than a marketing layout, so the title is small.

**Mood:** minimal, technical, dark, tool-like, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#d4d4d8` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#09090b` · `#3f3f46` · `#3b82f6` · `#10b981` · `#18181b` · `#a1a1aa` · `#52525b` · `#f43f5e` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[250px]`
- **Common gaps:** `gap-2`, `gap-6`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #f4f4f5;
  --color-muted: #d4d4d8;
  --color-border: #27272a;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
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
    surface: '#27272a',
    ink: '#f4f4f5',
    muted: '#d4d4d8',
    line: '#27272a',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the simulation the only saturated element on the screen
- **Do:** Use dark rounded buttons with small grey labels for controls
- **Do:** Set the title in a small, medium-weight sans at the top left
- **Don't:** Don't add large headlines above the simulation
- **Don't:** Don't use bright colours for the control buttons
- **Don't:** Don't put the info card over the particles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
