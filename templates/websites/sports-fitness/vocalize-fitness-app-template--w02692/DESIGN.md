# Design system — Vocalize Fitness App Template

`SN-W02692` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Mobile-first calorie tracker shown as a phone-width column on a pale grey ground (#f8fafc). The screen is built from white cards, with two tinted summary cards at the top: indigo (#eef2ff) for calories remaining and peach (#ffedd5) for calories burned. The indigo wordmark (#4f46e5) and the small progress bars carry the colour, and the rest is neutral grey text in a plain sans.

**Mood:** clean, functional, light, soft tints

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#eef2ff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#a3a3a3` · `#171717` · `#f5f5f5` · `#737373` · `#6366f1` · `#ffffff` · `#262626` · `#4f46e5` · `#eef2ff` · `#e0e7ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-indigo-200`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-1`

**Primary button**

```html
<a class="w-full py-2 transition-colors rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #eef2ff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #4f46e5;
  --color-accent-2: #ffedd5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#eef2ff',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#4f46e5',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Build summary tiles on white cards with tinted fills, indigo (#eef2ff) and peach (#ffedd5).
- **Do:** Use indigo (#4f46e5) for the wordmark, progress bars and primary action only.
- **Do:** Keep list rows on white with grey meta text and a bold right-aligned kcal value.
- **Don't:** Don't use the indigo as a page background; it is a tint for cards.
- **Don't:** Don't add gradients to the summary cards; they use flat fills.
- **Don't:** Don't widen the layout past a phone column; the design is built for one narrow screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
