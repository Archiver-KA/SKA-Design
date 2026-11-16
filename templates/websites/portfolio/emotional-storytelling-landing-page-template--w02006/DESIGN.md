# Design system — Emotional Storytelling Landing Page Template

`SN-W02006` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A story opener on a deep plum ground (#140a11) with a blurred plum glow in the centre and faint star-like specks. The text is a single centred line of Cormorant Garamond in cream, preceded by a small tracked uppercase caption, and a thin progress bar in peach (#f0b79c) runs along the top. The screen moves slowly and is built around one sentence at a time.

**Mood:** intimate, dreamy, slow, warm-dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#140a11` | Page ground |
| Surface | `#26101f` | Cards, panels, raised areas |
| Text | `#f6e7de` | Headings and primary copy |
| Accent | `#f0b79c` | Primary action and highlights |
| Second accent | `#f0b79c` | Supporting highlights |

Palette by frequency of use: `#26101f` · `#fff2e0` · `#140a11` · `#f0b79c` · `#fff1e2` · `#e7b499` · `#ffe0c6` · `#f3d6c4` · `#ffdfbb` · `#ffe2cc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Outfit
- **Scale (largest breakpoint):** h1 48px · body 30px
- **Weights in use:** light
- **Letter spacing:** `tracking-tight`, `tracking-[.45em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[420px]`, `max-w-[340px]`
- **Common gaps:** `gap-5`, `gap-1.5`, `gap-7`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #140a11;
  --color-surface: #26101f;
  --color-text: #f6e7de;
  --color-accent: #f0b79c;
  --color-accent-2: #f0b79c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#140a11',
    surface: '#26101f',
    ink: '#f6e7de',
    accent: '#f0b79c',
    accent2: '#f0b79c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set one line of Cormorant Garamond at a time, centred on the dark ground
- **Do:** Use the peach (#f0b79c) only for the progress indicator and small highlights
- **Do:** Keep the plum glow blurred and low-contrast behind the text
- **Don't:** Don't put bright white or high-saturation colours on the plum ground
- **Don't:** Don't set small body text; the display serif is the main voice
- **Don't:** Don't add hard-edged panels or cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
