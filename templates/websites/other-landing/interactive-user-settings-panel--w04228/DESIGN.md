# Design system — Interactive User Settings Panel

`SN-W04228` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, utilitarian settings card on an off-white ground (#fafafa) with a stack of labelled rows, each separated by a hairline divider. Toggles are the main decoration, filled in warm yellow (#f3b519) when on and grey when off, and the primary action is a soft mint button. Type is one neutral sans-serif, with a bold title and small grey descriptions under each setting.

**Mood:** utilitarian, warm, calm, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#e8e8e8` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f3b519` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#e8e8e8` · `#404040` · `#737373` · `#e5e5e5` · `#fafafa` · `#f3b519` · `#171717` · `#059669` · `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-md` (6px), `rounded` (4px)
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10">…</a>
```

## Page structure

Blocks in page order:

1. Timeline (`timeline`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #e8e8e8;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f3b519;
  --color-accent-2: #d1fae5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#e8e8e8',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f3b519',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use #f3b519 only for on-state toggles
- **Do:** Keep each setting row separated by a hairline divider
- **Do:** Set titles in bold sans-serif with muted grey descriptions
- **Don't:** Don't use the yellow for buttons; the primary action stays mint
- **Don't:** Don't add icons to every row; the rows rely on text and toggles
- **Don't:** Don't mix more than one toggle style in the same panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
