# Design system — AI Cloud Platform Landing Page Template

`SN-W00068` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, almost black page carries a large white sans headline whose second line is set in blue, above a thin grey subline. A small pill notice sits above the headline, and dark pill buttons carry the actions: a light primary and a dark outlined secondary. Blue carries the emphasis, and the page is restrained.

**Mood:** restrained, dark, technical, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in blue
- **Do:** Keep the ground dark with white headlines
- **Do:** Use a light pill for the primary button
- **Don't:** Don't use a light page treatment
- **Don't:** Don't use the green (#34d399) for large headline text
- **Don't:** Don't add a second colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
