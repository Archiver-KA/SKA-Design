# Design system — User Activity Bar Chart

`SN-W04326` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A chart card with cyan-to-blue gradient bars set on deep navy, framed by a soft glass panel with a faint blur. Each bar is topped by a small label showing a percentage and a count, and the axis labels are small and muted. Bright cyan [#22d3ee] is the one colour in the chart, so the card reads as a compact dark data widget.

**Mood:** sleek, data-led, dark, glassy, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Display
- **Body:** SF Pro Display
- **Loaded families:** SF Pro Display
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Common gaps:** `gap-4`, `gap-6`

## Page structure

Blocks in page order:

1. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['SF Pro Display'], sans: ['SF Pro Display'] },
} }
```

## Do and don't

- **Do:** Fill bars with the cyan-to-blue gradient, one hue family per series
- **Do:** Place a small value label above each bar
- **Do:** Keep axis labels small and muted beneath the bars
- **Don't:** Don't use cyan for the card frame or the page background
- **Don't:** Don't add a second bar colour to the same series
- **Don't:** Don't remove the value labels from the bars

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
