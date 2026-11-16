# Design system — Pricing Plans with Features

`SN-W04266` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, conventional pricing section on a pale blue-grey ground (#f6f9fc) with white plan cards. Indigo (#524acc) is used for check marks, the Most Popular tag and the call to action on the middle plan. Plain sans-serif text, a centred heading and generous padding give it a calm, sales-page tone that lets the price figures lead.

**Mood:** calm, light, tidy, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f9fc` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#524acc` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#524acc` · `#f6f9fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--fontFamily)
- **Body:** var(--fontFamily)

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f6f9fc;
  --color-text: #111111;
  --color-accent: #524acc;
  --font-display: "var(--fontFamily)", sans-serif;
  --font-body: "var(--fontFamily)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f9fc',
    ink: '#111111',
    accent: '#524acc',
  },
  fontFamily: { display: ['var(--fontFamily)'], sans: ['var(--fontFamily)'] },
} }
```

## Do and don't

- **Do:** Set the Most Popular tag and the highlighted plan's button in indigo (#524acc)
- **Do:** Place white plan cards on the pale ground (#f6f9fc) under a centred heading
- **Do:** Show price figures larger than the feature list so the cost reads first
- **Don't:** Don't use dark cards on the light ground
- **Don't:** Don't add a second accent colour to the plan cards
- **Don't:** Don't remove the centred heading and sub-line above the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
