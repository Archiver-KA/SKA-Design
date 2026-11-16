# Design system — Customer Feedback Integration Panel

`SN-W04179` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark dashboard-style hero on near-black (#0a0a0a), with a bold white headline and grey body copy. Floating cards show a sample message, a status pill and a project panel, built from dark grey (#161616) surfaces with rounded corners. Green (#22c55e) marks success states and yellow (#eab308) marks in-progress states, which gives the page its only colour.

**Mood:** dark, structured, data-led, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#6b7280` · `#161616` · `#d1d5db` · `#374151` · `#e5e7eb` · `#22c55e` · `#262626` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · h3 16px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

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
  --color-background: #0a0a0a;
  --color-surface: #161616;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #262626;
  --color-accent: #22c55e;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#161616',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#262626',
    accent: '#22c55e',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#22c55e) for success states and yellow (#eab308) for in-progress states.
- **Do:** Set the headline in bold Inter, large and tight.
- **Do:** Keep floating panels in #161616 with rounded corners.
- **Don't:** Don't use green or yellow for decoration or body text.
- **Don't:** Don't set body copy in pure white.
- **Don't:** Don't add a light background to the panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
