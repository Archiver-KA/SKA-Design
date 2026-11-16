# Design system — Digital Experience Studio Landing Page Template

`SN-W01984` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a very large, centred heavy sans wordmark in off-white, softly glowing, and a lime-yellow accent (#c8ff00) reserved for the single top-right call to action. The nav is small and uppercase.

**Mood:** bold, glowing, minimal, lime-accented, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#c8ff00` | Primary action and highlights |

Palette by frequency of use: `#c8ff00`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syne, Space Grotesk
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 16px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #c8ff00;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#c8ff00',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the lime (#c8ff00) to the single top-right call to action
- **Do:** Set the wordmark very large and centred in a heavy sans
- **Do:** Add a soft glow only to the wordmark, not to the navigation
- **Don't:** Don't set body text in lime; it is a single accent
- **Don't:** Don't add a second accent colour beside the lime
- **Don't:** Don't put the wordmark on a light box.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
