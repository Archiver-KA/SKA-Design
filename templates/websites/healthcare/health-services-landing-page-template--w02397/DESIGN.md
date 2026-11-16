# Design system — Health Services Landing Page Template

`SN-W02397` · healthcare · light mode · Sinera Atlas theme `calm` · language `en-GB`

## Direction

A holding screen sits on a full-bleed deep plum background, with a large heavy white sans-serif statement and a small status pill. The type is set centred, with a quiet footer line, so the screen reads as a placeholder.

**Mood:** placeholder, plain, heavy, centred, unfinished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f2a26` | Headings and primary copy |
| Muted text | `#4e6661` | Secondary copy, captions |
| Border | `#d3e2dd` | Hairlines, dividers, outlines |
| Accent | `#0f766e` | Primary action and highlights |
| Second accent | `#f4b860` | Supporting highlights |

Palette by frequency of use: `#d3e2dd` · `#4e6661` · `#0f766e` · `#ffffff` · `#0f2a26` · `#f2f7f5` · `#cfe0db` · `#2e4a45` · `#f4b860` · `#0b5f58`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Be Vietnam Pro
- **Body:** Be Vietnam Pro
- **Loaded families:** Be Vietnam Pro
- **Scale (largest breakpoint):** h1 99px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f2f7f5;
  --color-surface: #ffffff;
  --color-text: #0f2a26;
  --color-muted: #4e6661;
  --color-border: #d3e2dd;
  --color-accent: #0f766e;
  --color-accent-2: #f4b860;
  --font-display: "Be Vietnam Pro", sans-serif;
  --font-body: "Be Vietnam Pro", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f7f5',
    surface: '#ffffff',
    ink: '#0f2a26',
    muted: '#4e6661',
    line: '#d3e2dd',
    accent: '#0f766e',
    accent2: '#f4b860',
  },
  fontFamily: { display: ['Be Vietnam Pro'], sans: ['Be Vietnam Pro'] },
} }
```

## Do and don't

- **Do:** Set the statement in heavy sans-serif, white, centred on the ground.
- **Do:** Keep the status pill small and quiet, above the headline.
- **Do:** Keep the plum ground behind the statement and the status pill.
- **Don't:** Don't use the plum ground as the template colour for the full site.
- **Don't:** Don't treat the holding screen as the final hero.
- **Don't:** Don't add decoration beyond the soft ground tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
