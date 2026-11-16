# Design system — Liminal Resonance Analytics Template

`SN-W00494` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, mysterious dashboard on a near-black violet ground (#0a0a0f) with cream (#ede7d2) type and small violet (#7b5cff) rings and lines. Cinzel, a classical all-capitals serif, sets the headings and labels, which gives the data a ceremonial rather than clinical feel. Dark panels with soft edges hold the readings, and the violet glow is the only colour in the frame.

**Mood:** mysterious, ceremonial, dark, atmospheric, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#1e1b2e` | Cards, panels, raised areas |
| Text | `#ede7d2` | Headings and primary copy |
| Accent | `#7b5cff` | Primary action and highlights |
| Second accent | `#b8a4ff` | Supporting highlights |

Palette by frequency of use: `#ede7d2` · `#b8a4ff` · `#1e1b2e` · `#12121a` · `#d4c9a6` · `#7b5cff` · `#0a0a0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_12px_rgba(123,92,255,0.25)]`
- **Common gaps:** `gap-4`, `gap-1`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)
3. FAQ (`faq`)
4. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #1e1b2e;
  --color-text: #ede7d2;
  --color-accent: #7b5cff;
  --color-accent-2: #b8a4ff;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#1e1b2e',
    ink: '#ede7d2',
    accent: '#7b5cff',
    accent2: '#b8a4ff',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set headings and labels in Cinzel with wide letter spacing.
- **Do:** Use cream (#ede7d2) for text and the violet (#7b5cff) for data rings and lines.
- **Do:** Keep panels on the dark violet-black surfaces (#12121a to #1e1b2e).
- **Don't:** Don't set long body copy in Cinzel; it is for headings and short labels.
- **Don't:** Don't add bright or saturated colours beyond the violet.
- **Don't:** Don't use light backgrounds for panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
