# Design system — Quirky Photography & Cinema Portfolio Template

`SN-W02199` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial cover: a flat mid-grey ground (#9ca3af) carries a large white serif title, with The set in italic and Quirky in roman, above a small tracked uppercase kicker. The page is almost monochrome, so the title's scale and the italic word do the work.

**Mood:** editorial, cinematic, minimal, monochrome, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#9ca3af` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#101010` · `#6b7280` · `#9ca3af` · `#f5f5f5` · `#000000` · `#ffffff` · `#4b5563` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Promenade
- **Scale (largest breakpoint):** h1 160px · h2 96px · h3 30px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-screen-2xl`, `max-w-[1920px]`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-2`, `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Awards / press (`awards-press`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #9ca3af;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#9ca3af',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in a serif at very large size, mixing italic and roman in one line
- **Do:** Keep the kicker as tracked uppercase at small size
- **Do:** Keep the ground flat with no gradient
- **Don't:** Don't add colour; the palette is grey, white and black
- **Don't:** Don't use a near-white ground for the hero; it stays mid-grey
- **Don't:** Don't set the title in sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
