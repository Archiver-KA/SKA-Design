# Design system — Flow UX AI SaaS Landing Page Template

`SN-W00388` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic near-black page with a very large Inter headline: the first line in white and the second in a silver-to-grey gradient. The primary action is a solid cyan (#06b6d4) button, and below the copy a dark product window sits on a blue glow. Cyan is the only colour, used for the action and the glow, so the page is dramatic but disciplined.

**Mood:** cinematic, disciplined, dark, analytical, sleek

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#06b6d4` · `#0a0a0a` · `#262626` · `#737373` · `#000000` · `#164e63` · `#22d3ee` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-cyan-900/20`, `shadow-[0_0_20px_rgba(6,182,212,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-full text-xs font-semibold transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Dashboard preview (`dashboard-preview`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #404040;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
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
    background: '#0a0a0a',
    surface: '#404040',
    ink: '#ffffff',
    muted: '#262626',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the cyan (#06b6d4) only for the primary button and the glow behind the product window.
- **Do:** Set the hero headline large and tight, white first line, silver gradient second line.
- **Do:** Place a dark product window beneath the hero copy as the main visual.
- **Don't:** Don't use a light background; the page is near-black.
- **Don't:** Don't put cyan on body text or links.
- **Don't:** Don't add a second accent hue beside the cyan.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
