# Design system — Luxury Jewelry Landing Page Template

`SN-W02779` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A jewellery intro screen set as an almost empty near-black stage (#090807). A small widely tracked wordmark sits top left, and two tiny uppercase captions sit at the bottom edges, one left and one right. There is no imagery, so the look rests on the frame itself: quiet, sparse and dark.

**Mood:** minimal, dark, quiet, cinematic, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090807` | Page ground |
| Text | `#eae6e1` | Headings and primary copy |
| Muted text | `#8e8a85` | Secondary copy, captions |
| Accent | `#c9a84c` | Primary action and highlights |

Palette by frequency of use: `#c9a84c` · `#8e8a85` · `#090807` · `#eae6e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 18px · h2 60px · h3 24px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`, `gap-24`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js

## Tokens

```css
:root {
  --color-background: #090807;
  --color-text: #eae6e1;
  --color-muted: #8e8a85;
  --color-accent: #c9a84c;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090807',
    ink: '#eae6e1',
    muted: '#8e8a85',
    accent: '#c9a84c',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Keep the entry screen black (#090807) with a small tracked wordmark at top left.
- **Do:** Place tiny uppercase captions at the bottom edges, not in the centre.
- **Do:** Reveal content on scroll rather than showing it on load.
- **Don't:** Don't put a large logo or image on the entry screen.
- **Don't:** Don't use bright colours; gold (#c9a84c) is for small accents only.
- **Don't:** Don't set the captions larger than a small label.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
