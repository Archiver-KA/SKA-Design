# Design system — Wellness and Nutrition Landing Page Template

`SN-W02559` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A warm wellness-coaching hero: a pale, washed photograph of two hands sits behind a dark green headline, with the second word in italic coral. The primary button is a muted teal-green pill, and a row of tags and a review stack runs along the bottom edge. The stance is intimate and encouraging.

**Mood:** intimate, encouraging, warm, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f2a26` | Headings and primary copy |
| Muted text | `#4e6661` | Secondary copy, captions |
| Border | `#d3e2dd` | Hairlines, dividers, outlines |
| Accent | `#0f766e` | Primary action and highlights |
| Second accent | `#f4b860` | Supporting highlights |

Palette by frequency of use: `#d3e2dd` · `#4e6661` · `#0f766e` · `#0f2a26` · `#f2f7f5` · `#ffffff` · `#f4b860` · `#cfe0db` · `#0b5f58` · `#2e4a45`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Be Vietnam Pro
- **Body:** Be Vietnam Pro
- **Loaded families:** Be Vietnam Pro
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f2f7f5;
  --color-surface: #ffffff;
  --color-text: #0f2a26;
  --color-muted: #4e6661;
  --color-border: #d3e2dd;
  --color-accent: #0f766e;
  --color-accent-2: #f4b860;
  --font-display: "Be Vietnam Pro", sans-serif;
  --font-body: "Be Vietnam Pro", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f7f5',
    surface: '#ffffff',
    ink: '#0f2a26',
    muted: '#4e6661',
    line: '#d3e2dd',
    accent: '#0f766e',
    accent2: '#f4b860',
  },
  fontFamily: { display: ['Be Vietnam Pro'], sans: ['Be Vietnam Pro'] },
} }
```

## Do and don't

- **Do:** Set the second word of the headline in an italic coral.
- **Do:** Put the headline over a light, washed photograph of hands
- **Do:** Keep the primary button as a muted teal-green pill
- **Don't:** Don't add the amber (#f4b860) to the hero.
- **Don't:** Don't put dark text over the darkest part of the photograph
- **Don't:** Don't add more than one italic word per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
