# Design system — Logistics Services Landing Page Template

`SN-W03998` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A framed, editorial layout: a white rounded card sits inside an olive-grey ground, with a large black sans-serif headline in tight stacked lines. Buttons are solid black, so the page relies on type weight and whitespace rather than colour. A photograph at the bottom of the card carries the only saturated colour, keeping the first screen neutral.

**Mood:** editorial, neutral, framed, structured, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#94988e` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#1f2937` · `#4b5563` · `#d1d5db` · `#f3f4f6` · `#6b7280` · `#fafafa` · `#f9fafb` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-10`

**Primary button**

```html
<a class="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #94988e;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-muted: #1f2937;
  --color-border: #f3f4f6;
  --color-accent: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#94988e',
    surface: '#fafafa',
    ink: '#000000',
    muted: '#1f2937',
    line: '#f3f4f6',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep buttons solid black (#000000) with white labels
- **Do:** Set the headline in tight, stacked bold sans-serif
- **Do:** Use the olive-grey ground (#94988e) only around the framed card
- **Don't:** Don't add colour to the buttons
- **Don't:** Don't remove the rounded card; the frame is the structure
- **Don't:** Don't use decorative graphics in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
