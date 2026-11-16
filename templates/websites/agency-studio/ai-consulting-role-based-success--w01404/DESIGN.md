# Design system — AI Consulting Role-Based Success

`SN-W01404` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark slate page on [#111827] with a centred heading, a row of underlined tabs for audience type, and a grid of case cards. Each card has a coloured gradient header panel in blue or violet with a faint icon, then a short result line and green tick bullets. The look is soft and product-like, with the colour living in the card headers rather than the type.

**Mood:** soft, product-like, dark, organised, gradient-headed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#4ade80` · `#111827` · `#d1d5db` · `#1f2937` · `#1e3a8a` · `#60a5fa` · `#93c5fd` · `#312e81`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
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
  --color-accent: #4ade80;
  --color-accent-2: #1e3a8a;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
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
    accent: '#4ade80',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Keep the card headers as gradient panels in blue and violet, with the icon faint in the corner.
- **Do:** Use green (#4ade80) only for the tick bullets and the result lines.
- **Do:** Set the audience tabs as text with a thin underline on the active one.
- **Don't:** Don't put the green on the card headers; the headers are blue or violet.
- **Don't:** Don't use bright white fills for the cards; they sit on the dark surface (#1f2937).
- **Don't:** Don't add a light section; the page is dark throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
