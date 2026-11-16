# Design system — Artisan Jewelry & Ceramics Store Template

`SN-W02704` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Artisan jewellery and ceramics page whose hero is a soft grey-to-cream gradient, with light serif headlines set on top and a vertical, tracked wordmark running down the right edge. The type is light, the palette is near-neutral, and the page depends on airy spacing and slow motion rather than colour. The headline sits on a mid-tone part of the gradient, so its contrast is low in the captured frame.

**Mood:** airy, quiet, artisanal, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fbf9f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#2c3826` · `#fbf9f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Instrument Serif, Hanken Grotesk, Shippori Mincho

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fbf9f2;
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
    surface: '#fbf9f2',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in a light serif in cream or white over the soft gradient.
- **Do:** Keep the vertical wordmark thin and tracked, as a secondary graphic element.
- **Do:** Use a white pill for the primary button with dark text.
- **Don't:** Don't place headline text on the mid-grey part of the gradient without checking contrast.
- **Don't:** Don't add saturated colour; the palette is neutral, with only a dark olive (#2c3826) in the palette.
- **Don't:** Don't add a second decorative graphic beside the vertical wordmark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
