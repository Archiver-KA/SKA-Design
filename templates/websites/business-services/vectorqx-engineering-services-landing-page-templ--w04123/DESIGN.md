# Design system — VectorQX Engineering Services Landing Page Template

`SN-W04123` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, clean engineering page on white, with a bold dark navy headline (#0f172a) set in two stacked lines. Cyan (#06b6d4) is the single accent, used for the secondary call to action and small eyebrow text, while dark navy rounded pills mark the main action. Generous white space and rounded shapes make the page feel orderly and professional.

**Mood:** orderly, professional, clean, precise, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfeff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#475569` · `#64748b` · `#ecfeff` · `#f8fafc` · `#94a3b8` · `#e2e8f0` · `#06b6d4` · `#22c55e` · `#f4f5f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-family-base)
- **Body:** var(--font-family-base)
- **Loaded families:** Inter
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px)
- **Shadows:** `shadow-hover`, `shadow-sm`, `shadow-lg`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Benefits (`benefits`)
8. Case studies (`case-studies`)
9. Process / steps (`how-it-works`)
10. Articles (`blog-articles`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfeff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-accent: #06b6d4;
  --color-accent-2: #22c55e;
  --font-display: "var(--font-family-base)", sans-serif;
  --font-body: "var(--font-family-base)", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ecfeff',
    ink: '#475569',
    muted: '#64748b',
    accent: '#06b6d4',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['var(--font-family-base)'], sans: ['var(--font-family-base)'] },
} }
```

## Do and don't

- **Do:** Use cyan (#06b6d4) for the secondary call to action and eyebrow text
- **Do:** Set headlines in bold dark navy (#0f172a) on white
- **Do:** Use dark navy rounded pills for the primary button
- **Don't:** Don't use cyan for large background areas
- **Don't:** Don't mix extra accent hues into the hero
- **Don't:** Don't set headlines in light weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
