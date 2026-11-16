# Design system — Interactive Pie Chart for Design Tools

`SN-W04221` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark chart panel built on Tailwind v4, with a near-black ground (#0a0a0a) and a grey card (#171717) holding the chart. The pie uses violet (#6366f1) and magenta (#d946ef) slices with muted grey labels, and gradient fills give the slices depth. A heading and a short source line sit above the chart, and the panel has rounded corners.

**Mood:** dark, clean, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0a0a0a` · `#171717` · `#262626` · `#6366f1` · `#d946ef` · `#ffffff` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow`

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS v4 (browser)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use violet (#6366f1) and magenta (#d946ef) for the chart slices
- **Do:** Keep the heading and the source line above the chart in muted grey
- **Do:** Set the chart on the grey card (#171717) with rounded corners
- **Don't:** Don't add more than two slice colours
- **Don't:** Don't put the chart on a light ground
- **Don't:** Don't add labels that compete with the slice values

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
