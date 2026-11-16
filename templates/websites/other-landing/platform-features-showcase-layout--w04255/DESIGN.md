# Design system — Platform Features Showcase Layout

`SN-W04255` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy feature hero with a small uppercase tag above a bold white headline, a short paragraph, and an indigo primary button beside a dark grey secondary button. Below, a row of four equal cards sits on the same navy ground, each with a small icon chip and a bold title. The indigo is limited to the primary button and the tag.

**Mood:** structured, navy, calm, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#1f2937` · `#4f46e5` · `#ffffff` · `#6366f1` · `#111827` · `#818cf8` · `#9ca3af` · `#e5e7eb` · `#374151` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · h3 20px
- **Weights in use:** semibold, medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Common gaps:** `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm border border-indigo-700/30 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #111827;
  --color-text: #e5e7eb;
  --color-border: #1f2937;
  --color-accent: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#111827',
    ink: '#e5e7eb',
    line: '#1f2937',
    accent: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) for the primary button and the intro tag only
- **Do:** Keep the four feature cards on the navy ground with small icon chips
- **Do:** Set card titles bold and white, with short descriptions in grey
- **Don't:** Don't use indigo for the cards or the icons
- **Don't:** Don't add a second filled button beside the primary
- **Don't:** Don't place the cards on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
