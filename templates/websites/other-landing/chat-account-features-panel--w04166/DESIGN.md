# Design system — Chat Account Features Panel

`SN-W04166` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single feature card on a deep slate ground (#111827), built as translucent glass with a thin light edge and rounded corners. The title is white and the feature list is light grey, with small check marks. The primary action is a full-width gradient button running from blue-violet to orange, the only saturated element on the panel.

**Mood:** glassy, focused, dark, gradient-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0f172a` · `#111827` · `#1e293b` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-inner`
- **Common gaps:** `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#d1d5db',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gradient only on the primary button.
- **Do:** Keep the card translucent with rounded corners.
- **Do:** Set feature rows in light grey with small check marks.
- **Don't:** Don't add a second gradient button in the same card.
- **Don't:** Don't use a solid white card on the dark ground.
- **Don't:** Don't set the title smaller than the feature list.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
