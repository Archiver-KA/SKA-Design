# Design system — Knowhow.org Institutional Platform Landing Page Template

`SN-W03490` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-black, minimal institutional page on a charcoal ground (#212121), with the site name in small uppercase at the top and a single navigation link at the right. The hero is an abstract white shape with a soft mint (#cafff9) glow, and the headlines are set in Space Grotesk. Mint is the only accent, and the page relies on open space and type rather than imagery.

**Mood:** minimal, technical, dark, institutional, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#212121` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#cafff9` | Primary action and highlights |
| Second accent | `#c0ff87` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#cafff9` · `#c0ff87` · `#212121` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h2 60px · h3 30px · body 18px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-brand-black/5`
- **Content width:** `max-w-[1800px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-8`, `gap-16`, `gap-12`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #212121;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-accent: #cafff9;
  --color-accent-2: #c0ff87;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#212121',
    surface: '#ffffff',
    ink: '#ffffff',
    accent: '#cafff9',
    accent2: '#c0ff87',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk in white
- **Do:** Use the mint (#cafff9) glow as the only accent in the hero
- **Do:** Keep the ground charcoal and let abstract shapes carry the imagery
- **Don't:** Don't add light panels to the charcoal ground
- **Don't:** Don't use lime (#c0ff87) for large areas
- **Don't:** Don't place more than one glowing shape in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
