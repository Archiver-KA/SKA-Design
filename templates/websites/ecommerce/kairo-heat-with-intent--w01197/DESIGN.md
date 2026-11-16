# Design system — KAIRO — Heat With Intent

`SN-W01197` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A cream ground (#f4efe6) carries near-black type (#141210) and a single red accent (#c8392a), set in Manrope. The page loads GSAP, Three.js and Lenis for scroll and 3D motion, and the stance is high-contrast and editorial with a strong red moment.

**Mood:** high-contrast, minimal, warm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4efe6` | Page ground |
| Text | `#141210` | Headings and primary copy |
| Border | `#f4efe6` | Hairlines, dividers, outlines |
| Accent | `#c8392a` | Primary action and highlights |

Palette by frequency of use: `#f4efe6` · `#141210` · `#0d0b0a` · `#c8392a` · `#141212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Noto Sans JP

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f4efe6;
  --color-text: #141210;
  --color-border: #f4efe6;
  --color-accent: #c8392a;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4efe6',
    ink: '#141210',
    line: '#f4efe6',
    accent: '#c8392a',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the red (#c8392a) for one highlight per section, not for large fields.
- **Do:** Pair the cream ground (#f4efe6) with near-black type (#141210) as the default.
- **Do:** Keep Manrope for headlines and body text.
- **Don't:** Don't add grey tints that compete with the cream ground; the palette is cream, black and red.
- **Don't:** Don't use drop shadows.
- **Don't:** Don't use the red for body text or large fields.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
