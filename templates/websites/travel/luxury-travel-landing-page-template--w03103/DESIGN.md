# Design system — Luxury Travel Landing Page Template

`SN-W03103` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep green hero (#172a24) with a large serif headline in off-white, set in lowercase as maldives, reimagined., and a short sans-serif subline below it. Gold (#c2a679) is the only accent and is kept to small details. The outlined Explore button is a thin square rectangle with spaced capitals. Type and the green and cream pair carry the quiet, unhurried mood.

**Mood:** quiet, tranquil, editorial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#172a24` | Page ground |
| Surface | `#f2efea` | Cards, panels, raised areas |
| Text | `#faf9f7` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c2a679` | Primary action and highlights |
| Second accent | `#c2a679` | Supporting highlights |

Palette by frequency of use: `#172a24` · `#c2a679` · `#faf9f7` · `#ffffff` · `#f2efea` · `#e6dfd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[90rem]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-12`, `gap-16`, `gap-24`

**Primary button**

```html
<a class="font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 bg-[#172A24] text-[#FAF9F7] hover:bg-[#C2A679] transition-colors duration-500 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Timeline (`timeline`)
7. Services (`services`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #172a24;
  --color-surface: #f2efea;
  --color-text: #faf9f7;
  --color-border: #ffffff;
  --color-accent: #c2a679;
  --color-accent-2: #c2a679;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#172a24',
    surface: '#f2efea',
    ink: '#faf9f7',
    line: '#ffffff',
    accent: '#c2a679',
    accent2: '#c2a679',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in DM Serif Display, large and centred, in lowercase or sentence case
- **Do:** Use the gold (#c2a679) for small details and as the single accent
- **Do:** Keep buttons as thin square outlines with spaced uppercase labels
- **Don't:** Don't use a light page ground for the hero; it is deep green
- **Don't:** Don't use rounded pill buttons; this design uses square outlines
- **Don't:** Don't add imagery over the green field; the hero is type-only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
