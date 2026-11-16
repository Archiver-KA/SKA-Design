# Design system — Healthcare Landing Page Template

`SN-W02404` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The clinic's hero is a full-bleed photograph of a reception area under a dark overlay, so the photo supplies the colour and the page adds almost none. The headline is large, thin, uppercase white sans with wide letter-spacing, centred over the image. Navigation is small tracked caps along the top edge. The recognisable device is type floating over a real photograph.

**Mood:** photographic, restrained, clinical, quiet

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
- **Common gaps:** `gap-2`, `gap-10`, `gap-16`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
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

- **Do:** Use a real, full-bleed photograph of the facility as the hero background
- **Do:** Keep a dark overlay over the photo so white type stays legible
- **Do:** Set headlines in thin, wide-tracked uppercase white sans
- **Don't:** Don't add coloured accents over the photo; the blue of the image is the only colour
- **Don't:** Don't replace the photo with an illustration or flat colour; the page depends on it
- **Don't:** Don't place body copy over busy parts of the photo without the overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
