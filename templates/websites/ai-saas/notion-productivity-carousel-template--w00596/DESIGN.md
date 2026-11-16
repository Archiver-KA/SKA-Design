# Design system — Notion Productivity Carousel Template

`SN-W00596` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A set of swipeable portrait cards on a light grey ground, each a white panel with a heavy black Inter headline and a thin outlined pill button. The cards use very large corner radii and sit side by side with the next card peeking in at the edge, which signals the carousel. The dark mockup panels provide the only contrast.

**Mood:** bold, editorial, light, swipeable, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#f5f5f5` · `#a3a3a3` · `#d4d4d4` · `#262626` · `#000000` · `#737373` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 24px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[40px]` (40px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-[200px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-black text-white px-8 py-4 rounded-full font-medium text-lg w-full max-w-xs flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors mb-4">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Articles (`blog-articles`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set cards as white panels on the light grey ground (#f5f5f5) with very large corner radii.
- **Do:** Set headlines in heavy black Inter (#171717) and keep the button an outlined black pill.
- **Do:** Show the next card at the edge so the swipe affordance is visible.
- **Don't:** Don't add the red (#ef4444) or yellow (#eab308) accents.
- **Don't:** Don't fill the button; the outline is the style.
- **Don't:** Don't use small corner radii on the cards; the large radius is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
