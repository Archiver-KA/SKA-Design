# Design system — Gloop Slime Studio Landing Page Template

`SN-W00426` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm near-black page with a large white serif wordmark, THE SQUISH, centred over a wide, empty field, with tiny spaced uppercase captions above and below it. The mood is editorial and sensory, set by the serif and the generous empty space rather than by colour. A thin bottom bar carries the shop and studio links. Colour is restrained to off-white on warm black.

**Mood:** editorial, sensory, warm, restrained, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0608` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#716858` | Secondary copy, captions |
| Accent | `#3b1a0a` | Primary action and highlights |
| Second accent | `#67e8f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#0a0608` · `#3b1a0a` · `#67e8f9` · `#211b17` · `#09090b` · `#716858` · `#f0eee5` · `#1a1510`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Viaoda Libre, Bebas Neue, Imprima, Inter, DM Sans, Italiana
- **Scale (largest breakpoint):** body 14px

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-2`, `gap-3`, `gap-10`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Sign-in form (`auth-form`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Timeline (`timeline`)
8. Feature grid (`features`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Awards / press (`awards-press`)
12. Call to action (`cta`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0608;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #716858;
  --color-accent: #3b1a0a;
  --color-accent-2: #67e8f9;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0608',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#716858',
    accent: '#3b1a0a',
    accent2: '#67e8f9',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero word in a large white serif, centred, with tiny tracked captions above and below
- **Do:** Keep the page warm near-black with off-white type and no accent colour in the hero
- **Do:** Use a thin bottom bar with tracked uppercase links for shop and studio
- **Don't:** Don't use a bright accent in the hero, such as the cyan (#67e8f9)
- **Don't:** Don't set captions at display size; they stay small and tracked
- **Don't:** Don't fill the empty field of the hero with imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
