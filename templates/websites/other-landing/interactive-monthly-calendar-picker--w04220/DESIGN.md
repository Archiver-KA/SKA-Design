# Design system — Interactive Monthly Calendar Picker

`SN-W04220` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark calendar popover on a black ground (#09090b), with a zinc panel (#18181b), a month heading in light grey and day numbers in near-white. Weekday labels are small and muted, and today is marked by a thin outline. Indigo (#818cf8) appears only on the Today link in the footer, and the grid is tight with rounded corners and no heavy borders.

**Mood:** minimal, dark, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#a1a1aa` · `#27272a` · `#e4e4e7` · `#09090b` · `#18181b` · `#818cf8` · `#a5b4fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-xl`

## Page structure

Blocks in page order:

1. Schedule (`schedule-agenda`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #818cf8;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Mark today with a thin outline rather than a fill
- **Do:** Use indigo (#818cf8) for the footer Today link only
- **Do:** Set weekday labels small and muted above the grid
- **Don't:** Don't fill today's cell; the outline is the only marker
- **Don't:** Don't use a light popover on the black ground
- **Don't:** Don't add extra colours to the day grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
