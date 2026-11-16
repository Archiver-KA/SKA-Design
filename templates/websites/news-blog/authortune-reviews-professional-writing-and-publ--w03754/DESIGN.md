# Design system — AuthorTune Reviews: Professional Writing and Publishing Experiences

`SN-W03754` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, plain hero over a grey gradient that runs from charcoal at the top to mid grey lower down. The headline is a very large heavy sans-serif in white, broken across four centred lines, with short grey intro copy beneath it. Little else competes with the type, and the thin navigation is kept to the top edge.

**Mood:** bold, plain, heavy, direct, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f6f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#1a1a1a` · `#e5e5e5` · `#000000` · `#a3a3a3` · `#f6f6f4` · `#737373` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** normal, medium, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f6f4;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f6f4',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy white sans-serif, centred over several lines
- **Do:** Keep the hero on a grey gradient with no imagery
- **Do:** Use short grey intro copy under the headline
- **Don't:** Don't add decorative ornaments or icons to the hero
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't place dark text on the grey gradient

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
