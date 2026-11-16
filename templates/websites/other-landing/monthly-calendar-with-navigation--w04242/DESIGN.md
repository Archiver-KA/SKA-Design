# Design system — Monthly Calendar with Navigation

`SN-W04242` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain dark calendar card on a charcoal ground (#1f1f1f), with a slightly lighter panel (#2a2a2a) holding the month grid. Weekday labels are small and muted, dates are white, and out-of-month days fade to grey. Blue (#3395ff) marks the single highlighted date and is the only colour, so the grid stays calm and easy to scan.

**Mood:** plain, calm, functional, charcoal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f1f1f` | Page ground |
| Surface | `#2a2a2a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#3395ff` | Primary action and highlights |

Palette by frequency of use: `#3395ff` · `#ffffff` · `#1f1f1f` · `#2a2a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Schedule (`schedule-agenda`)

## Motion, effects and stack

- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #1f1f1f;
  --color-surface: #2a2a2a;
  --color-text: #ffffff;
  --color-accent: #3395ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1f1f1f',
    surface: '#2a2a2a',
    ink: '#ffffff',
    accent: '#3395ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3395ff) for the selected date only
- **Do:** Keep the month grid on the #2a2a2a panel over the #1f1f1f ground
- **Do:** Set weekday labels small and muted, dates in white
- **Don't:** Don't use blue for the navigation arrows or the month title
- **Don't:** Don't fade in-month dates; only out-of-month days go grey
- **Don't:** Don't add a second highlight colour to the grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
