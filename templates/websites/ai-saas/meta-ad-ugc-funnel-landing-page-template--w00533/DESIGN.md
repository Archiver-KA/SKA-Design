# Design system — Meta Ad UGC Funnel Landing Page Template

`SN-W00533` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast landing page built on near-black (#0a0a0a) with very large white headlines. The hero states a bold claim in white and continues the thought in muted grey, so hierarchy comes from tone and size rather than colour. The navbar is a thin bar ending in a solid white call to action, and Inter is used throughout.

**Mood:** bold, dark, high-contrast, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#262626` · `#d4d4d4` · `#0a0a0a` · `#a3a3a3` · `#404040` · `#171717` · `#525252` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black text-xs font-semibold px-4 py-2 rounded hover:bg-neutral-200 transition-colors uppercase tracking-wide">…</a>
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

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #22c55e;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#262626',
    accent: '#22c55e',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white (#ffffff) at very large size, with a second line in grey
- **Do:** Keep the navbar as a thin bar with one solid white call-to-action button
- **Do:** Use Inter for all headings, body text and labels
- **Don't:** Don't add light backgrounds to the hero section
- **Don't:** Don't reduce the headline to a small size; it is the main visual
- **Don't:** Don't introduce a second typeface beside Inter

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
