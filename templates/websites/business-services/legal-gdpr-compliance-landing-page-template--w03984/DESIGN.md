# Design system — Legal GDPR Compliance Landing Page Template

`SN-W03984` · business-services · light mode · Sinera Atlas theme `route` · language `pl`

## Direction

A plain, document-style legal page with no decoration: a white ground, dark grey headings and a small grey version label in the corner. Body paragraphs are set in mid grey with generous spacing, and numbered section headings in bold sans-serif give the text its structure. The page is deliberately quiet, so the readable text is the whole design.

**Mood:** plain, document-like, quiet, orderly, text-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#737373` · `#a3a3a3` · `#ffffff` · `#525252` · `#e5e5e5` · `#d4d4d4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-2.5`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#525252',
    muted: '#737373',
    line: '#f5f5f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set section headings in bold sans-serif with a numbered label
- **Do:** Keep body copy in mid grey (#737373) on white
- **Do:** Leave generous vertical space between sections
- **Don't:** Don't add imagery or colour blocks; the page is text only
- **Don't:** Don't set body copy in small type
- **Don't:** Don't add a second typeface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
