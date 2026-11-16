# Design system — MY:N at WORK - Employee Health Welfare Landing Page Template

`SN-W02486` · healthcare · dark mode · Sinera Atlas theme `calm` · language `ko`

## Direction

A dark, photographic hero of a lit vending machine on near-black (#101514), with white Korean headlines and mint (#39e1b5) kept for check marks and the primary action. Pretendard sets both headings and body, so the type reads evenly across sizes. Product photography does the explaining, and the copy stays in short lines beside it.

**Mood:** dark, technical, clean, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101514` | Page ground |
| Surface | `#f6f2ea` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#485157` | Secondary copy, captions |
| Accent | `#39e1b5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111111` · `#39e1b5` · `#30d6ad` · `#485157` · `#f2f5f1` · `#101514` · `#f6f2ea` · `#747b80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Pretendard
- **Body:** Pretendard
- **Loaded families:** Pretendard

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #101514;
  --color-surface: #f6f2ea;
  --color-text: #111111;
  --color-muted: #485157;
  --color-accent: #39e1b5;
  --font-display: "Pretendard", sans-serif;
  --font-body: "Pretendard", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101514',
    surface: '#f6f2ea',
    ink: '#111111',
    muted: '#485157',
    accent: '#39e1b5',
  },
  fontFamily: { display: ['Pretendard'], sans: ['Pretendard'] },
} }
```

## Do and don't

- **Do:** Use mint (#39e1b5) for check marks and the primary action only
- **Do:** Set Korean headlines and body copy in Pretendard at a consistent scale
- **Do:** Place product photography on dark grounds and keep copy in short lines
- **Don't:** Don't set mint text on a light background
- **Don't:** Don't put the cream surface (#f6f2ea) behind the hero
- **Don't:** Don't stack several bright colours beside the product image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
