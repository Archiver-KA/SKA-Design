# Design system — Morpheye — Automated Prediction Market Trading Template

`SN-W00999` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, tool-like trading page: a near-black (#050505) ground with white and grey text, and a bright cyan (#00e5ff) used for the headline phrase and the primary command button. The primary button carries a shell command as its label, which sets a developer tone. A row of large figures with small captions sits below, so the page reads as an instrument rather than a marketing site.

**Mood:** technical, dark, terminal, precise, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Accent | `#00e5ff` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#000000` · `#4ade80` · `#f87171` · `#9ca3af` · `#050505` · `#fcd34d` · `#00e5ff` · `#60a5fa` · `#28c840` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Outfit, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #9ca3af;
  --color-accent: #00e5ff;
  --color-accent-2: #4ade80;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#9ca3af',
    accent: '#00e5ff',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00e5ff) for the headline phrase and the primary command button only.
- **Do:** Keep the install command as the primary button label, in the same typeface.
- **Do:** Keep the stats row as large figures with small grey captions.
- **Don't:** Don't add a second bright accent to the hero.
- **Don't:** Don't add drop shadows to the command button.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
