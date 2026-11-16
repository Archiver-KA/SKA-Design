# Design system — Minimalist Dark Mode Landing Page

`SN-W04239` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark black landing page with a very large, bold, uppercase sans-serif headline that fades from white to light grey, set above a short grey intro line. Two buttons sit side by side, one outlined and one solid white, with no other colour on the screen. A small down arrow at the foot suggests scrolling, and the whole page is built on contrast and scale.

**Mood:** stark, bold, monochrome, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#d1d5db` · `#1f2937` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · body 20px
- **Weights in use:** bold, black
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 text-sm tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #1f2937;
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
    muted: '#d1d5db',
    line: '#1f2937',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold uppercase sans-serif, large and white
- **Do:** Pair one outlined button with one solid white button
- **Do:** Keep the page on pure black (#000000) with no accent colour
- **Don't:** Don't add colour to the headline or buttons
- **Don't:** Don't use small headline sizes; the scale is the point of the style
- **Don't:** Don't add more than two buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
