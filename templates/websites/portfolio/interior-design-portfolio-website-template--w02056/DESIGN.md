# Design system — Interior Design Portfolio Website Template

`SN-W02056` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A split layout with a quiet off-white text panel on the left and a full-height interior photograph on the right, so the hero is half text and half image. The headline is large, set in three lines with the middle word in italic, and a small tracked uppercase eyebrow sits above it. The palette is warm grey and ink, and the photograph supplies all the colour.

**Mood:** calm, minimal, tranquil, editorial, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f7` | Page ground |
| Surface | `#d6d3d1` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#292524` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#f5f5f7` · `#78716c` · `#292524` · `#d6d3d1` · `#a8a29e` · `#57534e` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-[0_4px_20px_rgb(0,0,0,0.06)]`
- **Content width:** `max-w-[100rem]`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-10`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f7;
  --color-surface: #d6d3d1;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #292524;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f7',
    surface: '#d6d3d1',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#292524',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use a split layout: an off-white text panel beside a full-height photograph.
- **Do:** Set the headline large, with the middle word in italic.
- **Do:** Keep the eyebrow small, uppercase and tracked, in muted grey.
- **Don't:** Don't add colour to the text panel; it stays warm grey and ink.
- **Don't:** Don't round the photograph's frame; it runs full height and square.
- **Don't:** Don't stack several calls to action in the hero; one underlined link is used.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
