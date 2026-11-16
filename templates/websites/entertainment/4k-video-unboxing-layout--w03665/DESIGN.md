# Design system — 4K Video Unboxing Layout

`SN-W03665` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A three-column product layout in which a saturated yellow column carries the main message, with a large heavy headline in black and a black pill call to action. The outer columns are white, with small uppercase feature titles and one photograph, so the yellow panel reads as the focus of the page. Type stays in one sans-serif family throughout.

**Mood:** bold, product-focused, graphic, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#1f2937` · `#ffffff` · `#000000` · `#4b5563` · `#e5e7eb` · `#374151` · `#f3f4f6` · `#f9fafb` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · body 12px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`

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
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #1f2937;
  --color-border: #e5e7eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#1f2937',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the full yellow column for the one headline and the call to action
- **Do:** Set feature titles in small uppercase sans-serif above short body text
- **Do:** Keep black as the only text and button colour on the yellow
- **Don't:** Don't add a second saturated colour; the photo and white columns carry the rest
- **Don't:** Don't split the yellow column with other colour blocks
- **Don't:** Don't set the headline in white on yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
