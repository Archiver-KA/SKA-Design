# Design system — Interactive WebGL Shader Circle

`SN-W04230` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single, fullscreen glowing ring on near-black (#111111), built from several thin stacked lines that shift in colour from violet to blue. The ring is the whole composition, with no headings, text or cards on the first screen. Its look depends on glow and thinness, so the surrounding space stays empty and dark.

**Mood:** minimal, luminous, abstract, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #f5f5f5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the canvas empty around the ring and the ground dark
- **Do:** Use thin, layered strokes with a soft glow rather than solid fills
- **Do:** Let the ring's colour shift between violet and blue as the only colour
- **Don't:** Don't place text or cards over the ring
- **Don't:** Don't add a light background; the glow needs darkness
- **Don't:** Don't thicken the strokes into solid shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
