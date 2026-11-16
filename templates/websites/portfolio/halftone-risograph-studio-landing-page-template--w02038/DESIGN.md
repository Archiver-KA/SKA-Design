# Design system — HALFTONE Risograph Studio Landing Page Template

`SN-W02038` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cream ground carries a dark navy button in the nav and a two-tone wordmark. The headline is a large serif in dark navy over three lines, with the word physical in pink (#ff8cc7) and a soft offset outline. A deep blue printed panel holds a square image, and the pink and blue inks supply the two-colour print effect.

**Mood:** print-like, playful, two-tone, artful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2c2744` | Page ground |
| Text | `#2c2744` | Headings and primary copy |
| Muted text | `#f6efff` | Secondary copy, captions |
| Accent | `#f8ecdd` | Primary action and highlights |
| Second accent | `#ff8cc7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#5c5570` · `#2c2744` · `#efe9f6` · `#f6efff` · `#453e57` · `#f7e7ee` · `#e9eef6` · `#f7f0d8` · `#e6efec`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Fraunces, Manrope

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #2c2744;
  --color-text: #2c2744;
  --color-muted: #f6efff;
  --color-accent: #f8ecdd;
  --color-accent-2: #ff8cc7;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2c2744',
    ink: '#2c2744',
    muted: '#f6efff',
    accent: '#f8ecdd',
    accent2: '#ff8cc7',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif in dark navy (#2c2744), with one pink (#ff8cc7) word
- **Do:** Use blue and pink as the only two inks in imagery and panels
- **Do:** Keep nav buttons dark navy pills with light text
- **Don't:** Don't add a third ink colour beside the navy, pink and blue
- **Don't:** Don't set body copy in the pink; it is for display words
- **Don't:** Don't drop the offset outline on the pink word; it is the print effect

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
