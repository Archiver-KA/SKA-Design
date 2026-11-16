# Design system — Chris Linx Personal Bio Link Template

`SN-W01856` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light link-in-bio card: a single white rounded panel with a centred avatar, bold black name and grey role line, set on a pale grey ground with a faint dot grid. Stat chips are small outlined pills in one row under the name, and a dark pill sits fixed at the bottom right. The card layout is the design.

**Mood:** simple, soft, card-based, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#e5e5e5` · `#171717` · `#ffffff` · `#f5f5f5` · `#fafafa` · `#737373` · `#d4d4d4` · `#000000` · `#a3a3a3` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 24px · h3 14px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[14px]` (14px), `rounded-full` (9999px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-black/5`
- **Content width:** `max-w-[480px]`, `max-w-[280px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="w-full bg-neutral-100 border border-neutral-200 text-neutral-900 font-semibold text-sm rounded-[14px] py-3.5 hover:bg-neutral-200 hover:border-neutral-300 transition-all mt-1">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Contact form (`contact-form`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 14px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre a single white card with generous internal spacing on the pale grey ground
- **Do:** Show stats as small outlined pills in one row beneath the name
- **Do:** Keep the primary action as a dark pill, fixed to the corner
- **Don't:** Don't add colour; the palette is greyscale
- **Don't:** Don't use a shadow heavier than the card's soft edge
- **Don't:** Don't leave the avatar or hero image empty

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
