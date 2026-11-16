# Design system — Wellness Studio Portfolio Landing Page Template

`SN-W02299` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ko`

## Direction

A full-bleed architectural photograph at dusk, with a thin, widely letter-spaced uppercase headline laid across the image in white. A small Korean subline sits under the title, and the nav is a sparse row of tiny labels. Light weight and open tracking give a premium, quiet tone, though the thin strokes compete with the busy image behind them.

**Mood:** premium, architectural, quiet, airy, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#1a1a1a` · `#e3e1dc` · `#374151` · `#6b7280` · `#111111` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syncopate
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1800px]`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-10`, `gap-16`, `gap-12`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light uppercase sans with wide letter-spacing
- **Do:** Keep the Korean subline much smaller than the headline
- **Do:** Use full-bleed architectural photography at dusk for the hero
- **Don't:** Don't use heavy weights; the light stroke is the look
- **Don't:** Don't place the headline over a busy area without darkening the photo
- **Don't:** Don't add a bright accent colour to the nav

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
