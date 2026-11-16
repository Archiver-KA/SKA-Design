# Design system — Serene Meditation App Template

`SN-W00703` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft, app-style mock of one phone on a pale grey ground (#f3f4f6), with white cards and rounded tiles on top. Indigo (#4f46e5) is the single action colour, used on the Begin button, while the category tiles differ only by pastel yellow, blue and green fills. Type is a plain system sans at small sizes, so the screen, not the headline, is what the eye lands on.

**Mood:** calm, soft, friendly, app-like, pastel

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#f3f4f6` · `#ffffff` · `#1f2937` · `#111827` · `#4f46e5` · `#9ca3af` · `#4b5563` · `#6b7280` · `#dcfce7` · `#fef3c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 18px · body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`

**Primary button**

```html
<a class="bg-indigo-600 text-white py-2 px-4 rounded-full text-sm font-medium">…</a>
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
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #4f46e5;
  --color-accent-2: #fef3c7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#4f46e5',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the page ground pale grey (#f3f4f6) with white cards on top.
- **Do:** Reserve indigo (#4f46e5) for the one primary action in each card.
- **Do:** Give each category tile a single pastel tint, not a gradient.
- **Don't:** Don't set headlines above 24px; the display size stays small.
- **Don't:** Don't add glass blur panels; the surfaces are flat.
- **Don't:** Don't add accent colours beyond the pastel tiles.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
