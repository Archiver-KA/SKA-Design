# Design system — Responsive Pricing Plan Cards

`SN-W04275` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark pricing section on a pure black ground (#000000) with plan cards whose edges carry gradient borders. The heading is white sans, and the highlighted plan's button is a blue-to-cyan gradient, with green check marks in the feature lists. Each tier has its own gradient, so the plans are told apart by colour as much as by price.

**Mood:** bold, gradient, dark, tiered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#34d399` · `#e5e7eb` · `#3b82f6` · `#06b6d4` · `#000000` · `#60a5fa` · `#22d3ee` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #9ca3af;
  --color-accent: #34d399;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#9ca3af',
    accent: '#34d399',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give each plan a gradient border or button that matches its tier
- **Do:** Keep the highlighted plan's button as a blue-to-cyan gradient
- **Do:** Use green (#34d399) for feature check marks only
- **Don't:** Don't use gradient fills for body text
- **Don't:** Don't put more than one gradient button in the same row
- **Don't:** Don't lighten the black ground behind the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
