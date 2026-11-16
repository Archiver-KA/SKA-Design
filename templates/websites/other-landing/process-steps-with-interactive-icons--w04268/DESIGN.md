# Design system — Process Steps with Interactive Icons

`SN-W04268` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy process section with a centred blue heading and a short rule beneath it. Each step sits in a wide, low-contrast card with a numbered badge and an icon tile, so the sequence reads from top to bottom. The layout is plain and even: body text is light grey, and blue is kept for titles and step numbers.

**Mood:** orderly, calm, dark, sequential

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#334155` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0f172a` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-current-main)
- **Body:** var(--font-current-main)
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #0f172a;
  --color-border: #334155;
  --font-display: "var(--font-current-main)", sans-serif;
  --font-body: "var(--font-current-main)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#0f172a',
    line: '#334155',
  },
  fontFamily: { display: ['var(--font-current-main)'], sans: ['var(--font-current-main)'] },
} }
```

## Do and don't

- **Do:** Number each step in a small blue badge at the card's top-left corner
- **Do:** Keep step cards as wide, low-contrast panels with a thin border
- **Do:** Set section titles in blue and body copy in a light grey
- **Don't:** Don't switch the steps to a light background
- **Don't:** Don't use bright fills for the step cards; keep them close to the ground colour
- **Don't:** Don't drop the numbered badges from the steps

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
