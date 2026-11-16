# Design system — Luxury Real Estate Landing Page Template

`SN-W03294` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The first screen is a near-white page with small, widely tracked uppercase navigation and a small caption at the lower left. The hero imagery is missing from the first screen, so the layout shows only type, a thin outlined logo box and generous empty space. The tan (#b19777) in the palette does not appear on this screen, so the look depends on type scale and whitespace.

**Mood:** minimal, airy, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9f9f9` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#b19777` · `#ffffff` · `#6b7280` · `#000000` · `#9ca3af` · `#111111` · `#f9f9f9` · `#d1d5db` · `#e5e7eb` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 96px · h3 48px · body 18px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Case studies (`case-studies`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9f9f9;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9f9f9',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set navigation and captions in small uppercase with wide letter spacing.
- **Do:** Use black text (#000000) on white (#ffffff) for primary content.
- **Do:** Separate sections with whitespace rather than coloured blocks.
- **Don't:** Don't add heavy weights to captions; they are light and small.
- **Don't:** Don't use dark panels or shadows; the first screen is flat and light.
- **Don't:** Don't use the tan (#b19777) for large areas; keep it to small accents.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
