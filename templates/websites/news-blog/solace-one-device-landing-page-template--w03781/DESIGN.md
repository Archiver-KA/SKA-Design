# Design system — Solace One Device Landing Page Template

`SN-W03781` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A device launch page on a near-black ground, with large white Inter headlines set tightly and a short grey supporting line. Orange buttons are the main call to action, and a translucent newsletter card sits over the right side of the hero. Features appear as small icon rows with a short label each, so the page reads as a calm product sheet rather than a spec wall.

**Mood:** calm, product-focused, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#000000` · `#047857` · `#a3a3a3` · `#059669` · `#525252` · `#d4d4d4` · `#d1fae5` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #000000;
  --color-accent: #047857;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#f5f5f5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#000000',
    accent: '#047857',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at a large size, in white (#ffffff), with tight leading.
- **Do:** Use the orange call-to-action buttons only for ordering and preordering.
- **Do:** Present features as small icon rows with one short label and one line of text.
- **Don't:** Don't add more than one button colour in the hero.
- **Don't:** Don't replace the translucent glass panels with solid fills.
- **Don't:** Don't pack the hero with spec numbers beyond the feature rows.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
