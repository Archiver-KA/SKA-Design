# Design system — Virtual Reality Landing Page UI

`SN-W04333` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark landing page on near-black with a glowing violet light trail sweeping behind a centred white headline. The headline sits inside a thin translucent frame with a small outlined button beneath, and a row of three feature cards with white icons follows. The violet light is the one decorative element, so the text stays crisp against the dark ground.

**Mood:** immersive, dark, futuristic, glowing, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#181025` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#181025` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`
- **Common gaps:** `gap-8`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #181025;
  --color-surface: #000000;
  --color-text: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#181025',
    surface: '#000000',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the glowing violet light behind the hero and away from the text
- **Do:** Frame the hero headline with a thin translucent border and rounded-3xl corners
- **Do:** Use outlined buttons with white labels for the hero action
- **Don't:** Don't place the glow behind feature card text
- **Don't:** Don't use a light background anywhere on the page
- **Don't:** Don't add a second glow colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
