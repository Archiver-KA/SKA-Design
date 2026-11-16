# Design system — Prop Trading World Cup Landing Page Template

`SN-W01020` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark tournament page on deep navy-black has a neon cyan title set in a bold condensed sans and a glowing cyan call to action with angled corners. A large countdown in cyan digits sits under the title, with small uppercase grey stats below. The look is esports-like and urgent, with glow used for emphasis across the hero.

**Mood:** esports, urgent, neon, bold, competitive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#ffc400` | Primary action and highlights |
| Second accent | `#ff4466` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffc400` · `#00ff9d` · `#ff4466` · `#000000` · `#ffd740` · `#ff4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rajdhani
- **Body:** Rajdhani
- **Loaded families:** Rajdhani, Orbitron, Share Tech Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Menu list (`menu-list`)
2. Articles (`blog-articles`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. About (`about`)
6. Product grid (`product-grid`)
7. Stats band (`stats`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-accent: #ffc400;
  --color-accent-2: #ff4466;
  --font-display: "Rajdhani", sans-serif;
  --font-body: "Rajdhani", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    accent: '#ffc400',
    accent2: '#ff4466',
  },
  fontFamily: { display: ['Rajdhani'], sans: ['Rajdhani'] },
} }
```

## Do and don't

- **Do:** Set the title and countdown in neon cyan with a soft glow.
- **Do:** Keep the call to action as a cyan block with angled corners.
- **Do:** Set the small stats in uppercase grey, separated by dots.
- **Don't:** Don't use a light background in the hero.
- **Don't:** Don't add serif type.
- **Don't:** Don't use more than one neon colour in the same block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
