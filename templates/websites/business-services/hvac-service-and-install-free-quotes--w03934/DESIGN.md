# Design system — HVAC Service & Install | Free Quotes

`SN-W03934` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A white page with a strong blue accent (#104cc5) used on the primary button and on the second part of the headline, which is set in a softened blue. DM Sans sets the headline and body at comfortable sizes, with plain navigation and a short list of trust points under the buttons. The hero photograph of a technician at an outdoor unit sits on the right, and the copy stays calm and practical.

**Mood:** calm, practical, clean, trustworthy, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fcfdff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#748394` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#104cc5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c6d3e2` · `#104cc5` · `#eaf1fa` · `#c6dcfa` · `#a8c9f5` · `#d5deea` · `#d3deed` · `#8bc5ff` · `#738294`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Manrope

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fcfdff;
  --color-text: #111111;
  --color-muted: #748394;
  --color-border: #ffffff;
  --color-accent: #104cc5;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fcfdff',
    ink: '#111111',
    muted: '#748394',
    line: '#ffffff',
    accent: '#104cc5',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the second part of the headline in blue, using the primary blue (#104cc5).
- **Do:** Use the solid blue button for the free-quote action and an outlined white button for the call.
- **Do:** Keep the hero photograph on the right half, with the copy on the white half.
- **Don't:** Don't use blue for body text; it marks the headline and the buttons.
- **Don't:** Don't add warm accent colours to the hero.
- **Don't:** Don't place more than one solid button on the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
