# Design system — Meditation Timer with Progress Ring

`SN-W04236` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A meditation timer shown in a dark phone frame on a pale grey ground, with the timer ring in violet (#a855f7) and the time set large at its centre. The phone screen is a deep navy-black with soft, muted text, so the purple ring is the main bright element. Type is one clean sans-serif, with a small headline at the top and a short label under the time.

**Mood:** calm, focused, soft, dark-screen

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6366f1` · `#a855f7` · `#f3f4f6` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h3 14px · body 12px
- **Weights in use:** light, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #111827;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#111827',
    ink: '#111111',
    line: '#ffffff',
    accent: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#a855f7) for the timer ring and active progress only
- **Do:** Set the time large and centred inside the ring
- **Do:** Keep the phone screen in a deep navy-black with muted text
- **Don't:** Don't use the violet for large background areas
- **Don't:** Don't add bright colours to the screen; the ring carries the emphasis
- **Don't:** Don't place the timer off-centre

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
