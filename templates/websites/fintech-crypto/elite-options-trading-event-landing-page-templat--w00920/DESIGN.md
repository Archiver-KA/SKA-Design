# Design system — Elite Options Trading Event Landing Page Template

`SN-W00920` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark event-promotion hero on black, with a two-line headline in bold white over mid grey and a single white button for the primary action. Below the buttons a marquee of uppercase phrases in dim grey runs across the page, adding tension without colour. Small grey copy beside the button carries the scarcity message, such as seats remaining.

**Mood:** exclusive, dark, tense, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#262626` · `#171717` · `#e5e5e5` · `#ef4444` · `#050505` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black hover:bg-neutral-200 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ef4444;
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
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the white button as the only filled action in the hero
- **Do:** Set marquee phrases in dim uppercase grey
- **Do:** Keep scarcity copy small and grey beside the button
- **Don't:** Don't add red accents to the hero
- **Don't:** Don't brighten the marquee to compete with the headline
- **Don't:** Don't use a light background for the event sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
