# Design system — SEAINT AI Trading Mentor Landing Page Template

`SN-W01033` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black trading mentor page sets the headline very large in a bold sans with tight tracking, and the second line fades from white to grey as a gradient. Buttons are white pills on black with a dark ghost button beside them, and a small pill badge sits above the headline. The recognisable element is the gradient fade on the second headline line, on a flat black stage.

**Mood:** bold, monochrome, focused, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#000000` · `#cbd5e1` · `#3b82f6` · `#60a5fa` · `#e2e8f0` · `#475569` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="relative inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95 overflow-hidden shimmer-effect">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Video / media (`video-media`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #f43f5e;
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
    surface: '#333333',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button in white (#ffffff) with black text, and the ghost button in dark grey beside it
- **Do:** Use a gradient fade from white to grey on the second headline line only
- **Do:** Keep the page ground at #000000 with no coloured sections in the hero
- **Don't:** Don't add blue as an accent in the hero; only white and grey appear there
- **Don't:** Don't put a gradient on buttons; they are flat
- **Don't:** Don't stack more than one status pill above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
