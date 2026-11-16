# Design system — FORGEE Elite Gym & Performance Template

`SN-W02620` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark, photo-led gym hero in Portuguese. Three white uppercase Inter lines sit over a dimmed gym photograph, with the final phrase in orange, and a dark header carries an orange button. The black ground with white type makes the page read as dark-first.

**Mood:** dark, photographic, uppercase, direct, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#2a2a2a` · `#d9d9d9` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Saira Condensed

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #2a2a2a;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#2a2a2a',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase Inter in white, with the last phrase in orange.
- **Do:** Keep the headline on the near-black ground (#0a0a0a).
- **Do:** Keep the photograph dimmed behind the headline.
- **Don't:** Don't set the white headline on a white ground; the page is dark.
- **Don't:** Don't set body copy in uppercase.
- **Don't:** Don't use the photograph at full brightness behind text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
