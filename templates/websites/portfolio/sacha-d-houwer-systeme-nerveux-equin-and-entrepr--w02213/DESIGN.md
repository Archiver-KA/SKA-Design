# Design system — Sacha D'Houwer - Système nerveux équin & entreprenariat

`SN-W02213` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A warm, human storytelling hero on a light off-white ground. The headline is a large serif in near-black, with the closing phrase in italic terracotta, and a rounded photograph of a horse and rider fills the right column. The terracotta button echoes the italic, so the page feels calm and personal, with the photo doing the emotional work.

**Mood:** warm, human, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Hanken Grotesk
- **Body:** Hanken Grotesk
- **Loaded families:** Fraunces, Hanken Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Pricing (`pricing`)
5. Schedule (`schedule-agenda`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "Hanken Grotesk", sans-serif;
  --font-body: "Hanken Grotesk", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['Hanken Grotesk'], sans: ['Hanken Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif with the closing phrase in italic terracotta
- **Do:** Use the terracotta button for the primary call to action only
- **Do:** Keep the photo as a rounded rectangle beside the headline
- **Don't:** Don't put terracotta on large background areas
- **Don't:** Don't swap the serif headings for a grotesque sans
- **Don't:** Don't crop the photo so the horse's head is lost

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
