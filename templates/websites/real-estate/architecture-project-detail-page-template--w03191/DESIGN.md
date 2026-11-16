# Design system — Architecture Project Detail Page Template

`SN-W03191` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page with a large white uppercase sans-serif title set over faint vertical grid lines that run the full height of the hero. Small spaced labels and a single horizontal rule set the rhythm, and the body copy is small and grey at the bottom. The grid and the empty space are the design; there is no accent colour.

**Mood:** architectural, dark, gridded, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#030712` · `#111827` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1920px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Map / location (`map-location`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set titles in large uppercase sans-serif in white, at regular weight
- **Do:** Show the faint vertical grid lines behind the hero
- **Do:** Keep body copy small, in a column under a horizontal rule
- **Don't:** Don't add an accent colour; the page is white on near-black
- **Don't:** Don't set the title in a bold weight
- **Don't:** Don't fill the grid columns with imagery in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
