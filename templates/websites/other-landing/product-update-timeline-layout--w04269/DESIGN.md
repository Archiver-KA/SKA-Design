# Design system — Product Update Timeline Layout

`SN-W04269` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A vertical changelog timeline on a near-black ground (#09090b) with a thin rail and one coloured dot per entry. Each entry sits in a flat dark card with a small tag naming the change type, and blue, violet and green separate new features, fixes and improvements. Dates appear in small text above a bold title, so the list scans quickly.

**Mood:** clean, organised, dark, scannable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#a1a1aa` · `#18181b` · `#27272a` · `#2563eb` · `#fbbf24` · `#f87171` · `#09090b` · `#ffffff` · `#3f3f46` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px · body 14px
- **Weights in use:** bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-md`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #2563eb;
  --color-accent-2: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#2563eb',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Give every entry a coloured dot on the rail and a tag that names the change type
- **Do:** Keep entry cards flat and dark with a thin border and no shadow
- **Do:** Show the date in small text above the bold entry title
- **Don't:** Don't use the tag colours for body text
- **Don't:** Don't break the vertical rail into separate pieces
- **Don't:** Don't add images to the entries; the layout is text-led

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
