# Design system — Gaming Accelerator Marketing Landing Page Template

`SN-W01580` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `zh-CN`

## Direction

A deep navy ground (#030816) with large white headlines and cyan highlight words on the first line. A glowing neon ring and a rounded-square gamepad badge form the hero illustration, lit with cyan light. A gradient primary button and three bordered stat boxes below the copy give the page a game-launcher energy.

**Mood:** neon, game-launcher, energetic, dark, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030816` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffbb00` | Primary action and highlights |
| Second accent | `#ff3366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#030816` · `#ffbb00` · `#be3bff` · `#ff3366` · `#ff5500`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-cyber)
- **Body:** var(--font-cyber)
- **Loaded families:** Orbitron, Rajdhani

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030816;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffbb00;
  --color-accent-2: #ff3366;
  --font-display: "var(--font-cyber)", sans-serif;
  --font-body: "var(--font-cyber)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030816',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffbb00',
    accent2: '#ff3366',
  },
  fontFamily: { display: ['var(--font-cyber)'], sans: ['var(--font-cyber)'] },
} }
```

## Do and don't

- **Do:** Set headlines large in white, with one highlight word per line in cyan
- **Do:** Use the blue gradient for the primary button only
- **Do:** Set key figures in bordered boxes with large numerals and small captions
- **Don't:** Don't put the page on a white ground; it is navy
- **Don't:** Don't add more than one glowing illustration per screen
- **Don't:** Don't add light panels to the hero; the navy field carries the glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
