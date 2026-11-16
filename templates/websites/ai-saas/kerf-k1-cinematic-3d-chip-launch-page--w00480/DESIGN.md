# Design system — Kerf K1: Cinematic 3D Chip Launch Page

`SN-W00480` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic, dark launch page for a fictional chip: a near-black navy ground with one electric blue (#2f9bff) for the power-on control and status text. The first screen is a probe-card loader with small, widely spaced capitals and a centred button. Type is set in the body face throughout, and the page leans on scroll-driven 3D rather than layout decoration. The mood is precise and technical.

**Mood:** precise, cinematic, technical, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#04101d` | Page ground |
| Surface | `#0a0e14` | Cards, panels, raised areas |
| Text | `#ecebe6` | Headings and primary copy |
| Muted text | `#a7a49c` | Secondary copy, captions |
| Border | `#34343a` | Hairlines, dividers, outlines |
| Accent | `#2f9bff` | Primary action and highlights |

Palette by frequency of use: `#ecebe6` · `#2f9bff` · `#ffffff` · `#cfe6ff` · `#1871d7` · `#04101d` · `#a7a49c` · `#1564be` · `#252421` · `#166ac9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--body)
- **Body:** var(--body)
- **Loaded families:** IBM Plex Sans Condensed, IBM Plex Sans, IBM Plex Mono, Michroma

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #04101d;
  --color-surface: #0a0e14;
  --color-text: #ecebe6;
  --color-muted: #a7a49c;
  --color-border: #34343a;
  --color-accent: #2f9bff;
  --font-display: "var(--body)", sans-serif;
  --font-body: "var(--body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#04101d',
    surface: '#0a0e14',
    ink: '#ecebe6',
    muted: '#a7a49c',
    line: '#34343a',
    accent: '#2f9bff',
  },
  fontFamily: { display: ['var(--body)'], sans: ['var(--body)'] },
} }
```

## Do and don't

- **Do:** Use electric blue (#2f9bff) for the power-on button and status text only
- **Do:** Set status labels in small, widely spaced capitals
- **Do:** Keep the loader centred on the near-black ground
- **Don't:** Don't add light panels to the loader
- **Don't:** Don't use more than one accent colour
- **Don't:** Don't put a bright colour behind the 3D scene

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
