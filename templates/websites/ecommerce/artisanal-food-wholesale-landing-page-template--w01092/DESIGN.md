# Design system — Artisanal Food Wholesale Landing Page Template

`SN-W01092` · ecommerce · light mode · Sinera Atlas theme `market` · language `nl`

## Direction

A warm, editorial wholesale page on cream (#fdfbf7), where the headline is set in large dark green sans and its second line switches to an italic serif in terracotta (#a26a42). The sans and italic serif pairing is the signature, giving a seasonal farm-market voice. Small tracked capitals label each section, and body copy is set in grey below generous space.

**Mood:** warm, seasonal, editorial, earthy, honest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Text | `#1a3b2a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a26a42` | Primary action and highlights |
| Second accent | `#a26a42` | Supporting highlights |

Palette by frequency of use: `#fdfbf7` · `#1a3b2a` · `#a26a42` · `#111827` · `#ffffff` · `#ebe7df`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-[0.1em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-6`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-text: #1a3b2a;
  --color-border: #ffffff;
  --color-accent: #a26a42;
  --color-accent-2: #a26a42;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    ink: '#1a3b2a',
    line: '#ffffff',
    accent: '#a26a42',
    accent2: '#a26a42',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in an italic serif in terracotta (#a26a42)
- **Do:** Keep headlines in dark green (#1a3b2a) sans
- **Do:** Use small tracked uppercase for section labels
- **Don't:** Don't use a dark page background; the cream ground is the style
- **Don't:** Don't set the italic line in sans
- **Don't:** Don't use terracotta for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
