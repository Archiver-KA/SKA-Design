# Design system — Tailwind CSS Color Shades Table

`SN-W04300` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, data-first reference table on a pale slate ground (#f8fafc) that lays colour scales out as rows and shades as columns. Each swatch is a flat square with its hex code printed inside, and the page title is set in blue (#2563eb). The grid is strict, with thin light grey dividers, so the colours carry all of the visual weight.

**Mood:** neutral, precise, light, systematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#94a3b8` · `#ffffff` · `#1e293b` · `#f8fafc` · `#f1f5f9` · `#2563eb` · `#475569` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · body 12px
- **Weights in use:** bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    line: '#f1f5f9',
    accent: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Lay colour scales out as rows with shades as columns and thin light dividers
- **Do:** Print each hex code inside its swatch in a small, legible size
- **Do:** Keep the page title in blue (#2563eb) and the rest of the text slate
- **Don't:** Don't add colour to the table chrome; the swatches carry all the colour
- **Don't:** Don't put shadows on the swatches
- **Don't:** Don't break the scale grid with uneven cell widths

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
