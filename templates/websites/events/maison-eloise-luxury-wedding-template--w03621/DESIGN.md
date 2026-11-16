# Design system — Maison Éloïse Luxury Wedding Template

`SN-W03621` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm wedding layout built on a full-bleed photograph of a couple, with a cream card overlaid on its left side holding a large serif headline. The italic phrase in the headline and the primary button use a terracotta-coral accent, the only saturated colour on the page. Small spaced capitals label the sections, and the card's thin inner frame gives the hero a considered, printed feel.

**Mood:** romantic, warm, refined, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf9` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#fce2d6` | Primary action and highlights |

Palette by frequency of use: `#fff7f2` · `#fff9f4` · `#fffdf9` · `#f7f0e8` · `#fce2d6` · `#f3ebe2` · `#b8aba0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Cormorant Garamond, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Listings (`listings`)
8. Process / steps (`how-it-works`)
9. Testimonials (`testimonials`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #fffdf9;
  --color-text: #111111;
  --color-accent: #fce2d6;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf9',
    ink: '#111111',
    accent: '#fce2d6',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, with one italic phrase in the terracotta accent
- **Do:** Keep the terracotta accent to the primary button and one highlight per section
- **Do:** Place hero text on a cream card with a thin inner border over the photograph
- **Don't:** Don't use the accent colour for body text
- **Don't:** Don't put text directly on the photograph without the cream card
- **Don't:** Don't replace the warm cream tones with cool greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
