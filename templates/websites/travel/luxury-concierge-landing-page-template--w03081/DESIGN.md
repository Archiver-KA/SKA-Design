# Design system — Luxury Concierge Landing Page Template

`SN-W03081` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A concierge page led by an interior photograph of a kitchen and staircase, covered with a light grey veil so the image reads as muted. A very large light wordmark runs across the top, partly cut off by the frame, and small uppercase captions label the content. The page treats the photograph as atmosphere and keeps its own colour out of the way.

**Mood:** muted, architectural, discreet, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#000000` · `#f3f4f6` · `#4b5563` · `#e5e7eb` · `#0a0a0a` · `#f9fafb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 12px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[1600px]`, `max-w-6xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f7;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f7',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#6b7280',
    line: '#ffffff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use a photograph under a light grey veil as the hero
- **Do:** Set captions in small uppercase with wide tracking
- **Do:** Let an oversized wordmark crop at the frame edge
- **Don't:** Don't add saturated colours over the photograph
- **Don't:** Don't set captions over busy parts of the image
- **Don't:** Don't use a second photograph of equal size in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
