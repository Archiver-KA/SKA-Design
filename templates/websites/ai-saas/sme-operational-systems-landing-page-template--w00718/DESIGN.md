# Design system — SME Operational Systems Landing Page Template

`SN-W00718` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, operational hero: a charcoal ground (#2a3035) with a very large, tightly set bold white headline whose last phrase fades to grey. The right side holds a live-view workflow panel of stacked dark rows with small grey labels and status markers, and three metrics sit along the foot.

**Mood:** operational, dense, serious, monochrome, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2a3035` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#2a3035` · `#485742` · `#ffffff` · `#f0efeb` · `#e5e5e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2a3035;
  --color-text: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2a3035',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large and bold in white, letting the last phrase fade to grey.
- **Do:** Build proof panels as dark rows with small grey labels and one status marker each.
- **Do:** Set the foot-of-hero metrics as bold white numbers with small grey captions.
- **Don't:** Don't put this on a white ground; the hero is dark.
- **Don't:** Don't add bright colour fills; keep the status markers as the only colour.
- **Don't:** Don't use a solid light header over the dark hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
