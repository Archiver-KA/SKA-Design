# Design system — Creative Studio & Brand Agency Template

`SN-W01492` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page (#101010) with a very large, wide uppercase wordmark, 'NORTH / FORM', cropped across the bottom of the first screen. The slash is the only colour, a burnt orange stroke. Navigation sits in a centred pill, body copy sits left behind a thin rule, and small metadata fills the right margin, giving a studio-catalogue feel.

**Mood:** bold, editorial, technical, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101010` | Page ground |
| Surface | `#e8e6df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#555555` · `#000000` · `#aaaaaa` · `#999999` · `#101010` · `#e8e6df` · `#151515` · `#dedcd4`.

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
6. Product grid (`product-grid`)
7. Testimonials (`testimonials`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Call to action (`cta`)
10. Stats band (`stats`)
11. Articles (`blog-articles`)
12. FAQ (`faq`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll

## Tokens

```css
:root {
  --color-background: #101010;
  --color-surface: #e8e6df;
  --color-text: #ffffff;
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
    background: '#101010',
    surface: '#e8e6df',
    ink: '#ffffff',
    muted: '#555555',
    line: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the studio wordmark very large in uppercase across the bottom of the first screen, cropped by the edge.
- **Do:** Use the burnt orange slash as the single colour mark; keep everything else white or grey.
- **Do:** Keep small metadata in the right margin and body copy at the left, separated by a thin vertical rule.
- **Don't:** Don't add a second accent colour; the orange is the only hue.
- **Don't:** Don't set the wordmark in a light weight; it is bold.
- **Don't:** Don't move the navigation into a full-width bar; it sits in a centred pill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
