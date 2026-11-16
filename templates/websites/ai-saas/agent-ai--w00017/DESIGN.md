# Design system — Agent AI

`SN-W00017` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The interface is near-black, with a heavy uppercase sans headline, 'THINK. DECIDE. ACT.', in white and the last word in orange (#ff6a1a). A 3D robot mascot with orange eyes is the centrepiece, and thin hairline grid lines with tiny mono labels frame the panels. Orange is the single signal colour, used for emphasis only, so the dark interface stays cohesive.

**Mood:** bold, playful, dark, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Surface | `#0a080e` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9d8ba9` | Secondary copy, captions |
| Border | `#a299b4` | Hairlines, dividers, outlines |
| Accent | `#ff6a1a` | Primary action and highlights |
| Second accent | `#21132d` | Supporting highlights |

Palette by frequency of use: `#080808` · `#ff6a1a` · `#ffffff` · `#0a080e` · `#463021` · `#9d8ba9` · `#b38ade` · `#ff7624` · `#c4c0c8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Integrations (`integrations`)
8. Pricing (`pricing`)
9. Articles (`blog-articles`)
10. Team (`team`)
11. FAQ (`faq`)
12. Testimonials (`testimonials`)
13. Product grid (`product-grid`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, AOS scroll reveal
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #080808;
  --color-surface: #0a080e;
  --color-text: #ffffff;
  --color-muted: #9d8ba9;
  --color-border: #a299b4;
  --color-accent: #ff6a1a;
  --color-accent-2: #21132d;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    surface: '#0a080e',
    ink: '#ffffff',
    muted: '#9d8ba9',
    line: '#a299b4',
    accent: '#ff6a1a',
    accent2: '#21132d',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use orange (#ff6a1a) for the last word of the headline and the mascot accents only
- **Do:** Set the headline in heavy uppercase sans with a full stop after each word
- **Do:** Frame panels with thin hairline grid lines and tiny mono labels
- **Don't:** Don't use orange as a background for text blocks
- **Don't:** Don't add pastel colours to the mascot or panels
- **Don't:** Don't set body copy in uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
