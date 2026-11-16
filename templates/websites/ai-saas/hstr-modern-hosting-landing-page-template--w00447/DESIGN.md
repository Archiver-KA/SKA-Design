# Design system — HSTR Modern Hosting Landing Page Template

`SN-W00447` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A plain, trade-focused German construction page on a light, cool grey-blue ground with heavy near-black headlines. Blue and amber carry the emphasis: a blue headline phrase, an amber call-to-action button and an amber rule under the heading. Inter at large size does the rest, and photo cards and the cookie panel add structure. The tone is direct, sober and confident.

**Mood:** sober, direct, trade-focused, light, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#2a9d4f` | Primary action and highlights |
| Second accent | `#cfd8e6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cfd8e6` · `#16a34a` · `#2a9d4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Map / location (`map-location`)
5. FAQ (`faq`)
6. Modal / overlay (`modal-overlay`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #2a9d4f;
  --color-accent-2: #cfd8e6;
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
    accent: '#2a9d4f',
    accent2: '#cfd8e6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in the blue accent and keep the rest near-black
- **Do:** Use the amber button as the only saturated button on a screen
- **Do:** Keep headlines left-aligned on the light ground with a rule beneath them
- **Don't:** Don't use green as the main accent; blue and amber carry the emphasis
- **Don't:** Don't place decorative icons or gradients behind headlines
- **Don't:** Don't set German headlines in more than two weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
