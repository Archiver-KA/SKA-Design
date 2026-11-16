# Design system — Futuristic Sci-Fi Landing Page Template

`SN-W00413` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black page with a dense white dot field that forms a tunnel or portal, and a headline in a thin sans with generous spacing. Small, widely tracked uppercase labels carry the technical tone, and the mono face is used for these eyebrows rather than for the headline. Blue (#60a5fa) appears only as a few small indicator dots, so the page is almost monochrome.

**Mood:** minimal, immersive, monochrome, ethereal, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#60a5fa` | Primary action and highlights |

Palette by frequency of use: `#60a5fa` · `#93c5fd` · `#ffffff` · `#000000` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 72px · h2 14px
- **Weights in use:** light, extralight, thin
- **Letter spacing:** `tracking-[0.3em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Timeline (`timeline`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-accent: #60a5fa;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    accent: '#60a5fa',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set eyebrow labels in tracked uppercase monospace
- **Do:** Keep the headline in a thin weight at display size, centred
- **Do:** Use blue (#60a5fa) only for the small progress and indicator dots
- **Don't:** Don't add colour to the dot field; it stays white on black
- **Don't:** Don't set the headline in a heavy weight
- **Don't:** Don't place body text over the densest part of the dot field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
