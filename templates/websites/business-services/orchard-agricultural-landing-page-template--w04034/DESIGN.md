# Design system — Orchard Agricultural Landing Page Template

`SN-W04034` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A poster-like page where cream and acid lime split the hero on a diagonal. The headline runs across both fields in near-black condensed uppercase at very large size, and a flat red panel with a small monospace caption provides the one image-like block. Square edges and small captions keep the layout bold and graphic.

**Mood:** bold, graphic, poster-like, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f0e7` | Page ground |
| Text | `#182116` | Headings and primary copy |
| Border | `#182116` | Hairlines, dividers, outlines |
| Accent | `#d9ef45` | Primary action and highlights |
| Second accent | `#b72c24` | Supporting highlights |

Palette by frequency of use: `#182116` · `#ffffff` · `#f4f0e7` · `#d9ef45` · `#172414` · `#d4e247` · `#b72c24` · `#e4efba` · `#d94032` · `#e7bd53`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Anton
- **Body:** Anton
- **Loaded families:** Anton, IBM Plex Mono
- **Scale (largest breakpoint):** h3 60px · body 12px
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-[1rem_1rem_0_#182116]`
- **Content width:** `max-w-[90rem]`, `max-w-[100rem]`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-4`, `gap-5`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Articles (`blog-articles`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f0e7;
  --color-text: #182116;
  --color-border: #182116;
  --color-accent: #d9ef45;
  --color-accent-2: #b72c24;
  --font-display: "Anton", sans-serif;
  --font-body: "Anton", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f0e7',
    ink: '#182116',
    line: '#182116',
    accent: '#d9ef45',
    accent2: '#b72c24',
  },
  fontFamily: { display: ['Anton'], sans: ['Anton'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy condensed uppercase at poster scale
- **Do:** Split the hero background into cream and lime (#d9ef45) on a diagonal
- **Do:** Use red (#b72c24) for one panel or highlight per view
- **Don't:** Don't soften headlines with light weights or lowercase
- **Don't:** Don't set lime text on cream
- **Don't:** Don't round the corners of panels or buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
