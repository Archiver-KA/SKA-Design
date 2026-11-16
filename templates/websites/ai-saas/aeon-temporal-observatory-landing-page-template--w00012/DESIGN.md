# Design system — AEON Temporal Observatory Landing Page Template

`SN-W00012` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black teal stage holds a giant light-weight counter, '00.0', in the lower left, with a small superscript unit beside it. Tiny widely tracked uppercase captions in the lower right give it an instrument-panel tone. The page is built around scroll-driven reveals of a number, so typography does the work and colour is almost absent.

**Mood:** cinematic, scientific, sparse, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#031218` | Page ground |
| Text | `#031218` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#031218`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--body)
- **Body:** var(--body)
- **Loaded families:** Space Grotesk, Inter, IBM Plex Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #031218;
  --color-text: #031218;
  --font-display: "var(--body)", sans-serif;
  --font-body: "var(--body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#031218',
    ink: '#031218',
  },
  fontFamily: { display: ['var(--body)'], sans: ['var(--body)'] },
} }
```

## Do and don't

- **Do:** Set key figures very large in a light-weight sans with small superscript units
- **Do:** Use small, widely tracked uppercase captions for status text
- **Do:** Keep the background as deep teal (#031218) with no other colour
- **Don't:** Don't add bright colours to the counter
- **Don't:** Don't crowd captions beside the large figure
- **Don't:** Don't set captions larger than body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
