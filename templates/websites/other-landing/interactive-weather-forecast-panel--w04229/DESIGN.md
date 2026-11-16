# Design system — Interactive Weather Forecast Panel

`SN-W04229` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, soft weather card on a pale blue-to-lavender gradient ground, with a white panel and a single blue (#3b82f6) selected day. Temperature is the largest type on the card, set in bold sans-serif, and the week strip uses small uppercase day labels above large numerals. Blue marks only the selected day and the detail link, so the card reads calm and information-first.

**Mood:** calm, clear, airy, information-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#6b7280` · `#3b82f6` · `#60a5fa` · `#eab308` · `#dbeafe` · `#f3e8ff` · `#eff6ff` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #eab308;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eff6ff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#eab308',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use #3b82f6 for the selected day and the detail link only
- **Do:** Set the temperature as the largest, boldest text on the card
- **Do:** Keep day labels small and uppercase above the date numerals
- **Don't:** Don't add more than one highlight colour to the week strip
- **Don't:** Don't use heavy shadows; the card sits on the gradient as a white panel
- **Don't:** Don't set the forecast text in a display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
