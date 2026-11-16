# Design system — Event Schedule & Timeline Template

`SN-W03600` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The schedule template is a dark timeline on black (#000000). Each phase is a slanted gradient bar, and the bars run from warm orange (#fb923c) through blue and teal to lime, so colour marks the stages rather than the page. Dates sit as bold italic numerals on a top rule, and bar labels are short sans text. The look is sporty and futuristic, led by bold italic titles.

**Mood:** futuristic, sporty, graphic, dark, timeline-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#737373` · `#f5f5f5` · `#171717` · `#fb923c` · `#ffd9a3` · `#ffaa55` · `#ff7f24` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[0_0_30px_rgba(255,170,85,0.3)]`, `shadow-[0_0_30px_rgba(107,140,255,0.3)]`, `shadow-[0_0_30px_rgba(115,245,213,0.3)]`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-y-12`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use slanted gradient bars to mark each phase, one hue per phase
- **Do:** Set dates as bold italic numerals on a top rule
- **Do:** Keep the page black with white bold italic headings
- **Don't:** Don't use the gradient bars for body text or buttons
- **Don't:** Don't add a light background behind the timeline
- **Don't:** Don't stack more than one row of labels above each bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
