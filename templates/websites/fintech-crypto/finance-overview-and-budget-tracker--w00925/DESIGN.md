# Design system — Finance Overview and Budget Tracker

`SN-W00925` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile finance screen shown inside a phone frame, built from stacked rounded cards on a deep navy [#08081a]. The total balance is the largest figure, with income and expense tiles beneath it. Each budget category has its own coloured progress bar, in blue, green or purple, with a bold percentage on the right. Cards sit a step lighter than the page so the stack reads clearly.

**Mood:** dark, clear, app-like, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08081a` | Page ground |
| Surface | `#151530` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#1e1e3a` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#1e1e3a` · `#c084fc` · `#151530` · `#a855f7` · `#08081a` · `#4ade80` · `#60a5fa` · `#ffffff` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · body 12px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-pink-500/20`
- **Common gaps:** `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #08081a;
  --color-surface: #151530;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-accent: #1e1e3a;
  --color-accent-2: #4ade80;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08081a',
    surface: '#151530',
    ink: '#ffffff',
    muted: '#9ca3af',
    accent: '#1e1e3a',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Show the total balance as the largest figure on the card
- **Do:** Use one coloured progress bar per budget category with a bold percentage
- **Do:** Keep cards a step lighter than the navy page ground
- **Don't:** Don't use the progress colours for body text
- **Don't:** Don't add decorative gradients behind the cards
- **Don't:** Don't shrink the balance figure below the category labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
