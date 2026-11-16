# Design system — Untitled Design

`SN-W02270` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A high-contrast studio page on a near-black ground (#101010), with a very large heavy white sans wordmark, NORTH / FORM, filling the bottom of the hero. A small orange slash sits between the two words, and the nav is a thin rounded bar with small uppercase labels. The oversized wordmark at the foot of a black hero, with one orange mark, is what makes the page recognisable.

**Mood:** bold, stark, industrial, confident, minimal

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

- **Do:** Set the wordmark in a heavy sans at full width along the foot of the hero.
- **Do:** Keep the orange mark to the single slash between the two words.
- **Do:** Keep the nav as a thin rounded bar with small uppercase labels.
- **Don't:** Don't set the page on white; the hero is black throughout.
- **Don't:** Don't use the orange for body copy or large fills; it is one mark.
- **Don't:** Don't crowd the hero with imagery; the wordmark and empty space carry it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
