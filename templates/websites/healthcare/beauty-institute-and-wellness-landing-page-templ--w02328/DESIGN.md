# Design system — Beauty Institute & Wellness Landing Page Template

`SN-W02328` · healthcare · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A calm French institute page on pure white (#ffffff) with warm dark-brown text (#2e2a27) and a terracotta (#c8927a) accent. The headline is a large serif with its middle phrase in italic terracotta, and the hero uses a four-tile mosaic of soft peach and taupe photography. Terracotta appears only in the italic phrase, the primary button and small labels, so colour stays warm and sparse.

**Mood:** warm, refined, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#2e2a27` | Headings and primary copy |
| Accent | `#c8927a` | Primary action and highlights |

Palette by frequency of use: `#c8927a` · `#2e2a27` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Cormorant Garamond, Nunito Sans
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-[0.14em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-10`, `gap-x-10`, `gap-y-10`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Timeline (`timeline`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #2e2a27;
  --color-accent: #c8927a;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#2e2a27',
    accent: '#c8927a',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the middle phrase of each headline in italic terracotta (#c8927a).
- **Do:** Use a solid terracotta button for the primary action with white uppercase text.
- **Do:** Build hero imagery as a grid of soft, tonal tiles rather than single photos.
- **Don't:** Don't use saturated colours beyond the terracotta.
- **Don't:** Don't set headlines in sans-serif; they are serif.
- **Don't:** Don't add shadows to the image tiles; they sit flat against the white page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
