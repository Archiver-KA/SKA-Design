# Design system — Luxury Watch Product Landing Page Template

`SN-W01247` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark product hero on a black ground with a large white uppercase sans headline, TIME, over a dimmer grey REDEFINED., left-aligned under a small outlined tag. The nav is a thin dark bar with one white pre-order button. The page is monochrome.

**Mood:** stark, monochrome, precise, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#000000` · `#030304` · `#e4e4e7` · `#27272a` · `#52525b` · `#333333` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 96px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_10px_rgba(99,102,241,0.5)]`, `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded text-xs font-medium hover:bg-zinc-200 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#000000',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy uppercase sans, with the second line in dim grey
- **Do:** Keep the page monochrome; the white button is the only emphasis
- **Do:** Place the interact and scroll cues in small caps at the bottom
- **Don't:** Don't add indigo or green accents.
- **Don't:** Don't put a light background behind the hero
- **Don't:** Don't centre the headline; it is left-aligned

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
