# Design system — Expert-Led Learning Sessions List

`SN-W03467` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dense, data-focused listing on a pale blue-grey ground with white cards. Three large summary figures sit above a table of rows, each with an expert photo and role, a subject, a date and a set of action buttons. Availability uses small coloured pills, mint for open places and amber for few places, and everything is set in Inter.

**Mood:** organised, data-led, clear, light, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8f4f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#525252` · `#d1fae5` · `#34d399` · `#f59e0b` · `#047857` · `#22d3ee` · `#171717` · `#0891b2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h2 24px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow`
- **Content width:** `max-w-[1200px]`, `max-w-[280px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full text-sm font-medium hover:from-cyan-700 hover:to-teal-700 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Team (`team`)
2. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e8f4f8;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8f4f8',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place each listing on a white card over the pale blue ground
- **Do:** Show availability as a pill: mint for open, amber for few places
- **Do:** Keep the three summary figures above the table in large Inter numerals
- **Don't:** Don't use more than three tag colours in one table
- **Don't:** Don't drop the action buttons from the rows
- **Don't:** Don't use heavy shadows on the table cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
