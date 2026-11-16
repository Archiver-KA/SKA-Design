# Design system — Multimedia Studio Portfolio Landing Page Template

`SN-W02131` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A two-part studio hero: a near-black image panel (#171717) on the left with small white captions, and a white right half carrying a very large, bold, black uppercase statement set tight. The contrast between the flat dark panel and the heavy black type is the device, and there is no accent colour at all. Captions are tiny and tracked, so the text does the work and the layout reads like a printed poster.

**Mood:** bold, monochrome, poster-like, cinematic, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#171717` · `#f2f1ec` · `#a3a3a3` · `#525252` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h3 14px · body 10px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[1920px]`, `max-w-[200px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-10`, `gap-x-4`, `gap-y-4`

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Hero (`hero`)
3. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#171717',
    ink: '#000000',
    muted: '#737373',
    line: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Split the hero into a dark image panel and a white text half, with the statement in heavy black uppercase.
- **Do:** Keep captions on the image panel small, tracked and white.
- **Do:** Set the statement lines tight so the block reads as one shape.
- **Don't:** Don't add an accent colour; the template has none.
- **Don't:** Don't set the statement in light weights or grey.
- **Don't:** Don't fill the image panel with text beyond its captions.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
