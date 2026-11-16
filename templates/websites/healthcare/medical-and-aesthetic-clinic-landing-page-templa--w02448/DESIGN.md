# Design system — Medical & Aesthetic Clinic Landing Page Template

`SN-W02448` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale mint-white page with dark teal type and an arched photo frame as the hero's main shape. Headlines are a heavy sans with tight leading, and the content runs as an orderly service index below the hero. Teal (#0f766e) carries the buttons and small labels, and the palette stays cool and light.

**Mood:** clean, clinical, airy, orderly, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f2a26` | Headings and primary copy |
| Muted text | `#4e6661` | Secondary copy, captions |
| Border | `#d3e2dd` | Hairlines, dividers, outlines |
| Accent | `#0f766e` | Primary action and highlights |
| Second accent | `#0f766e` | Supporting highlights |

Palette by frequency of use: `#4e6661` · `#d3e2dd` · `#0f2a26` · `#0f766e` · `#ffffff` · `#f2f7f5` · `#f4b860` · `#0b5f58` · `#bfd3ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Be Vietnam Pro
- **Body:** Be Vietnam Pro
- **Loaded families:** Be Vietnam Pro
- **Scale (largest breakpoint):** h1 70px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-[250px]`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-x-4`, `gap-y-1`, `gap-4`

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
  --color-accent-2: #0f766e;
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
    accent2: '#0f766e',
  },
  fontFamily: { display: ['Be Vietnam Pro'], sans: ['Be Vietnam Pro'] },
} }
```

## Do and don't

- **Do:** Set headlines in Be Vietnam Pro at a heavy weight with tight leading
- **Do:** Use teal (#0f766e) for primary buttons and eyebrow labels
- **Do:** Frame the hero image in an arch with a light border (#d3e2dd)
- **Don't:** Don't use the warm amber (#f4b860) except as a rare highlight
- **Don't:** Don't set body copy in light grey on the mint ground; keep it darker
- **Don't:** Don't add decorative shapes beyond the arch; the page is flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
