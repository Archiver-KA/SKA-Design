# Design system — Responsive Website Footer Layout

`SN-W04077` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A multi-column footer on a dark blue-grey field, with the company name and short description at the left and link columns beside it. The newsletter sits in a bordered band whose gradient button runs from blue (#3b82f6) to purple (#a855f7). Social links are small round icon buttons, and a thin rule separates the legal line.

**Mood:** structured, dark, modern, clear, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a855f7` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="px-5 py-3 rounded-r-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Lay out the footer in columns, with the brand and description first and link groups beside
- **Do:** Use the blue-to-purple gradient (#3b82f6 to #a855f7) only on the subscribe button
- **Do:** Keep the newsletter in a bordered band across the footer
- **Don't:** Don't apply the gradient to text or to the link groups
- **Don't:** Don't add a second newsletter form elsewhere in the footer
- **Don't:** Don't drop the thin rule above the legal line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
