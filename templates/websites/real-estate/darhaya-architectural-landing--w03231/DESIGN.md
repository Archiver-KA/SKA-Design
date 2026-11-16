# Design system — darHAYA Architectural  Landing

`SN-W03231` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

An oversized, monochrome architecture page: the hero headline is very large heavy black sans stacked across the full width in four lines, with a warm off-white ground behind it. A dark translucent pill navigation floats at the top, and a small uppercase service list sits beside a large numeral metric. Colour is absent, so the page relies on scale, weight and whitespace.

**Mood:** bold, monochrome, editorial, oversized

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8e6df` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#555555` · `#aaaaaa` · `#000000` · `#999999` · `#101010` · `#e8e6df` · `#151515` · `#dedcd4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Awards / press (`awards-press`)
8. Process / steps (`how-it-works`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e8e6df;
  --color-text: #111111;
  --color-muted: #555555;
  --color-border: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e8e6df',
    ink: '#111111',
    muted: '#555555',
    line: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in very large black sans, tightly leaded, running across the full width.
- **Do:** Keep the palette to black, off-white and grey; no accent colour is used.
- **Do:** Set service lists in small uppercase tracked text beside large numeral metrics.
- **Don't:** Don't add colour; the design is black on warm off-white.
- **Don't:** Don't soften the headline with light weights; it reads heavy and full-width.
- **Don't:** Don't drop the dark floating navigation bar onto a light surface without its fill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
