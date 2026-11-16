# Design system — Weekly Newsletter Summary Layout

`SN-W03784` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A newsletter layout on a dark navy ground, with stacked cards for the featured story, market figures and short reads. Blue marks the brand word and the featured label, while green and red are kept for positive and negative market changes. Type is Inter at small sizes, so the page reads as a dense briefing with clear card edges and little ornament.

**Mood:** informative, dense, dark, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#60a5fa` · `#4ade80` · `#374151` · `#111827` · `#e5e7eb` · `#3b82f6` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 20px · body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #60a5fa;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#60a5fa',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#60a5fa) for the brand word and the featured label only.
- **Do:** Reserve green (#4ade80) and red for positive and negative figures.
- **Do:** Set card titles in Inter at small sizes on surfaces of #1f2937.
- **Don't:** Don't use blue for body text.
- **Don't:** Don't add decorative images to the market cards.
- **Don't:** Don't show market figures in a colour that does not match their trend.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
