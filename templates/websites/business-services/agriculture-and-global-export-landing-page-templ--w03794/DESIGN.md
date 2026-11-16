# Design system — Agriculture & Global Export Landing Page Template

`SN-W03794` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A high-end editorial hero built on a darkened, blurred photograph, with large uppercase sans-serif headlines in white. Short light-weight body copy sits in a narrow column on the right, and small uppercase captions frame the bottom edge. The layout relies on the photograph's warm tones and wide negative space rather than on an accent colour, which gives the page a quiet, premium restraint.

**Mood:** editorial, quiet, premium, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1c1c` | Headings and primary copy |
| Muted text | `#5c4a3d` | Secondary copy, captions |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |
| Accent | `#f0ebe1` | Primary action and highlights |

Palette by frequency of use: `#1c1c1c` · `#faf9f6` · `#5c4a3d` · `#1a2e20` · `#f0ebe1` · `#ffffff` · `#d1cdc4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 144px · h2 96px · h3 60px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-12`, `gap-24`, `gap-8`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #1c1c1c;
  --color-muted: #5c4a3d;
  --color-border: #1c1c1c;
  --color-accent: #f0ebe1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#1c1c1c',
    muted: '#5c4a3d',
    line: '#1c1c1c',
    accent: '#f0ebe1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase sans-serif at a very large size, in white, over the darkened photograph.
- **Do:** Keep body copy in a narrow column with light weight and small captions along the bottom edge.
- **Do:** Let the photograph, not an accent colour, carry the warmth of the hero.
- **Don't:** Don't add bright accent colours over the photograph.
- **Don't:** Don't set the hero headline in a serif face.
- **Don't:** Don't remove the dark overlay from the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
