# Design system — Creative Economy Initiative Landing Page Template

`SN-W03435` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark creative-economy page on near-black, with a large bold sans-serif headline where the middle lines are set in an orange-to-red gradient [#f97316]. A small uppercase orange label sits above the headline, and the navigation has one filled orange button. The warm accent is applied with restraint, so the white headline stays the first thing read.

**Mood:** bold, dark, warm, official

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#44403c` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#292524` · `#44403c` · `#a8a29e` · `#fb923c` · `#d6d3d1` · `#1c1917` · `#60a5fa` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-orange-500/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex transition-all hover:shadow-lg hover:bg-orange-500 text-sm font-medium text-white bg-orange-600 rounded-full px-6 py-2 items-center justify-center font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #44403c;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#44403c',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle headline lines in an orange-to-red gradient (#f97316)
- **Do:** Use the orange for the top-bar button and the small uppercase label
- **Do:** Keep the page on dark surfaces (#1c1917) with white headlines
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add a second accent colour such as green to the hero
- **Don't:** Don't set the small labels in lowercase or without tracking

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
