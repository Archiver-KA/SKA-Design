# Design system — History Study Guide Landing Page Template

`SN-W03477` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A classroom-style study guide on a cream ground, with a full-width red header band carrying a large serif title. Each unit opens with a pale yellow banner, followed by numbered cards with a red numeral, a quote block with a left rule, and key points that each start with a small icon. The layout is plain, long-form and easy to scan.

**Mood:** plain, scannable, classroom, warm, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff8e1` | Page ground |
| Surface | `#ffe5e5` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#fff8e1` · `#ffe5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #fff8e1;
  --color-surface: #ffe5e5;
  --color-text: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff8e1',
    surface: '#ffe5e5',
    ink: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a full-width red header band for the title of each study guide
- **Do:** Open each unit with a pale banner and number its cards in red
- **Do:** Mark quotes with a left rule and set key points as icon-led lines
- **Don't:** Don't use more than one red in one section
- **Don't:** Don't add photographs to the study cards
- **Don't:** Don't drop the unit banner; every unit opens with one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
