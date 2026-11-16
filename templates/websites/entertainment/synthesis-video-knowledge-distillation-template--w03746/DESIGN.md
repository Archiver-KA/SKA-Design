# Design system — Synthesis Video Knowledge Distillation Template

`SN-W03746` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome dark tool page on a near-black ground [#0a0a0a]. A centred medium-weight headline sits over one pill-shaped input with a white button attached to it. The preview card below uses low-contrast grey panels, small grey chips and hairline separators, so the product reads like a document reader. Hierarchy comes from size and grey steps alone.

**Mood:** monochrome, quiet, focused, utilitarian, document-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e4e4e7` · `#71717a` · `#a1a1aa` · `#27272a` · `#f4f4f5` · `#18181b` · `#0a0a0a` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 24px · h3 16px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-black/50`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="bg-zinc-100 text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2 ml-2 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #27272a;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#27272a',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page monochrome and build hierarchy from size and grey steps
- **Do:** Join the input and its button into one connected pill
- **Do:** Use small grey chips for status labels in the preview
- **Don't:** Don't introduce colour into the preview card
- **Don't:** Don't add drop shadows to the preview card
- **Don't:** Don't set the headline in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
