# Design system — Retna Agency Modern Digital Template

`SN-W01676` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

Light agency page built on near-black heavy sans headlines and one orange accent (#f97316). The orange is kept to the primary button and one highlighted headline phrase, so emphasis comes from colour, not decoration. Below the hero, cropped website mockups show the work.

**Mood:** bold, direct, clean, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#535760` | Headings and primary copy |
| Border | `#c8c8c8` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1d2230` · `#050505` · `#111111` · `#bbbbbb` · `#131313` · `#c8c8c8` · `#d9d9d9` · `#535760` · `#282b33`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #535760;
  --color-border: #c8c8c8;
  --color-accent: #f97316;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#535760',
    line: '#c8c8c8',
    accent: '#f97316',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy sans with tight leading, in near-black.
- **Do:** Use the orange (#f97316) only for the primary button and one highlighted phrase per hero.
- **Do:** Keep the hero on a plain white ground with no gradients.
- **Don't:** Don't use the orange for body text or large background fills.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't set the hero headline in a serif or a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
