# Design system — Humanoid Robotics Landing Page Template

`SN-W00450` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light grey page carries a large, bold sans wordmark and a small, widely spaced loading label. The template is built on Tailwind, Three.js and React and uses a variable display font for its headings.

**Mood:** minimal, light, undetermined, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f2f0eb` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#f2f0eb` · `#ededef` · `#fdfdfd` · `#f4f4f6` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--disp)
- **Body:** var(--disp)
- **Loaded families:** Inter Tight, DM Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f2f0eb;
  --color-text: #111111;
  --font-display: "var(--disp)", sans-serif;
  --font-body: "var(--disp)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f2f0eb',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--disp)'], sans: ['var(--disp)'] },
} }
```

## Do and don't

- **Do:** Keep any wordmark large and bold on the light grey ground
- **Do:** Use small, widely spaced capitals for secondary labels
- **Do:** Keep the wordmark as the focal element on the light grey ground
- **Don't:** Don't add an accent colour to the light grey ground
- **Don't:** Don't treat the loading screen as a finished layout
- **Don't:** Don't add colour to the loading screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
