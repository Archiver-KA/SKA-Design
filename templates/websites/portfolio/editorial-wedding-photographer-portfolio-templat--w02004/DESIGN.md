# Design system — Editorial Wedding Photographer Portfolio Template

`SN-W02004` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, warm ground (#f4f3f0) with a full-bleed photograph of a couple in the first screen, washed out to a cool grey sky. Headlines are wide serif capitals in near-black (#1c1c1a), with one lowercase word set light and grey as a quiet counterpoint. Everything else is small uppercase tracked text, so the palette stays in the warm neutral range.

**Mood:** quiet, romantic, luxurious, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f3f0` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1c1a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1c1a` | Hairlines, dividers, outlines |
| Accent | `#1c1c1a` | Primary action and highlights |

Palette by frequency of use: `#1c1c1a` · `#a8a29e` · `#78716c` · `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#f4f3f0` · `#57534e` · `#d1cfc7` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-6`, `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f3f0;
  --color-surface: #e7e5e4;
  --color-text: #1c1c1a;
  --color-muted: #78716c;
  --color-border: #1c1c1a;
  --color-accent: #1c1c1a;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f3f0',
    surface: '#e7e5e4',
    ink: '#1c1c1a',
    muted: '#78716c',
    line: '#1c1c1a',
    accent: '#1c1c1a',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cinzel uppercase in near-black (#1c1c1a)
- **Do:** Use full-bleed photography as the hero, lightly washed out
- **Do:** Keep every colour in the warm neutral range from the palette
- **Don't:** Don't introduce a saturated accent colour
- **Don't:** Don't set headlines in bold weight; the serif capitals carry the weight
- **Don't:** Don't put text over the bright sky without a tonal shift

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
