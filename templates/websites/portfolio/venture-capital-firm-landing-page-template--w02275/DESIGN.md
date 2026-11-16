# Design system — Venture Capital Firm Landing Page Template

`SN-W02275` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimalist institutional page on white: a large, left-aligned black sans statement fills the top-left, and a three-column grid of short sections follows, each with a thin line icon, a bold title and a two-line description. Nothing is coloured, and a blurred strip at the top edge is the only texture. The three-column grid with thin icons and short bold titles is the recognisable structure.

**Mood:** institutional, minimal, measured, clean, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#a3a3a3` · `#737373` · `#525252` · `#e5e5e5` · `#0a0a0a` · `#ffffff` · `#0c0a09` · `#d4d4d4` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** thin, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-screen-xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-x-8`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Left-align the headline and keep it to three lines in a black sans.
- **Do:** Set feature blocks in three columns, each with a thin line icon and a bold title.
- **Do:** Keep the page on white with black text and grey descriptions.
- **Don't:** Don't add colour; the page is black, white and grey.
- **Don't:** Don't use heavy icons; the line icons are thin by design.
- **Don't:** Don't add decorative imagery to the top section; it is type-led.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
