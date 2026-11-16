# Design system — Futuristic Invoice Layout Template

`SN-W00411` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome invoice layout: a white sheet on a pale grey ground, with the wordmark NXT in spaced capitals and the word STATEMENT in light grey at the top right. Hierarchy comes from small uppercase labels, hairline rules and figures aligned in the line-item table, with no accent colour at all.

**Mood:** neutral, orderly, monochrome, spare, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f9fafb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#9ca3af` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#e5e7eb` · `#ffffff` · `#d1d5db` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 30px · h2 24px · h3 12px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Comparison (`comparison`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f9fafb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f9fafb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the document in greyscale and add no accent colour
- **Do:** Right-align amounts in the line-item table so the figures line up
- **Do:** Use small uppercase labels above each block of details
- **Don't:** Don't add drop shadows or cards inside the sheet
- **Don't:** Don't use a bright colour for totals; emphasis comes from weight
- **Don't:** Don't fill the sheet with the pale grey ground (#f3f4f6); the sheet stays white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
