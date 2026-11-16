# Design system — FoxClean Services Landing Page Template

`SN-W03913` · business-services · light mode · Sinera Atlas theme `route` · language `pl`

## Direction

A dark, direct page where a bright green accent does the emphasis work, applied to the closing phrase of the headline and to the primary quote button. Headlines are set large in a white sans with tight spacing, and a row of key figures beneath the buttons uses the same green. A faint outlined line graphic on the right adds structure without adding colour. The layout is built for a quick quote.

**Mood:** direct, energetic, clean, functional, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#e8dbb0` | Primary action and highlights |

Palette by frequency of use: `#d8cfa8` · `#e8dbb0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Archivo Black, Inter, IBM Plex Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #e8dbb0;
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
    accent: '#e8dbb0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of each headline in the bright green accent and keep the rest in white.
- **Do:** Use the solid green button for the free-quote action and an outlined dark button for the phone call.
- **Do:** Show the key figures in the green accent in a row below the hero buttons.
- **Don't:** Don't add a second bright accent beside the green.
- **Don't:** Don't place outlined line graphics over the copy; keep them to the side of the hero.
- **Don't:** Don't switch the hero to a light ground; the dark field carries the green.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
