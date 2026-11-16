# Design system — Feature Carousel with Scroll

`SN-W04197` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light grey section with a centred serif heading and a horizontal row of white feature cards. Each card has a pale tinted image area above a short title and a link, with lavender, mint and butter tints across the row. The last card is cropped at the edge to signal that the row scrolls, and the cards stay flat with only a light edge.

**Mood:** light, soft, editorial, scrollable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#1f2937` · `#f3f4f6` · `#4f46e5` · `#16a34a` · `#2563eb` · `#9333ea` · `#111827` · `#eef2ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 36px · h2 18px · body 14px
- **Weights in use:** semibold, medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-5xl`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-accent: #9333ea;
  --color-accent-2: #2563eb;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    accent: '#9333ea',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set card titles in the serif heading face and body text in grey
- **Do:** Use a pale tint for each card's image area
- **Do:** Crop the last card at the edge to signal the scroll
- **Don't:** Don't use dark cards on this light ground
- **Don't:** Don't use heavy colour blocks; the tints stay pale
- **Don't:** Don't add shadows heavier than the card edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
