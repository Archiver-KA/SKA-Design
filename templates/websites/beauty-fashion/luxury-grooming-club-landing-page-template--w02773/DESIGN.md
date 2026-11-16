# Design system — Luxury Grooming Club Landing Page Template

`SN-W02773` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, photographic grooming-club hero: a darkened monochrome-feeling photograph fills the frame and white serif type sits on the left. The headline pairs an upright serif with an italic serif second line in a softer tone, and small widely tracked uppercase labels sit above and below it. The page is effectively monochrome, so the design relies on light, photography and the serif-italic contrast rather than colour.

**Mood:** moody, understated, editorial, quiet, masculine

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#bca37f` · `#ffffff` · `#030303` · `#737373` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#525252` · `#e5e5e5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 12px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-40`, `py-12`
- **Common gaps:** `gap-12`, `gap-16`, `gap-24`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#bca37f] hover:text-white transition-all duration-500 mt-4 group flex justify-center items-center space-x-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Timeline (`timeline`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #171717;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#ffffff',
    muted: '#525252',
    line: '#171717',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Overlay the photography with a dark gradient so white serif text reads on the left.
- **Do:** Use the serif for headlines and the tracked uppercase sans for labels.
- **Do:** Set the italic second line in a softer tone (#d4d4d4) than the upright line.
- **Don't:** Don't add a colour accent; the page is monochrome.
- **Don't:** Don't place text over bright areas of the photograph.
- **Don't:** Don't set the headline in bold weights.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
