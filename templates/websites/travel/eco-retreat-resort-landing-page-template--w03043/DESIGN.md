# Design system — Eco Retreat Resort Landing Page Template

`SN-W03043` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A pale cream field with a centred monogram: a very large dark-green serif 'PB', a spaced uppercase wordmark beneath it, a small italic serif tagline, and a square-cornered dark green button. Nothing competes with the monogram, and dark green on cream gives a natural, restrained feel. Faint dots float in the margins.

**Mood:** natural, restrained, airy, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ede8e0` | Page ground |
| Surface | `#f7f4ef` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Accent | `#1b4332` | Primary action and highlights |
| Second accent | `#d4c4a8` | Supporting highlights |

Palette by frequency of use: `#1b4332` · `#2d5a45` · `#d4c4a8` · `#e8dcc4` · `#f7f4ef` · `#ede8e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Libre Baskerville
- **Scale (largest breakpoint):** h1 18px · h2 48px · h3 20px · body 16px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Timeline (`timeline`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ede8e0;
  --color-surface: #f7f4ef;
  --color-text: #111111;
  --color-accent: #1b4332;
  --color-accent-2: #d4c4a8;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ede8e0',
    surface: '#f7f4ef',
    ink: '#111111',
    accent: '#1b4332',
    accent2: '#d4c4a8',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the monogram and display type in dark green serif (#1b4332)
- **Do:** Use the dark green (#1b4332) square button for the main action
- **Do:** Keep spaced uppercase serif for the wordmark and nav
- **Don't:** Don't add rounded corners to the button; it is square
- **Don't:** Don't add bright accents; the palette is cream and green
- **Don't:** Don't set the tagline in bold; it stays italic and light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
