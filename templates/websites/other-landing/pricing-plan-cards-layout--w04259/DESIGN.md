# Design system — Pricing Plan Cards Layout

`SN-W04259` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three dark navy pricing cards sit on a deep indigo ground, with the middle Standard plan lifted and marked by a small grey Popular badge. Each plan uses a purple-to-blue gradient button, and the cards are plain, with a small icon, a bold price and short feature bullets. The gradient is the only colour, used on every button.

**Mood:** indigo, even, dark, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#191933` | Page ground |
| Surface | `#14141d` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#93c5fd` · `#ffffff` · `#d1d5db` · `#18182f` · `#e5e7eb` · `#14141d` · `#23234a` · `#191933` · `#d8b4fe` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 18px · body 30px
- **Weights in use:** bold, medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #191933;
  --color-surface: #14141d;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-accent: #93c5fd;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#191933',
    surface: '#14141d',
    ink: '#ffffff',
    muted: '#d1d5db',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set each plan button as a purple-to-blue gradient, used on every card
- **Do:** Keep the plan cards dark with a bold price and short bullets
- **Do:** Mark the middle plan with a small grey Popular badge only
- **Don't:** Don't use a solid colour for the plan buttons
- **Don't:** Don't make the outer cards brighter than the middle plan
- **Don't:** Don't add a second badge colour to the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
