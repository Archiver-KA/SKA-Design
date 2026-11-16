# Design system — Vesper Space Observatory Landing Page Template

`SN-W00806` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal observatory landing page: one large centred wordmark in white, a tiny letter-spaced subtitle and a scroll cue, with no decorative colour. The emptiness is the design, so the page relies on spacing and white type. The ground is near-black, so the stance is dark.

**Mood:** minimal, dark, spacious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#2a2440`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syne, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, React

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Centre one large wordmark with generous space around it
- **Do:** Set small subtitles in wide letter-spacing in muted grey
- **Do:** Keep the page free of colour and rely on white type
- **Don't:** Don't add accent colours to the hero
- **Don't:** Don't fill the first screen with imagery or cards
- **Don't:** Don't set the hero text in lowercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
