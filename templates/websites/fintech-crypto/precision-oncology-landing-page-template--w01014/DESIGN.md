# Design system — Precision Oncology Landing Page Template

`SN-W01014` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, clinical biotech page on warm off-white (#f8f8f6), with a heavy uppercase sans headline in near-black (#111214) stacked over several short lines. Teal (#00bfa5) is the only colour, used for the primary button and the key figures in the results card, which has a thin teal rule along its top edge. Square corners and small letter-spaced labels keep the page data-first and precise.

**Mood:** clinical, precise, data-first, bold, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111214` | Headings and primary copy |
| Muted text | `#5a5d63` | Secondary copy, captions |
| Border | `#111214` | Hairlines, dividers, outlines |
| Accent | `#00bfa5` | Primary action and highlights |

Palette by frequency of use: `#111214` · `#00bfa5` · `#5a5d63` · `#f8f8f6` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Inter, IBM Plex Mono
- **Scale (largest breakpoint):** body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-[0.08em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_20px_40px_rgba(17,18,20,0.03)]`, `shadow-[0_20px_40px_rgba(17,18,20,0.02)]`, `shadow-sm`
- **Content width:** `max-w-[clamp(70rem,92vw,96rem)]`, `max-w-[64ch]`
- **Section padding:** `py-[clamp(6rem,10vw,12rem)]`
- **Common gaps:** `gap-8`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full bg-accent text-white font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] py-4 hover:bg-primary transition-colors focus:outline focus:outline-1 focus:outline-accent focus:outline-offset-2 rounded-none mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. 3D / canvas scene (`3d-canvas`)
5. Services (`services`)
6. Team (`team`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f8f6;
  --color-surface: #ffffff;
  --color-text: #111214;
  --color-muted: #5a5d63;
  --color-border: #111214;
  --color-accent: #00bfa5;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f6',
    surface: '#ffffff',
    ink: '#111214',
    muted: '#5a5d63',
    line: '#111214',
    accent: '#00bfa5',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans in near-black (#111214), stacked tight.
- **Do:** Use teal (#00bfa5) only for the primary button and the key figures in the results card.
- **Do:** Keep cards square-cornered with a thin teal rule along the top edge.
- **Don't:** Don't round the corners of the results card.
- **Don't:** Don't add a second accent colour to the data.
- **Don't:** Don't set headlines in mixed case.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
