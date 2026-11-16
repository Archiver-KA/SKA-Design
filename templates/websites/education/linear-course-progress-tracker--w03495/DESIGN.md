# Design system — Linear Course Progress Tracker

`SN-W03495` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A compact dark progress card on a near-black ground (#030712) with a cyan-to-indigo gradient carrying the progress bar and the continue button. The type is the system sans-serif at small sizes, with step labels in muted grey and the current step lit in cyan (#22d3ee). Pill-shaped step segments and rounded panels keep the card soft and easy to scan.

**Mood:** focused, dark, gradient-driven, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#22d3ee` · `#1f2937` · `#f3f4f6` · `#4b5563` · `#67e8f9` · `#6366f1` · `#06b6d4` · `#334155` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-md`
- **Common gaps:** `gap-6`, `gap-0.5`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #334155;
  --color-text: #9ca3af;
  --color-muted: #4b5563;
  --color-border: #374151;
  --color-accent: #22d3ee;
  --color-accent-2: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#334155',
    ink: '#9ca3af',
    muted: '#4b5563',
    line: '#374151',
    accent: '#22d3ee',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for the active step and the progress value only
- **Do:** Fill progress segments with the gradient from indigo to cyan rather than a flat colour
- **Do:** Keep card text in the grey scale so cyan stays the only accent
- **Don't:** Don't add light backgrounds or white cards to this component
- **Don't:** Don't use more than one bright accent colour in a single card
- **Don't:** Don't enlarge step labels beyond body size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
