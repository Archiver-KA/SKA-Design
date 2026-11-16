# Design system — Baby Development Milestone Tracker

`SN-W04160` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, neutral interface on an off-white stone ground (#f5f5f4), with white rounded cards and near-black text (#292524). There is no accent colour; hierarchy comes from weight and tone, and a dark pill button and a dark progress bar are the strongest elements. The system sans-serif keeps the layout calm and understated.

**Mood:** calm, neutral, warm, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#a8a29e` · `#292524` · `#f5f5f4` · `#e7e5e4` · `#ffffff` · `#44403c` · `#d6d3d1` · `#1c1917` · `#57534e` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 18px · h3 14px · body 12px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-stone-800 text-white px-6 py-2 font-bold rounded-lg shadow-2xl hover:bg-stone-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#57534e',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use #292524 for the primary button and the progress bar.
- **Do:** Keep cards white with rounded corners on the #f5f5f4 ground.
- **Do:** Use the stone greys for secondary text and dividers.
- **Don't:** Don't introduce a bright accent colour.
- **Don't:** Don't set text in pure black.
- **Don't:** Don't round the cards beyond the existing radius.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
