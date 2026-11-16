# Design system — SEO and Marketing Agency Landing Page Template

`SN-W01692` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `uk`

## Direction

A near-white hero with a near-black sans headline in a tight stack and a short grey sub-line. A search-style lead form sits in one white row with a blue submit button. Small green ticks under the form list the offer, so the page works as a lead capture first.

**Mood:** clean, light, functional, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#1f2410` | Cards, panels, raised areas |
| Text | `#121212` | Headings and primary copy |
| Muted text | `#8f8b85` | Secondary copy, captions |
| Border | `#555555` | Hairlines, dividers, outlines |
| Accent | `#8fb7ff` | Primary action and highlights |

Palette by frequency of use: `#8f8b85` · `#121212` · `#8fb7ff` · `#1f2410` · `#2a2a2a` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Onest, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #1f2410;
  --color-text: #121212;
  --color-muted: #8f8b85;
  --color-border: #555555;
  --color-accent: #8fb7ff;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#1f2410',
    ink: '#121212',
    muted: '#8f8b85',
    line: '#555555',
    accent: '#8fb7ff',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the hero light with a near-black headline in a tight stack.
- **Do:** Put the lead form in one white row with a single blue button.
- **Do:** Show proof points as small ticks under the form.
- **Don't:** Don't use a dark background for the hero.
- **Don't:** Don't add more than one button to the form row.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
