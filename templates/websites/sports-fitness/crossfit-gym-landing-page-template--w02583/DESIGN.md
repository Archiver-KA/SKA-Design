# Design system — CrossFit Gym Landing Page Template

`SN-W02583` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark, cinematic gym page built on black-and-white photography of a barbell lift under a heavy tint. The headline is very large white capitals with an outlined ghost line above it, and the gold (#ddb151) appears only as a thin highlight. The tone is severe and disciplined.

**Mood:** severe, cinematic, disciplined, monochrome, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ddb151` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ddb151` · `#000000` · `#0a0a0a` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h2 128px · h3 48px · body 14px
- **Weights in use:** semibold, light, bold
- **Letter spacing:** `tracking-[0.4em]`, `tracking-[0.5em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1920px]`, `max-w-[1600px]`
- **Section padding:** `py-48`, `py-14`
- **Common gaps:** `gap-20`, `gap-6`, `gap-24`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #ddb151;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#ddb151',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph in black and white under a dark tint
- **Do:** Use the gold (#ddb151) for highlights and the primary action only
- **Do:** Set headlines in large white capitals with an outlined ghost line above them
- **Don't:** Don't colour the hero photograph; the monochrome treatment is part of the look
- **Don't:** Don't use gold for body text; it is an accent for emphasis
- **Don't:** Don't set headlines in mixed case; keep the white capitals.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
