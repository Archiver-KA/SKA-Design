# Design system — Mobile Streaming Content Browser

`SN-W04241` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark streaming interface in a phone frame on a warm near-black screen, with pill-shaped category filters at the top. The active filter and the New Release label are blue, while red marks watch progress on the Continue Watching row, so each colour has one job. Section titles are bold sans-serif, and the content is stacked as full-width rows.

**Mood:** streaming, dark, functional, colour-coded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#374151` · `#3b82f6` · `#dc2626` · `#292524` · `#2a2a2a` · `#1c1917` · `#000000` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px · h2 18px · h3 18px
- **Weights in use:** bold, medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Common gaps:** `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 bg-blue-500 rounded-full text-sm font-medium whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. App download (`app-download`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #3b82f6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#374151',
    ink: '#ffffff',
    accent: '#dc2626',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the active filter and the New Release label only
- **Do:** Use red (#dc2626) for watch progress bars only
- **Do:** Keep the screen on warm near-black (#1c1917) with white titles
- **Don't:** Don't use red for buttons or labels; it marks progress
- **Don't:** Don't mix the blue and red roles on the same element
- **Don't:** Don't add light cards to the dark screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
