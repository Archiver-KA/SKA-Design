# Design system — Meridyn Health Optimization Landing Page Template

`SN-W02480` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A black, high-contrast page with bold grotesk headlines in white, one of them cropped at the top edge for effect. Small uppercase labels sit on a precise grid, and metrics are shown as large numerals in thin bordered panels. A dim ticker strip runs across the middle, so the page reads as clinical and technical, with white as the only strong colour.

**Mood:** stark, technical, clinical, precise, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#040404` | Page ground |
| Surface | `#5a5e63` | Cards, panels, raised areas |
| Text | `#e8edf2` | Headings and primary copy |
| Muted text | `#5a5e63` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#5a5e63` · `#8a8f96` · `#e8edf2` · `#040404` · `#000000` · `#0a0a0a` · `#080808` · `#22c55e` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Doto, Space Grotesk, Space Mono
- **Scale (largest breakpoint):** h3 40px · body 18px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-[90rem]`, `max-w-[30rem]`
- **Section padding:** `py-[12rem]`, `py-[3rem]`
- **Common gaps:** `gap-4`, `gap-[2rem]`, `gap-[1.5rem]`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Dashboard preview (`dashboard-preview`)
6. Bento grid (`bento-grid`)
7. Stats band (`stats`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #040404;
  --color-surface: #5a5e63;
  --color-text: #e8edf2;
  --color-muted: #5a5e63;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#040404',
    surface: '#5a5e63',
    ink: '#e8edf2',
    muted: '#5a5e63',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk at display size, in white, with cropping allowed
- **Do:** Keep the palette to white and grey, with no colour in the panels
- **Do:** Show metrics as large numerals in thin bordered panels with small captions
- **Don't:** Don't add a colour accent to the metric panels
- **Don't:** Don't soften the type with rounded shapes
- **Don't:** Don't use the ticker strip for body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
