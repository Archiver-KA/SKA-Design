# Design system — Aluminium Manufacturer Landing Page Template

`SN-W03806` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dusk architectural photograph fills the hero, with an oversized thin uppercase headline laid across the building in white. The type is light and widely spaced, so it reads like a drawn line over the image. Small white navigation sits in the top corners, and the page relies on the photograph's warm wood and glass tones rather than on an accent colour.

**Mood:** architectural, airy, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#1a1a1a` · `#d1d5db` · `#e3e1dc` · `#374151` · `#111111` · `#4b5563` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syncopate
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-12`, `gap-10`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

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

- **Do:** Set the hero headline in a light-weight uppercase sans-serif at a very large size, in white, laid over the photograph.
- **Do:** Keep the navigation small and white in the top corners.
- **Do:** Let the photograph's warm wood and glass tones provide the only colour.
- **Don't:** Don't add accent colours over the architectural photograph.
- **Don't:** Don't set the headline in a heavy weight.
- **Don't:** Don't add boxes or panels behind the hero headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
