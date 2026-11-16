# Design system — Untitled Design

`SN-W04321` · other-landing · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A pale mint landing page with forest-green [#1f3b2c] headlines set in large serif capitals, and a short italic serif line above them. The hero is airy, with a single outlined button and a small arrow cue at the bottom, and a slanted line of product text drifts across the left edge as a quiet detail. Green on mint keeps the page calm and natural.

**Mood:** calm, natural, refined, airy, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dff5e9` | Page ground |
| Surface | `#1b2e23` | Cards, panels, raised areas |
| Text | `#1f3b2c` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#1f3b2c` | Primary action and highlights |
| Second accent | `#c97c5d` | Supporting highlights |

Palette by frequency of use: `#f7f1e8` · `#1f3b2c` · `#c97c5d` · `#22241f` · `#ffffff` · `#9ca3af` · `#dff5e9` · `#8fbfa2` · `#2c523e` · `#1b2e23`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Cormorant Upright
- **Scale (largest breakpoint):** body 9px
- **Letter spacing:** `tracking-[.18em]`, `tracking-[.22em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-3`, `gap-8`, `gap-1`

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #dff5e9;
  --color-surface: #1b2e23;
  --color-text: #1f3b2c;
  --color-muted: #9ca3af;
  --color-accent: #1f3b2c;
  --color-accent-2: #c97c5d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dff5e9',
    surface: '#1b2e23',
    ink: '#1f3b2c',
    muted: '#9ca3af',
    accent: '#1f3b2c',
    accent2: '#c97c5d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large serif capitals in forest green (#1f3b2c)
- **Do:** Use italic serif for the short lead line above the headline
- **Do:** Keep the hero button outlined and let whitespace carry the layout
- **Don't:** Don't use a saturated colour on the mint ground
- **Don't:** Don't set the drifting product text in a bold weight
- **Don't:** Don't fill the hero button; it stays outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
