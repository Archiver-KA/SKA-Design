# Design system — Neon Restoration Portfolio Template

`SN-W02139` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dim, cinematic restoration studio page on a near-black plum ground (#17141a), with a recessed darker panel (#0d0c10) holding a fuse-box style diagram of six vertical slots. Labels are tiny, tracked and grey, and a single coral figure (#ff6b59) marks the live status. Colour is kept to warm highlights, so the page feels like a lit instrument panel rather than a gallery.

**Mood:** moody, cinematic, dark, industrial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#17141a` | Page ground |
| Surface | `#0d0c10` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fff7f3` | Secondary copy, captions |
| Accent | `#ff6b59` | Primary action and highlights |
| Second accent | `#ffe5a5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#17141a` · `#fff7f3` · `#0d0c10` · `#0b0a0d` · `#090d16` · `#e0bb67` · `#ffe5a5` · `#edffff` · `#fff8f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--body)
- **Body:** var(--body)
- **Loaded families:** Anybody, Bebas Neue, Bodoni Moda, Fraunces, Manrope, Michroma

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. 3D / canvas scene (`3d-canvas`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #17141a;
  --color-surface: #0d0c10;
  --color-text: #ffffff;
  --color-muted: #fff7f3;
  --color-accent: #ff6b59;
  --color-accent-2: #ffe5a5;
  --font-display: "var(--body)", sans-serif;
  --font-body: "var(--body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#17141a',
    surface: '#0d0c10',
    ink: '#ffffff',
    muted: '#fff7f3',
    accent: '#ff6b59',
    accent2: '#ffe5a5',
  },
  fontFamily: { display: ['var(--body)'], sans: ['var(--body)'] },
} }
```

## Do and don't

- **Do:** Set the page on near-black (#17141a) with panels one step darker (#0d0c10).
- **Do:** Use coral (#ff6b59) for one live status or highlight per section.
- **Do:** Set small labels in tracked uppercase grey, with numbered slots as the diagram language.
- **Don't:** Don't put coral on large text blocks or buttons.
- **Don't:** Don't lighten the ground toward grey; the plum-black base carries the mood.
- **Don't:** Don't add ornate frames; the panels are plain rectangles.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
