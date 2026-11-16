# Design system — Elevate Your Story with Brooklyn Ghostwriting

`SN-W04192` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A ghostwriting landing page with a large centred headline in white on a dark slate hero, followed by light sections on a pale blue-grey ground (#f7f9fc). The primary call to action is a rounded solid blue button (#0d6efd) with a soft glow beneath it, and Poppins sets every line in one family. The tone is confident and direct, with a clear shift from the dark hero to the light content.

**Mood:** confident, direct, bold, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f9fc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Accent | `#0d6efd` | Primary action and highlights |
| Second accent | `#ffc107` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d6efd` · `#666666` · `#0f172a` · `#f8fbff` · `#f7f9fc` · `#333333` · `#084298` · `#555555` · `#f9fbff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Feature grid (`features`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Benefits (`benefits`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f7f9fc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #666666;
  --color-accent: #0d6efd;
  --color-accent-2: #ffc107;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f9fc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#666666',
    accent: '#0d6efd',
    accent2: '#ffc107',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set headlines and body text in Poppins, centred in the hero
- **Do:** Use the solid blue (#0d6efd) for the primary call to action
- **Do:** Keep the hero to one headline, one line of copy and one button
- **Don't:** Don't add a second button colour that competes with the blue
- **Don't:** Don't use dark backgrounds in the light sections
- **Don't:** Don't set small body text on the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
