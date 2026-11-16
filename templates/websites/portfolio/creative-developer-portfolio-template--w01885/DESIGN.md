# Design system — Creative Developer Portfolio Template

`SN-W01885` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet white page where a large, tightly set headline in a high-contrast serif leads the editorial tone. Body copy is grey and short-measured, and one solid black rectangular button is the only strong shape. An abstract image sits in a hairline frame with a small circular text badge.

**Mood:** quiet, editorial, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Case studies (`case-studies`)
7. Services (`services`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the primary button a solid black rectangle with square corners.
- **Do:** Set body copy in grey at a short measure with generous line height.
- **Do:** Frame the image in a hairline border with the circular badge at its corner.
- **Don't:** Don't round the buttons; the design uses square corners.
- **Don't:** Don't add colour; the page stays black, white and grey.
- **Don't:** Don't add a decorative second typeface beside the headline serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
