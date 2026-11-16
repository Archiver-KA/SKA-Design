# Design system — Enterprise Infrastructure Overview

`SN-W04195` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black enterprise page (#0d0d0d) with a large serif headline in white and grey body copy in a small sans size. Features are arranged as a two-column list, each with a serif term and a short grey description, and a line-icon diagram sits on the right. Pale blue (#93c5fd) is used sparingly on small details, so the page reads as sober and technical.

**Mood:** sober, technical, serious, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#1f1f1f` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#93c5fd` · `#0f172a` · `#334155` · `#60a5fa` · `#0d0d0d` · `#e5e7eb` · `#111111` · `#1f1f1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h3 20px · body 14px
- **Weights in use:** semibold, medium, normal

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #1f1f1f;
  --color-text: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #93c5fd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#1f1f1f',
    ink: '#9ca3af',
    line: '#ffffff',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face at large size, in regular weight
- **Do:** Pair each feature term with a short grey description
- **Do:** Use pale blue (#93c5fd) only for small icons and details
- **Don't:** Don't use bright colours; the page stays black, white and grey
- **Don't:** Don't set the serif headline in a bold weight
- **Don't:** Don't add drop shadows to the diagram

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
