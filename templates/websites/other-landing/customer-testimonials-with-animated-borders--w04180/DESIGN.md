# Design system — Customer Testimonials with Animated Borders

`SN-W04180` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three testimonial cards in a row on a dark navy ground (#111827), each with a thin gradient border running from blue to purple. Gradient buttons and avatar rings repeat the same colours. Quotes are set in italic light grey and names in white, which keeps the text quiet while the gradients supply the colour.

**Mood:** colourful, soft, dark, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#1e293b` · `#9ca3af` · `#e5e7eb` · `#111827` · `#3b82f6` · `#a855f7` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 36px
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-inner`
- **Common gaps:** `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1e293b',
    ink: '#ffffff',
    muted: '#e5e7eb',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue-to-purple gradient for card borders and avatar rings only.
- **Do:** Set quotes in italic light grey.
- **Do:** Keep cards on #1e293b with rounded corners.
- **Don't:** Don't add gradient to the body text.
- **Don't:** Don't put more than one gradient button in a row.
- **Don't:** Don't set names in grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
