# Design system — Sustainable Architecture Portfolio Template

`SN-W02245` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An editorial architecture hero: a serif headline in warm off-white (#f5f0eb) sits over a desaturated grey photograph that fades to light at the bottom edge. One italic word in the headline, set in a muted copper tone, carries the emotional point of the line, and the stats row below uses small serif numerals with tracked captions. The page is recognised by its tonal, image-led darkness rather than by any graphic device.

**Mood:** editorial, tonal, warm, quiet, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1917` | Page ground |
| Text | `#f5f0eb` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f5f0eb` · `#ffffff` · `#1a1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Playfair Display

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Awards / press (`awards-press`)
10. Articles (`blog-articles`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1917;
  --color-text: #f5f0eb;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1917',
    ink: '#f5f0eb',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in the serif face with one italic word in an accent tone.
- **Do:** Keep the hero photograph desaturated so the warm off-white type reads clearly.
- **Do:** Use small serif figures for stats, with tracked uppercase captions.
- **Don't:** Don't put bright colour on the photograph; the palette is warm neutrals.
- **Don't:** Don't set hero text over a light area without a gradient overlay.
- **Don't:** Don't add decorative shapes; the photograph carries the layout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
