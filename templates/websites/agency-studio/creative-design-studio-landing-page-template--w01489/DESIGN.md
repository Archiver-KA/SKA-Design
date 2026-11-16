# Design system — Creative Design Studio Landing Page Template

`SN-W01489` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A near-black ground (#09090b) with a very large sans headline stacked over three lines, each line indented to create a staggered rhythm. Colour is absent from the first screen, so the portfolio is expected to supply it. Small muted body copy sits bottom-left and a short list of section links sits on the right edge, making the layout asymmetrical and editorial.

**Mood:** editorial, asymmetric, quiet, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#71717a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |
| Accent | `#e0ccbb` | Primary action and highlights |

Palette by frequency of use: `#e0ccbb` · `#09090b` · `#ffffff` · `#71717a` · `#a1a1aa` · `#e4e4e7` · `#d4d4d8` · `#070707` · `#fafafa` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-[6vw]`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Video / media (`video-media`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #71717a;
  --color-text: #fafafa;
  --color-muted: #a1a1aa;
  --color-border: #d4d4d8;
  --color-accent: #e0ccbb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#71717a',
    ink: '#fafafa',
    muted: '#a1a1aa',
    line: '#d4d4d8',
    accent: '#e0ccbb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in white, with each line indented for a stagger.
- **Do:** Keep the ground near-black (#09090b) and let portfolio imagery supply the colour.
- **Do:** Keep secondary navigation small and aligned to the right edge.
- **Don't:** Don't centre the headline; the stagger is part of the layout.
- **Don't:** Don't add a coloured background to the hero.
- **Don't:** Don't set the headline in a heavy weight; it is regular or light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
