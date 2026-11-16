# Design system — Renewable Energy Agency Landing Page Template

`SN-W01675` · agency-studio · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A peach-white hero with a large dark headline in which the middle phrase is set in bold orange (#ea580c), and a large orange gradient sphere floats on the right. Orange pill buttons lead the page, and small white metric cards overlap the graphic. The stance is warm and energetic, with orange carrying both the type emphasis and the main visual.

**Mood:** warm, energetic, bright, bold, optimistic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f4f4f5` · `#18181b` · `#ea580c` · `#71717a` · `#f97316` · `#fafafa` · `#e4e4e7` · `#d4d4d8` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hover:text-orange-600 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-orange-50/50 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #ea580c;
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
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline phrase in orange (#ea580c) and keep the rest near-black
- **Do:** Use an orange primary button with white text and a pill radius
- **Do:** Place a large soft orange gradient shape with small white metric cards on the hero
- **Don't:** Don't use the green (#22c55e) accent; it does not appear in the hero
- **Don't:** Don't put orange text on the peach ground for body copy
- **Don't:** Don't flatten the sphere; the soft gradient is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
