# Design system — Kaltgrat Abfahrt Downhill Event Template

`SN-W03615` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, cinematic title screen built around one large, light-weight sans-serif wordmark centred in the frame. Small uppercase race details run in thin lines along the top and bottom edges, like broadcast captions. The design relies on empty space and restraint, so the wordmark does nearly all of the visual work, and a single highlighted start time is the only colour accent.

**Mood:** cinematic, technical, restrained, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Anybody, Archivo, Martian Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. 3D / canvas scene (`3d-canvas`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a light sans-serif at display size, centred with generous space around it
- **Do:** Keep race details as small uppercase lines at the top and bottom edges
- **Do:** Keep the highlighted start time as the only colour accent on the screen
- **Don't:** Don't place cards, borders or imagery behind the wordmark
- **Don't:** Don't enlarge the race details; they stay as captions
- **Don't:** Don't introduce a second accent colour for data

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
