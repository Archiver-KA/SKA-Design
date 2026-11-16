# Design system — RAW Developer Platform Landing Page Template

`SN-W00660` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark, monochrome developer-platform hero on a near-black ground with white type. The headline is very large Inter, tightly set, with a soft grey gradient across the words, above one filled white pill button and one outlined pill button. A dashboard mock-up sits below the fold with a faint red glow at its edge, so colour comes from the product itself rather than the layout.

**Mood:** stark, monochrome, developer, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#881337` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#6366f1` · `#000000` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#a5b4fc` · `#525252` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Bento grid (`bento-grid`)
3. Stats band (`stats`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #881337;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#881337',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero monochrome: white headline, grey subline, and one filled white button
- **Do:** Set headlines large with tight tracking and a subtle grey gradient
- **Do:** Let the product carry any colour instead of the layout
- **Don't:** Don't use indigo as a surface colour; it appears only in small highlights
- **Don't:** Don't put colour on the buttons; they stay white or outlined
- **Don't:** Don't set the body in a serif; the page uses Inter for everything

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
