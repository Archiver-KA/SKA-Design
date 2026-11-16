# Design system — Hardcore Gym Landing Page Template

`SN-W02639` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A centred, near-black hardcore-gym hero with a red primary action. The headline FORGE YOUR sits in heavy white uppercase over LEGACY in a grey metallic gradient, with a small red tag above. A solid red button sits beside a dark outline button. The palette is black, white and grey, with red reserved for the main action.

**Mood:** hardcore, monochrome, centred, heavy, disciplined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#171717` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#262626` · `#000000` · `#525252` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full md:w-auto bg-red-600 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-red-700 transition-all rounded-none border border-red-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #262626;
  --color-accent: #dc2626;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#262626',
    accent: '#dc2626',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the headline in heavy white uppercase, with the second word in a grey metallic gradient.
- **Do:** Use red (#dc2626) for the primary button and the status tag only.
- **Do:** Keep the outline button dark with a thin border.
- **Don't:** Don't use red for the headline or for large fills.
- **Don't:** Don't set the subline in white; it stays grey.
- **Don't:** Don't round the buttons; they are square.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
