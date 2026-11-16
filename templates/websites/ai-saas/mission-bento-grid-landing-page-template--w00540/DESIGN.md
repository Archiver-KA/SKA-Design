# Design system — Mission Bento Grid Landing Page Template

`SN-W00540` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark bento layout on black (#000000) with rounded charcoal cards (#18181b) arranged in a grid. The one decorative colour on the headline is orange (#f97316), applied to a single phrase and the plus marks, while indigo (#6366f1) appears only on the star ratings. Large Inter numerals such as 'R&D+' and '5.0' act as the focal point of each card.

**Mood:** minimal, structured, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#71717a` · `#000000` · `#f97316` · `#18181b` · `#52525b` · `#a1a1aa` · `#cbd5e1` · `#431407`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h3 20px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #cbd5e1;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#cbd5e1',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Build the grid on black with charcoal cards (#18181b) and even gaps
- **Do:** Use orange (#f97316) only for the highlighted headline phrase and plus marks
- **Do:** Use large numerals as the focal point of each card
- **Don't:** Don't use indigo for headlines; it belongs to the star ratings
- **Don't:** Don't add shadows to the cards; separation comes from tone
- **Don't:** Don't introduce a light background behind the grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
