# Design system — AI Creative Services Landing Page Template

`SN-W00078` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with a tall dark vertical panel on the left carrying oversized grey type, and a large near-black sans headline on the right with its second line in light grey. The layout is asymmetric and editorial. A black pill button and grey text keep it monochrome, and the panel is the one strong graphic element.

**Mood:** editorial, monochrome, bold, asymmetric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#f5f5f5` · `#e5e5e5` · `#a3a3a3` · `#525252` · `#262626` · `#fafafa` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[140px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium px-5 py-2 rounded-full transition-all border border-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #171717;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#171717',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero split with the dark vertical panel on the left
- **Do:** Set the second headline line in grey (#a3a3a3)
- **Do:** Use a black pill for the primary button
- **Don't:** Don't add colour to the monochrome hero
- **Don't:** Don't place body copy on the dark panel
- **Don't:** Don't centre the hero; the layout is asymmetric

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
