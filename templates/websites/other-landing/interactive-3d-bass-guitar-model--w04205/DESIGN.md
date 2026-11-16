# Design system — Interactive 3D Bass Guitar Model

`SN-W04205` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy demo panel (#111827) with a small white heading and one line of instruction, followed by a row of four colour-coded string buttons: red, blue, green and amber. The buttons are small, slightly rounded and filled with saturated colour, so each string is identified by its colour alone. The 3D bass guitar view sits below the controls.

**Mood:** playful, clear, technical, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#ca8a04` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#dc2626` · `#b91c1c` · `#2563eb` · `#1d4ed8` · `#16a34a` · `#15803d` · `#ca8a04` · `#a16207`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)

**Primary button**

```html
<a class="px-3 py-1 bg-red-600 rounded hover:bg-red-700">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #111827;
  --color-text: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #ca8a04;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    ink: '#ffffff',
    accent: '#dc2626',
    accent2: '#ca8a04',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Give each string button its own saturated colour with white text
- **Do:** Keep the small heading and one instruction line above the controls
- **Do:** Keep corners slightly rounded at the small size shown
- **Don't:** Don't use light backgrounds for this demo
- **Don't:** Don't use more than four colours for the controls
- **Don't:** Don't add text beyond the instruction line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
