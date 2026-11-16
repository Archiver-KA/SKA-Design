# Design system — Minimal Creative Workspace Layout

`SN-W04238` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A minimal dark landing page on near-black (#0a0a0a) with a centred bold sans-serif headline in white and a short grey subhead. The feature cards sit in dark grey (#262626) with thin outline icons in place of imagery, and the middle card is lifted slightly to mark the focus. The primary action is a plain dark button with a light outline, so the page uses no accent colour.

**Mood:** minimal, monochrome, focused, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#262626` · `#a3a3a3` · `#f5f5f5` · `#171717` · `#525252` · `#d4d4d4` · `#0a0a0a` · `#ffffff` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="inline-block px-7 py-3 bg-neutral-800 text-white font-bold rounded-lg shadow hover:bg-neutral-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-border: #262626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#f5f5f5',
    line: '#262626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #0a0a0a and the cards at #262626
- **Do:** Set the headline in bold sans-serif in white, centred
- **Do:** Use thin outline icons in the cards instead of photos
- **Don't:** Don't introduce an accent colour; the page is monochrome
- **Don't:** Don't use photography in the feature cards
- **Don't:** Don't set the subhead in white; it stays grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
