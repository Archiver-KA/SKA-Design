# Design system — Mobile Device Frame with 3D Effects

`SN-W04240` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A mobile booking screen in a dark frame, with navy panels stacked as rounded cards over a near-black ground. Sky blue (#38bdf8) is the main accent, used on the featured-deal label and the primary button, while the quick-book icons pick up orange and green. Type is a clean sans-serif with a bold route title, and the price sits large in the bottom-right of the deal card.

**Mood:** travel-focused, navy, rounded, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#374151` · `#9ca3af` · `#38bdf8` · `#6b7280` · `#e5e7eb` · `#111827` · `#0ea5e9` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 18px · body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`

**Primary button**

```html
<a class="bg-sky-600 text-white py-2 px-4 rounded-full text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #38bdf8;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#38bdf8',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use sky blue (#38bdf8) for the featured label and the primary button
- **Do:** Keep the cards in navy (#1f2937) with rounded corners
- **Do:** Keep the route title bold and the price large in the deal card
- **Don't:** Don't use orange or green for buttons; they are icon colours only
- **Don't:** Don't place light cards on the navy screen
- **Don't:** Don't use more than one blue for the primary action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
