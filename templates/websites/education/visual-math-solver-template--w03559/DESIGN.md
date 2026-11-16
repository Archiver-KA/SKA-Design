# Design system — Visual Math Solver Template

`SN-W03559` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Visual Math Solver is a quiet, light page built around one white working panel. Equations are set in a precise sans-serif, the current step is larger and darker, and earlier steps fade to light grey. The green (#10b981) outline marks the final answer, the only colour on screen. A single input line sits at the base of the panel.

**Mood:** quiet, precise, light, working-surface, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f7f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#9ca3af` · `#4b5563` · `#e5e7eb` · `#d1d5db` · `#f9fafb` · `#1f2937` · `#10b981` · `#f7f7f8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Stats band (`stats`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f7f8;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f7f8',
    surface: '#ffffff',
    ink: '#1f2937',
    line: '#e5e7eb',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#10b981) only for the final result outline
- **Do:** Fade earlier steps to light grey so the current step leads
- **Do:** Keep the working panel white with a single input line at its base
- **Don't:** Don't add colour to the equations
- **Don't:** Don't put the input line above the steps
- **Don't:** Don't use shadows or raised cards for the steps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
