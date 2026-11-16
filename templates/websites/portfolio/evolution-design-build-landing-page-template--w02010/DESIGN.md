# Design system — Evolution Design + Build Landing Page Template

`SN-W02010` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black stage carries a large white serif headline over four lines with one italic word for emphasis. A solid red button leads the actions, with an outlined button beside it, under a tracked uppercase nav. Thin rules and small uppercase labels give the page an architectural, editorial structure.

**Mood:** architectural, editorial, dark-hero, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Newsreader, Inter Tight

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif with one italic word for emphasis
- **Do:** Use the red primary button as the only saturated element in the hero
- **Do:** Keep navigation and labels in small tracked uppercase
- **Don't:** Don't set the hero on a light ground
- **Don't:** Don't set the headline in a sans; the serif is the look
- **Don't:** Don't add more than one saturated colour per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
