# Design system — Animated Shape Loading Screen

`SN-W04157` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A loading screen built on a magenta-to-purple gradient, with a large bold uppercase white title and a playful row of differently coloured shapes. Each shape bounces and rotates, and short comic labels float at the corners. Heavy type, bright shape colours and a gradient progress bar keep the page energetic rather than corporate.

**Mood:** playful, energetic, bold, comic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#9d174d` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#ec4899` · `#22d3ee` · `#4ade80` · `#a855f7` · `#581c87` · `#9d174d` · `#7c2d12` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-inner`
- **Common gaps:** `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #9d174d;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-accent: #4ade80;
  --color-accent-2: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#9d174d',
    ink: '#ffffff',
    muted: '#d1d5db',
    accent: '#4ade80',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in bold uppercase Inter at about 60px.
- **Do:** Use one bright colour per shape: red, cyan, green, purple and orange.
- **Do:** Keep the progress bar as a gradient running from pink to cyan.
- **Don't:** Don't use a flat dark background; the gradient is the ground.
- **Don't:** Don't turn the shapes into one uniform colour.
- **Don't:** Don't place body copy in the corners where the labels float.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
