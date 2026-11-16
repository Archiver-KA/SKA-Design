# Design system — Nexus AI Infrastructure Landing Page Template

`SN-W00577` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark black-and-white infrastructure page: a near-black ground (#0a0a0a), a heavy white headline with tight tracking, and mid-grey supporting copy. The primary action is a solid white button beside a dark outlined secondary, and a dark terminal block shows a real command as the hero illustration. Colour is almost absent from the first screen, so the code block and small status cues carry the technical voice.

**Mood:** stark, technical, monochrome, confident, code-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#171717` · `#737373` · `#a3a3a3` · `#0a0a0a` · `#404040` · `#4ade80` · `#d4d4d4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 transition-colors mb-8 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ffffff;
  --color-accent-2: #c084fc;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#ffffff',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in heavy sans with tight tracking, white (#ffffff) on the #0a0a0a ground.
- **Do:** Put one solid white button first in every hero, with a dark outlined button beside it.
- **Do:** Show a real command in a dark code block with a grey border as the main illustration.
- **Don't:** Don't add coloured accents to the hero; the first screen is monochrome.
- **Don't:** Don't set body copy in pure white; supporting text is mid grey (#737373).
- **Don't:** Don't add a second filled button of equal weight next to the primary one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
