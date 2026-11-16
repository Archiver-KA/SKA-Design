# Design system — AI Research Landing Page Template

`SN-W00143` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Deep royal-blue report page on #071962 with a light blue serif headline (#99c1e4) and an oversized, faded 2025 numeral behind a particle-cloud visual. The top navigation is set as boxed serif tabs, so the page reads like an annual research publication rather than a product site. Colour is tonal blue throughout, with no secondary accent in the hero.

**Mood:** report, tonal, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#071962` | Page ground |
| Surface | `#2c2820` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#99c1e4` | Primary action and highlights |
| Second accent | `#d7f792` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#99c1e4` · `#d1d5db` · `#2c2820` · `#54629c` · `#183cd2` · `#e5e7eb` · `#0e0e0e` · `#000000` · `#f5f5f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Space Mono, VT323
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 32px · body 24px
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-[1296px]`, `max-w-[160px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Integrations (`integrations`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #071962;
  --color-surface: #2c2820;
  --color-text: #ffffff;
  --color-border: #d1d5db;
  --color-accent: #99c1e4;
  --color-accent-2: #d7f792;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#071962',
    surface: '#2c2820',
    ink: '#ffffff',
    line: '#d1d5db',
    accent: '#99c1e4',
    accent2: '#d7f792',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the page in tonal blues from #071962 up to #99c1e4
- **Do:** Set the headline in a serif display face in light blue (#99c1e4)
- **Do:** Use faded oversized numerals as a background device behind the visual
- **Don't:** Don't add warm accent colours; the hero is blue-only
- **Don't:** Don't set body copy in serif at small sizes
- **Don't:** Don't use bright white fills behind text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
