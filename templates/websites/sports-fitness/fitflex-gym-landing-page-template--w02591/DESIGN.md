# Design system — FitFlex Gym Landing Page Template

`SN-W02591` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, athletic gym page on black where the headline mixes outlined and solid white with a bright lime (#84cc16) second block. Lime fills the primary button and the left rule beside the supporting copy, and the nav is small uppercase text. The contrast between outlined and solid type gives the hero motion without any imagery.

**Mood:** athletic, dark, energetic, bold, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#84cc16` · `#171717` · `#262626` · `#737373` · `#a3a3a3` · `#65a30d` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Teko
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-lime-500 text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-lime-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Schedule (`schedule-agenda`)
6. Team (`team`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Testimonials (`testimonials`)
10. App download (`app-download`)
11. Articles (`blog-articles`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --color-accent-2: #eab308;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#84cc16',
    accent2: '#eab308',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the top headline word as an outlined stroke and the lines below in solid white and lime
- **Do:** Use the lime (#84cc16) for the primary button and the left rule beside body copy
- **Do:** Keep the nav in small uppercase sans-serif with a single solid button at right
- **Don't:** Don't fill the outlined type; the stroke-only treatment is the contrast
- **Don't:** Don't use yellow for text; lime is the accent
- **Don't:** Don't add photographs to the hero; it is type and colour only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
