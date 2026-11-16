# Design system — Aspire Ghostwriting Reviews: What Clients Are Saying

`SN-W04159` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A conventional, text-led layout: a blue gradient hero built from #1e88e5 carries a white headline, and a pale page ground (#f4f7fb) holds the plain body copy. Service blocks are white cards with a blue left border, set in a row of four. Arial throughout keeps the look plain and readable rather than styled.

**Mood:** plain, readable, trustworthy, informational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f7fb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Accent | `#1e88e5` | Primary action and highlights |
| Second accent | `#ffc107` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e88e5` · `#f4f7fb` · `#333333` · `#444444` · `#f8fbff` · `#ffc107` · `#555555` · `#777777`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Arial
- **Body:** Arial

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Testimonials (`testimonials`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f4f7fb;
  --color-surface: #ffffff;
  --color-text: #333333;
  --color-muted: #555555;
  --color-accent: #1e88e5;
  --color-accent-2: #ffc107;
  --font-display: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f7fb',
    surface: '#ffffff',
    ink: '#333333',
    muted: '#555555',
    accent: '#1e88e5',
    accent2: '#ffc107',
  },
  fontFamily: { display: ['Arial'], sans: ['Arial'] },
} }
```

## Do and don't

- **Do:** Use the blue (#1e88e5) for the hero gradient, card borders and inline links.
- **Do:** Keep body text in dark grey (#333333) on the pale ground (#f4f7fb).
- **Do:** Set cards as white blocks with a blue left border.
- **Don't:** Don't introduce decorative typefaces; keep Arial.
- **Don't:** Don't use the amber (#ffc107) for body text.
- **Don't:** Don't add drop shadows to the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
