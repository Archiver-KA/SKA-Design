# Design system — Actor Portfolio Landing Page Template

`SN-W01761` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The hero sets a large, tightly spaced Inter headline in two lines, the first in white and the second in mid-grey (#737373), on a near-black ground. Small uppercase labels and a thin rule carry the detail, and a white outlined button sits below. A grey panel fills the right half, which is where media would sit.

**Mood:** monochrome, stark, type-led, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#000000` · `#171717` · `#404040` · `#525252` · `#262626` · `#d4d4d4` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-screen-2xl`, `max-w-7xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center gap-4 text-sm font-medium text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Product detail (`product-detail`)
5. Video / media (`video-media`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
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
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero name in Inter at display size, white over mid-grey (#737373).
- **Do:** Keep the palette to black, white and grey, with no accent colour.
- **Do:** Use small uppercase labels with letterspacing above headings.
- **Don't:** Don't add an accent colour; the monochrome is the identity.
- **Don't:** Don't use a light page background; the design relies on black.
- **Don't:** Don't place body text on the grey media panel without checking contrast.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
