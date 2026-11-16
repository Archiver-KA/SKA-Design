# Design system — The Ark V2 on Pulsechain | DeFi

`SN-W01048` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light page with a heavy black headline in which the final phrase, Fully live., is set in orange and underlined, which is the single emphasis move. Numbered step chips in white pills form a row under the copy, and the stats below repeat the orange for large numerals. Orange is the one colour, used for the highlight, the stats and the toggle, which keeps the page direct and energetic.

**Mood:** direct, energetic, clean, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Accent | `#ffbd2e` | Primary action and highlights |
| Second accent | `#ff5f56` | Supporting highlights |

Palette by frequency of use: `#ff5f56` · `#ffbd2e` · `#27c93f` · `#000000` · `#ff5f70`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Syne, DM Mono, DM Sans

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-accent: #ffbd2e;
  --color-accent-2: #ff5f56;
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
    accent: '#ffbd2e',
    accent2: '#ff5f56',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set one phrase per headline in orange and underline it
- **Do:** Use white pill chips with a small numeral for process steps
- **Do:** Use orange only for large stat numerals and the primary action
- **Don't:** Don't use the yellow (#ffbd2e) from the palette as an accent; the page uses orange
- **Don't:** Don't add a second accent colour beside the orange
- **Don't:** Don't set the stat labels in orange; only the numerals take it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
