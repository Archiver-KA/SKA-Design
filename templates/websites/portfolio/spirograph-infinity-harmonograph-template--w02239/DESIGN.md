# Design system — Spirograph Infinity Harmonograph Template

`SN-W02239` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, instrument-like canvas tool: near-black navy (#020617) holds a thin-line pendulum drawing on the left, and a slate control panel on the right holds sliders, toggles and presets. Indigo (#818cf8) marks the title and the active toggle, and the type is a plain sans, so the controls feel precise and the drawing does the expressive work. It is a dense utility rather than a landing page.

**Mood:** precise, technical, dark, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#1e293b` · `#818cf8` · `#94a3b8` · `#334155` · `#64748b` · `#6366f1` · `#f8fafc` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h3 12px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #818cf8;
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
    surface: '#1e293b',
    ink: '#f8fafc',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the canvas on near-black navy (#020617) with thin light lines for the drawing
- **Do:** Use indigo (#818cf8) for the title and the active toggles only
- **Do:** Set controls in a plain sans with small uppercase section labels
- **Don't:** Don't add decorative gradients to the canvas
- **Don't:** Don't fill preset buttons with bright colour; keep them slate
- **Don't:** Don't crowd the slider rows; keep each label next to its value

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
