# Design system — Full Stack Developer Portfolio Template

`SN-W02024` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm light grey ground (#e6e4dd) with a heavy black uppercase headline that fills the width in two stacked lines, FULLSTACK over DEVELOPER, set so large the letters reach the edges. A grey rectangle sits centre as an image placeholder, and a black tag with reversed text cuts across the right edge. Colour is black and beige only, so the poster-like type carries the whole page.

**Mood:** poster-like, stark, monochrome, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6e4dd` | Page ground |
| Surface | `#e8e6e1` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#0a0a0a` | Primary action and highlights |

Palette by frequency of use: `#737373` · `#000000` · `#525252` · `#e6e4dd` · `#a3a3a3` · `#262626` · `#e8e6e1` · `#0a0a0a` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Oswald, Space Mono
- **Scale (largest breakpoint):** body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e6e4dd;
  --color-surface: #e8e6e1;
  --color-text: #0a0a0a;
  --color-muted: #737373;
  --color-border: #000000;
  --color-accent: #0a0a0a;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6e4dd',
    surface: '#e8e6e1',
    ink: '#0a0a0a',
    muted: '#737373',
    line: '#000000',
    accent: '#0a0a0a',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy uppercase sans at full width, tight to the edges
- **Do:** Keep the palette to warm beige, black and grey
- **Do:** Use a black tag with reversed text to cut across the headline
- **Don't:** Don't add a coloured accent; the page is black and beige
- **Don't:** Don't soften the headline with a light weight
- **Don't:** Don't leave the grey image placeholder empty

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
