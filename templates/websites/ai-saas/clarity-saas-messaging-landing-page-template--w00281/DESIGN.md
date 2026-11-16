# Design system — Clarity SaaS Messaging Landing Page Template

`SN-W00281` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product-illustration component rather than a page: a near-black field holds a single detailed dark-grey handheld device render, centred and lit from above. The only colour is a small red-pink on the device's buttons, which is the accent. A faint grey monospaced caption runs along the bottom edge.

**Mood:** minimal, dark, object-led, retro

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#ff3a3a` | Primary action and highlights |

Palette by frequency of use: `#ff3a3a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #ff3a3a;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#ff3a3a',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Centre the single device render on a near-black field
- **Do:** Use the red-pink (#ff3a3a) only for the device's buttons and small highlights
- **Do:** Keep the bottom caption small and grey in monospace
- **Don't:** Don't add more colour to the render; the grey device is the look
- **Don't:** Don't set a light background behind the device
- **Don't:** Don't place text over the device screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
