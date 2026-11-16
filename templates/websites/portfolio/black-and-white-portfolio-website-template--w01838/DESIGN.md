# Design system — Black & White Portfolio Website Template

`SN-W01838` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome portfolio built on pure black (#000000) with white type and no accent colour. The first screen is almost empty: small uppercase labels sit in the top bar and one thin hairline divides the space, so the page relies on negative space rather than imagery. Inter at a large display size carries the hierarchy.

**Mood:** monochrome, austere, gallery-like, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#737373` · `#262626` · `#525252` · `#000000` · `#d4d4d4` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 48px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-32`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Team (`team`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page strictly black (#000000) and white (#ffffff), with greys for secondary text
- **Do:** Use small uppercase labels for navigation and metadata
- **Do:** Separate sections with hairline rules in #262626
- **Don't:** Don't introduce an accent colour
- **Don't:** Don't use rounded corners; the radius is none.
- **Don't:** Don't fill the hero with decorative imagery in the opening view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
