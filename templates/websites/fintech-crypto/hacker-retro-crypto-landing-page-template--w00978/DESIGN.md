# Design system — Hacker Retro Crypto Landing Page Template

`SN-W00978` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black frame holds a green monospace figure inside a thin green border, a counter-style detail. The page is built on a terminal-log hero, ruled mechanism rows, command-style steps and a three-tier fee table, with the figures set in monospace. The page is dark, not light.

**Mood:** technical, terminal, ruled, plain, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0e1726` | Page ground |
| Text | `#e6ecf5` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#d9dfe8` | Hairlines, dividers, outlines |
| Accent | `#f2a33a` | Primary action and highlights |
| Second accent | `#2b5ce6` | Supporting highlights |

Palette by frequency of use: `#d9dfe8` · `#556070` · `#ffffff` · `#0e1726` · `#f2a33a` · `#2b5ce6` · `#1f49c0` · `#e6ecf5` · `#9fb0c8` · `#8fb0ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 30px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-[6px]` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[8px_8px_0_0_#D9DFE8]`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-10`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-4 focus:py-3 focus:rounded-ctl">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0e1726;
  --color-text: #e6ecf5;
  --color-muted: #556070;
  --color-border: #d9dfe8;
  --color-accent: #f2a33a;
  --color-accent-2: #2b5ce6;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0e1726',
    ink: '#e6ecf5',
    muted: '#556070',
    line: '#d9dfe8',
    accent: '#f2a33a',
    accent2: '#2b5ce6',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set figures and command steps in monospace inside a thin border.
- **Do:** Separate mechanism rows with hairline rules rather than cards.
- **Do:** Keep the fee table to three tiers with one column of figures each.
- **Don't:** Don't style this as a light page.
- **Don't:** Don't use orange (#f2a33a) for body text.
- **Don't:** Don't add shadows to the terminal frames.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
