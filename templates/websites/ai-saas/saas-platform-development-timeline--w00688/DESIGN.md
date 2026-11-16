# Design system — SaaS Platform Development Timeline

`SN-W00688` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, roadmap-style page where a large sans title sits above a Gantt-like timeline of stacked grey bars. Phase labels run across the top, and the one active phase is set in a violet-to-cyan gradient bar that stands out from the grey. The page is quiet and technical, and that gradient is the only colour in the composition.

**Mood:** technical, dark, structured, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#374151` | Headings and primary copy |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#374151` · `#d1d5db` · `#60a5fa` · `#c084fc` · `#4ade80` · `#e5e7eb` · `#facc15` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #374151;
  --color-border: #374151;
  --color-accent: #c084fc;
  --color-accent-2: #4ade80;
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
    ink: '#374151',
    line: '#374151',
    accent: '#c084fc',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show phases as stacked rounded bars, with the active phase filled in a violet-to-cyan gradient
- **Do:** Keep inactive bars grey on the dark ground and reserve colour for the active phase
- **Do:** Set the title in a large sans with a small grey line of counts beneath it
- **Don't:** Don't set the timeline on a white ground; it is dark
- **Don't:** Don't use gradient fills for inactive bars; they stay flat grey
- **Don't:** Don't drop the phase labels across the top; they anchor the bars

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
