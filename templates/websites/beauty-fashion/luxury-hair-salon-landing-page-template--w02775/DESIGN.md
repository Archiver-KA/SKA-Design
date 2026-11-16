# Design system — Luxury Hair Salon Landing Page Template

`SN-W02775` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A stark salon page on a near-black ground. The hero headline is large uppercase sans with outlined (stroke-only) lines, the recognisable device. A ghost outlined nav button and a gold rule on the right edge carry the detail, and solid white is kept for the nav and body text.

**Mood:** stark, dark, graphic, outlined, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Playfair Display, Inter, Bebas Neue

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large uppercase with stroke-only lines for the key words.
- **Do:** Keep the ground near-black and use white for the wordmark, nav and body text.
- **Do:** Use a ghost outlined button for the nav call to action.
- **Don't:** Don't fill the outlined headline letters; the stroke is the effect.
- **Don't:** Don't set body copy in outline type; it becomes hard to read.
- **Don't:** Don't add solid colour blocks to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
