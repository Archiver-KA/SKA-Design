# Design system — SaaS Platform Development Timeline

`SN-W00689` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, glassmorphic timeline page with a large 'Nexa' title and a Spline 3D canvas. Translucent grey bars sit on a light ground, with one lilac bar near the bottom as the active phase.

**Mood:** glassy, light, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e9d5ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d1d5db` · `#e9d5ff` · `#e5e7eb` · `#60a5fa` · `#c084fc` · `#4ade80` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #e9d5ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#e9d5ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the Spline 3D canvas in the hero, with the title above the timeline
- **Do:** Keep timeline bars light and translucent, with soft lilac as the active colour
- **Do:** Use a large sans title with the phase row beneath it
- **Don't:** Don't show a loading or connection error in the hero
- **Don't:** Don't add glass blur on top of the 3D canvas without checking contrast
- **Don't:** Don't use grey bars as the active colour; soft lilac marks the active phase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
