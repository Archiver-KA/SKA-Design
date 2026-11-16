# Design system — Featured Book Detail Panel

`SN-W04198` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A book feature card on a warm cream ground (#fff7ed), split into a pale yellow cover panel and a white content side. Orange (#ea580c) carries the title, the genre tags and the solid primary button, while the secondary button is outlined. Roboto sets the text, with a grey rating line and a small pale yellow badge for bestsellers.

**Mood:** warm, friendly, product-led, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff7ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#374151` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ea580c` · `#ffffff` · `#facc15` · `#fff7ed` · `#ffedd5` · `#374151` · `#fefce8` · `#f3f4f6` · `#fef9c3` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow`, `shadow-xl`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-5`

**Primary button**

```html
<a class="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg shadow-lg transition animate__animated animate__fadeInUp">…</a>
```

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #fff7ed;
  --color-surface: #ffffff;
  --color-text: #374151;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff7ed',
    surface: '#ffffff',
    ink: '#374151',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Use orange (#ea580c) for the title, tags and the primary button
- **Do:** Pair one solid button with one outlined button
- **Do:** Set the cover on a pale tinted panel beside the text
- **Don't:** Don't set body text in orange on the cream ground
- **Don't:** Don't add more than one solid button per card
- **Don't:** Don't replace the cover's tinted panel with plain white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
