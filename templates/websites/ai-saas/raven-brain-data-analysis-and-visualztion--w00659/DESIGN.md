# Design system — RAVEN BRAIN Data Analysis & Visualztion

`SN-W00659` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal AI-platform hero on a near-black ground. A centred, bold sans headline runs over two lines, with the second line in a bright blue, and a small outlined pill badge sits above it. Ornament is limited to two buttons and a sparse navigation bar, leaving the type to carry the page.

**Mood:** minimal, technical, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #34d399;
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
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero and keep the headline to two lines, with the second line in the accent blue
- **Do:** Use Inter throughout and let weight do the hierarchy
- **Do:** Keep the pill badge small and outlined above the headline
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't fill the background with imagery; the page relies on empty dark space
- **Don't:** Don't set the page on a white ground; it is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
