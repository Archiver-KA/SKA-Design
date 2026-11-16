# Design system — Ramond Holdings Real Estate Portfolio Template

`SN-W02200` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black editorial page where very large high-contrast serif headlines carry the look, with one italic phrase doing the emphasis work. Warm stone greys (#78716c, #d6d3d1) step the text back, and the orange accent (#f97316) is kept for small touches. The recognisable move is an oversized serif headline on a plain black field, with the first word dropped to grey.

**Mood:** editorial, monochrome, restrained, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#881337` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#1c1917` · `#000000` · `#d6d3d1` · `#57534e` · `#050505` · `#44403c` · `#a8a29e` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. About (`about`)
6. Feature grid (`features`)
7. Team (`team`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #881337;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#881337',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large (around 128px on desktop) in a serif with one italic phrase
- **Do:** Keep the page ground at #050505 and body text in the stone grey #d6d3d1
- **Do:** Use the orange (#f97316) only for small accents, never for large fills
- **Don't:** Don't add light section backgrounds; the dark ground is the identity
- **Don't:** Don't put bright gradients or saturated fills behind headline text
- **Don't:** Don't set body copy in pure white; step it down to the stone grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
