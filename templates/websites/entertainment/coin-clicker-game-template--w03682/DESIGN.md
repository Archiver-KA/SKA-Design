# Design system — Coin Clicker Game Template

`SN-W03682` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy game screen with a large amber title and a stacked column of upgrade cards at the right. The main coin is a shaded orange disc in the lower left, so the eye moves from the total to the coin to the upgrades. Stats sit in small cards with large numerals, and the palette is limited to navy, white and amber.

**Mood:** playful, clean, focused, incremental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Use white for the stat numbers and headings on the navy background
- **Do:** Keep upgrade cards as stacked panels, each with a title, a cost and one number
- **Do:** Use the orange coin as the only large graphic
- **Don't:** Don't place light cards on the navy background
- **Don't:** Don't add more than one highlight colour to the panels
- **Don't:** Don't set upgrade costs in a lighter weight than the titles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
