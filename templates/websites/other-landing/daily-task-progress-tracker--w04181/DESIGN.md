# Design system — Daily Task Progress Tracker

`SN-W04181` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A compact dark card on a midnight ground (#0e1020), built as a stepper with a cyan (#67e8f9) progress bar, step markers and a solid cyan button. Completed steps are filled cyan, the current step is ringed, and upcoming steps fade to grey. The card has rounded corners and a thin slate border, with small type throughout.

**Mood:** calm, focused, compact, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e1020` | Page ground |
| Surface | `#151728` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#2d354b` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |
| Second accent | `#192037` | Supporting highlights |

Palette by frequency of use: `#67e8f9` · `#a5f3fc` · `#cffafe` · `#151728` · `#2d354b` · `#192037` · `#0e1020` · `#24274a` · `#273047` · `#293047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_8px_1px_#22d3ee]`, `shadow-lg`, `shadow`
- **Common gaps:** `gap-3`, `gap-8`

**Primary button**

```html
<a class="mt-2 w-full py-2 text-cyan-950 font-bold rounded-lg bg-cyan-300 hover:bg-cyan-200 transition-all shadow text-base tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0e1020;
  --color-surface: #151728;
  --color-text: #f5f5f5;
  --color-border: #2d354b;
  --color-accent: #67e8f9;
  --color-accent-2: #192037;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e1020',
    surface: '#151728',
    ink: '#f5f5f5',
    line: '#2d354b',
    accent: '#67e8f9',
    accent2: '#192037',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use cyan (#67e8f9) for completed steps, the progress bar and the primary button.
- **Do:** Keep the card #151728 with a #2d354b border and rounded corners.
- **Do:** Set upcoming steps in muted grey.
- **Don't:** Don't add a second accent colour to the stepper.
- **Don't:** Don't use a light background for the card.
- **Don't:** Don't fill the progress track with a gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
