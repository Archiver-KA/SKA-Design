# Design system — Architecture & Interior Design Agency Template

`SN-W03184` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black-and-white photographic page where a full-bleed portrait carries the design, with the wordmark set very large along the bottom edge. Small uppercase captions and short body copy sit in the corners, in white on dark grey. The restraint is absolute: no colour and no accent, and the type stays small so the image dominates.

**Mood:** monochrome, cinematic, artful, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e8e6df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#555555` · `#000000` · `#aaaaaa` · `#999999` · `#101010` · `#e8e6df` · `#151515` · `#dedcd4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Testimonials (`testimonials`)
6. Awards / press (`awards-press`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e8e6df;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e8e6df',
    ink: '#ffffff',
    muted: '#555555',
    line: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use full-bleed black-and-white photography as the hero
- **Do:** Set the wordmark very large at the bottom edge in white
- **Do:** Keep captions small and uppercase in the corners
- **Don't:** Don't introduce colour into the photography or the UI
- **Don't:** Don't set body copy larger than the captions
- **Don't:** Don't place body text over the subject's face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
