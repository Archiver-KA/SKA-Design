# Design system — Personal Portfolio About Page

`SN-W02152` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black About page with a very large white heading anchoring the top-left, and a grid of thin-bordered stat cells beneath it (150+ projects, 12 awards, 8+ years). Figures are bold white sans with small uppercase grey captions, and one cell is left as a plain dark block. No accent colour is in view, so hierarchy comes from scale and the rules between cells.

**Mood:** stark, minimal, monochrome, structured, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#c084fc` · `#f472b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 18px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-16`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page heading very large in white, with a short grey intro at the right.
- **Do:** Lay out stats as a bordered grid with bold white figures and small uppercase grey captions.
- **Do:** Use thin rules between sections rather than panels or shadows.
- **Don't:** Don't add an accent colour to the page.
- **Don't:** Don't fill every stat cell; the empty dark block is part of the grid.
- **Don't:** Don't set the captions in white; they stay grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
