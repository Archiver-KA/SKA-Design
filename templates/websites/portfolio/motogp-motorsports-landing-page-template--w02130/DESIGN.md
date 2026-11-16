# Design system — MotoGP Motorsports Landing Page Template

`SN-W02130` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A high-performance dark page (#0a0a0a) where one racing red (#c91e16) does most of the work: the second headline line, the logo mark, the primary button and some spec units. Headlines are large uppercase sans in white, set in stacked lines, with a bold row of specs beneath them. A thin grey ticker along the bottom edge adds motion without adding colour.

**Mood:** aggressive, high-contrast, sporty, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#555555` | Hairlines, dividers, outlines |
| Accent | `#c91e16` | Primary action and highlights |
| Second accent | `#e2231a` | Supporting highlights |

Palette by frequency of use: `#0a0a0a` · `#c91e16` · `#4caf50` · `#050505` · `#1a1a1a` · `#555555` · `#1a3278` · `#e2231a` · `#c8ff00`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow
- **Body:** Barlow
- **Loaded families:** Bebas Neue, Barlow Condensed, Barlow

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Articles (`blog-articles`)
5. Services (`services`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  --color-muted: #555555;
  --color-border: #555555;
  --color-accent: #c91e16;
  --color-accent-2: #e2231a;
  --font-display: "Barlow", sans-serif;
  --font-body: "Barlow", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    ink: '#f5f5f5',
    muted: '#555555',
    line: '#555555',
    accent: '#c91e16',
    accent2: '#e2231a',
  },
  fontFamily: { display: ['Barlow'], sans: ['Barlow'] },
} }
```

## Do and don't

- **Do:** Use red (#c91e16) for the second headline line, the logo and one primary button per screen.
- **Do:** Set headlines in uppercase white with tight stacked lines.
- **Do:** Show key specs as a bold row of figures, with small units picked out in red.
- **Don't:** Don't use the lime (#c8ff00) as an accent; red is the only accent.
- **Don't:** Don't set long body copy in red.
- **Don't:** Don't put light panels in the hero; the black ground is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
