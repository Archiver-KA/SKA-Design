# Design system — AI Analytics Free Trial CTA

`SN-W00036` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single centred call to action on a pure black field, built as a quiet block: a tracked uppercase kicker, a glowing pill button, and a short reassurance line under it. The button is the only lit element, with a soft pale cyan halo (#a5f3fc) that draws the eye. Text stays in Inter and small, so the offer and the button read first.

**Mood:** focused, minimal, glowing, quiet, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#a5f3fc` | Primary action and highlights |

Palette by frequency of use: `#737373` · `#000000` · `#ffffff` · `#404040` · `#d4d4d4` · `#a5f3fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-2`

## Page structure

Blocks in page order:

1. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #404040;
  --color-accent: #a5f3fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#404040',
    accent: '#a5f3fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the button as the only glowing element in the block
- **Do:** Set the kicker in small uppercase with wide tracking
- **Do:** Put the risk-free note directly under the button in muted grey (#737373)
- **Don't:** Don't add a second button; this block has one action
- **Don't:** Don't use a light background; the ground is pure black
- **Don't:** Don't put the glow on the text, only on the button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
