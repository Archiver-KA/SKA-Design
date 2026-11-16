# Design system — Aesthetic Surgeon Landing Page Template

`SN-W01765` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with white uppercase display type set very large and tight, and a soft lavender eyebrow line above the headline. The hero pairs the headline with a dark video card on the right and a circular scroll cue at the lower left. Lavender (#818cf8) marks the small labels and the interview link, so the tone is precise and quiet rather than loud.

**Mood:** precise, dark, quiet, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#6366f1` · `#818cf8` · `#a3a3a3` · `#e5e5e5` · `#262626` · `#d4d4d4` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · body 16px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white uppercase at display size with tight leading.
- **Do:** Use lavender (#818cf8) only for the eyebrow, the video link and small labels.
- **Do:** Pair the headline with a single video card rather than several images.
- **Don't:** Don't add bright colours; the lavender is the only accent.
- **Don't:** Don't set small body copy in pure white on black; use the muted grey.
- **Don't:** Don't put the hero on a light background; the design depends on black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
