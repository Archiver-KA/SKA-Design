# Design system — Travel Booking Landing Page Template

`SN-W03145` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The page is light, with an offset hero image and a booking bar overlapping the base of the hero. Dark green (#173a2b) is the only accent colour, used for buttons and key marks.

**Mood:** editorial, light, quiet, direct, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#173a2b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#173a2b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Fraunces, Be Vietnam Pro
- **Scale (largest breakpoint):** h1 64px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #173a2b;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#173a2b',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Use the dark green (#173a2b) as the single accent for buttons and key marks
- **Do:** Set the hero image offset from the text column, with the booking bar overlapping its base
- **Do:** Keep headings in the body font variable so the type stays consistent
- **Don't:** Don't use the dark green as a page background; it is an accent
- **Don't:** Don't use purple or indigo; they do not belong to this design
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
