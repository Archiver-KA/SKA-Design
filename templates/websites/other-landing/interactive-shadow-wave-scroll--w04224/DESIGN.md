# Design system — Interactive Shadow Wave Scroll

`SN-W04224` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic scroll page on near-black (#0f0f0f) where the first screen is mostly atmosphere. Thin, blurred wave lines sit behind a large serif headline in soft grey, so the type reads as a quiet title rather than a call to action. The design depends on motion and light rather than colour, with the text set in light off-white (#f5f5f5).

**Mood:** cinematic, quiet, dark, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0f0f0f` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Video / media (`video-media`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-text: #f5f5f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #0f0f0f with only off-white text
- **Do:** Set headlines in a serif face at large size with low contrast
- **Do:** Let the wave graphics carry the visual interest, not added colour
- **Don't:** Don't add accent colours; the page has none in its palette
- **Don't:** Don't use bright, high-contrast headlines that compete with the wave background
- **Don't:** Don't add opaque boxes behind the headline; the wave shows through

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
