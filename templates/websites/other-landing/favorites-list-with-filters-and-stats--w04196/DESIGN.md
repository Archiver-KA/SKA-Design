# Design system — Favorites List with Filters and Stats

`SN-W04196` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A mobile favourites screen on a pale mint ground (#f0fdfa), with white cards, rounded corners and a small image area on each. The filter chips are pill-shaped, with the active chip filled in teal, and each place card carries a coloured category tag on its image, purple for one category and orange for another. A red heart marks saved items, and a teal bottom bar anchors the navigation.

**Mood:** friendly, airy, tidy, mobile-first

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0fdfa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#111827` · `#374151` · `#ef4444` · `#4b5563` · `#facc15` · `#e5e7eb` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-2xl`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="shrink-0 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f0fdfa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #ef4444;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0fdfa',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#ef4444',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use pill-shaped filter chips, with the active chip filled
- **Do:** Keep each place card white with a rounded image area and a red heart for saved items
- **Do:** Place category tags on the image corner only
- **Don't:** Don't make the mint ground stronger than the white cards
- **Don't:** Don't use more than three tag colours
- **Don't:** Don't put text directly on the mint background without a card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
