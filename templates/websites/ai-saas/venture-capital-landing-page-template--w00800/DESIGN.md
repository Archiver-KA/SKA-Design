# Design system — Venture Capital Landing Page Template

`SN-W00800` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, uncompromising agency page with heavy uppercase headlines in white and a single red-orange word (#ff3300) in the first line. A metrics panel with a progress bar sits at the right of the hero, under a monospace-style tag at the top. Red is the only warm colour in the hero, so the page reads as stark and deliberate.

**Mood:** stark, dark, assertive, deliberate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060606` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#aaaaaa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff3300` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff3300` · `#060606` · `#aaaaaa` · `#888888` · `#666666` · `#0a0a0a` · `#444444` · `#f0f0ee` · `#eeeeee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist Mono, Geist, Cabinet Grotesk
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_4rem_rgba(255,51,0,0.1)]`, `shadow-[0_0_6rem_rgba(255,51,0,0.2)]`
- **Content width:** `max-w-[30rem]`, `max-w-[60rem]`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Services (`services`)
7. Stats band (`stats`)
8. Feature grid (`features`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #060606;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #aaaaaa;
  --color-border: #ffffff;
  --color-accent: #ff3300;
  --color-accent-2: #4ade80;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060606',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#aaaaaa',
    line: '#ffffff',
    accent: '#ff3300',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the key verb of the headline in red-orange (#ff3300)
- **Do:** Set headlines in uppercase at heavy weight
- **Do:** Use a red progress bar for metrics panels
- **Don't:** Don't use the red for large backgrounds
- **Don't:** Don't set headlines in lowercase
- **Don't:** Don't add green beside the red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
