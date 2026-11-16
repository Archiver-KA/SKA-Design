# Design system — Workflow Process Steps Layout

`SN-W04341` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light four-step process row on white, with a thin teal line joining four numbered circles in teal [#2dd4bf]. Each step has a bold black title and a short grey description centred below its number, and a centred heading with a grey intro sits above the row. Teal is used only for the numbered circles and the joining line, so the sequence reads in order.

**Mood:** simple, orderly, clear, airy, instructional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#4b5563` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#4b5563` · `#d1d5db` · `#818cf8` · `#2dd4bf` · `#60a5fa` · `#c7d2fe` · `#99f6e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 36px · h3 18px · body 18px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-12`

## Page structure

Blocks in page order:

1. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #4b5563;
  --color-border: #ffffff;
  --color-accent: #2dd4bf;
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
    ink: '#4b5563',
    line: '#ffffff',
    accent: '#2dd4bf',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use teal (#2dd4bf) for the numbered circles and the joining line only
- **Do:** Keep each step title bold and black with a grey description below
- **Do:** Space the four steps evenly across the row with centred text
- **Don't:** Don't add more than four steps to the row
- **Don't:** Don't use teal for titles or body text
- **Don't:** Don't put a background behind each step; the row sits on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
