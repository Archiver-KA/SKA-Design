# Design system — System Architecture Features Layout Template

`SN-W03386` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark dashboard-style feature layout on a deep navy ground, with a centred white title over a grey subtitle. Content sits in a grid of rounded panels with thin slate borders, each carrying an icon tile, a bold title and short grey copy. Emerald (#10b981) appears only in live controls such as a slider track and a status label, so the colour marks state rather than decoration.

**Mood:** technical, dark, orderly, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#ffffff` · `#94a3b8` · `#115e59` · `#0f172a` · `#134e4a` · `#334155` · `#64748b` · `#34d399` · `#0f766e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Varela Round
- **Body:** Varela Round
- **Loaded families:** Varela Round, Work Sans
- **Scale (largest breakpoint):** h1 48px · h3 24px · body 16px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-6`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #10b981;
  --color-accent-2: #1e293b;
  --font-display: "Varela Round", sans-serif;
  --font-body: "Varela Round", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#e2e8f0',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#10b981',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Varela Round'], sans: ['Varela Round'] },
} }
```

## Do and don't

- **Do:** Use the emerald (#10b981) only for slider tracks, live status labels and active controls.
- **Do:** Set panel titles in bold white over grey descriptions of two or three lines.
- **Do:** Keep the panels on the deep navy ground (#020617) with thin slate borders (#334155).
- **Don't:** Don't fill a panel with the emerald; panels stay dark.
- **Don't:** Don't set headings or body text in the emerald.
- **Don't:** Don't drop the icon tile from a panel; each feature keeps one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
