# Design system — Nutritionist Landing Page Template

`SN-W02492` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

This dashboard page has a left sidebar rail, white cards with thin coloured top rules, and a solid orange button in the header. Black text (#000000) is set in DM Sans. Figures are set large and bold, and the colour sits in the rules and the chart lines.

**Mood:** functional, airy, neutral, organised

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Syne, DM Mono, DM Sans

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set card figures in DM Sans at a large, bold size
- **Do:** Keep cards white and mark status with a thin coloured top rule
- **Do:** Keep navigation in the left sidebar with the active item in a soft grey fill
- **Don't:** Don't colour whole cards; colour belongs in the rules, chart lines and figures
- **Don't:** Don't use the black (#000000) as a large fill
- **Don't:** Don't move primary navigation into the page header

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
