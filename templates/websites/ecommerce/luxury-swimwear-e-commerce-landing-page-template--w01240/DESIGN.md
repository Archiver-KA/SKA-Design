# Design system — Luxury Swimwear E-commerce Landing Page Template

`SN-W01240` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A near-black, almost empty opening screen: a small serif LUMIERE wordmark top centre, thin nav labels in spaced caps, and a single hairline with a scroll cue at the bottom. Only the dark ground and the type show. Restraint and negative space are the whole look.

**Mood:** sparse, dark, understated, fashion

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a87c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#050505` · `#c6a87c` · `#0f0f0f` · `#000000` · `#78716c` · `#44403c` · `#a8a29e` · `#333333` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Italiana
- **Body:** Mulish
- **Loaded families:** Italiana, Mulish
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 12px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-8`, `gap-1.5`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0f0f0f;
  --color-text: #d6d3d1;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #c6a87c;
  --font-display: "Italiana", serif;
  --font-body: "Mulish", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0f0f0f',
    ink: '#d6d3d1',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#c6a87c',
  },
  fontFamily: { display: ['Italiana'], sans: ['Mulish'] },
} }
```

## Do and don't

- **Do:** Keep the hero to a dark ground, one wordmark and a single hairline or scroll cue
- **Do:** Set the wordmark in a light high-contrast serif with wide tracking
- **Do:** Use widely spaced small caps for the nav and the scroll cue
- **Don't:** Don't add visible buttons or text blocks to the first screen
- **Don't:** Don't use a light background; the design is black
- **Don't:** Don't fill the hero with busy imagery; negative space carries it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
