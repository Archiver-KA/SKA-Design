# Design system — Multi-Section Website Footer Layout

`SN-W04028` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A quiet footer component on a pure black ground, arranged in four columns of grey links with white column headings. Icons and contact details pick up a soft indigo accent, and a hairline divider separates the legal row at the bottom. Nothing is boxed or filled, so the footer reads as plain, orderly text.

**Mood:** quiet, orderly, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#9ca3af` | Headings and primary copy |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#818cf8` · `#ffffff` · `#000000` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Section padding:** `py-16`
- **Common gaps:** `gap-12`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #9ca3af;
  --color-accent: #818cf8;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#9ca3af',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep link text in grey (#9ca3af) and column headings in white
- **Do:** Use indigo (#818cf8) for icons and contact details only
- **Do:** Separate the legal row with a hairline divider
- **Don't:** Don't add background fills or boxes to the footer
- **Don't:** Don't use the accent for link text
- **Don't:** Don't add more than four columns

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
