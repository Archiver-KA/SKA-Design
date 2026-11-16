# Design system — Diplomatic Intelligence Landing Page Template

`SN-W00348` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An intelligence-briefing page on a deep navy ground (#050a14), with a large white sans headline and an amber (#f59e0b) second line. A small kicker badge with amber text sits above the headline, and a row of large figures with small captions runs below the copy. The page is data-led and sober, and the amber does the emphasis work.

**Mood:** sober, data-led, dark, official

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#a1a1aa` · `#fbbf24` · `#050a14` · `#71717a` · `#000000` · `#d4d4d8` · `#52525b` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-amber-500 text-black px-6 py-3 rounded text-xs font-semibold tracking-widest hover:bg-amber-400 transition-all uppercase">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-text: #ffffff;
  --color-muted: #52525b;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    ink: '#ffffff',
    muted: '#52525b',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in amber (#f59e0b)
- **Do:** Use amber for kicker badges and the emphasis line only
- **Do:** Present key figures in a row with small captions beneath
- **Don't:** Don't put amber fills on large buttons
- **Don't:** Don't use light backgrounds; the navy ground stays
- **Don't:** Don't add a second accent hue beside the amber

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
