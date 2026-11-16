# Design system — Autonomous Agent Labor Market Landing Page Template

`SN-W00236` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero with a centred white headline in two lines. The second line, 'Autonomous Agents', carries a gradient from orange through violet to pink, which is the only colour in the headline. The buttons are a white filled primary and a dark outlined secondary, and a row of small monospace identifiers sits below the CTAs, which reads as on-chain infrastructure.

**Mood:** dark, technical, bold, infrastructural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f1115` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#c084fc` · `#f97316` · `#60a5fa` · `#fb923c` · `#3b82f6` · `#22c55e` · `#000000` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-orange-500/40`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-all shadow-lg font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Code / terminal (`code-terminal`)
6. Timeline (`timeline`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f1115;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f1115',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a multi-stop gradient under a white first line
- **Do:** Keep the buttons white filled and dark outlined on the navy ground
- **Do:** Put the small monospace identifiers below the CTAs, not in the headline
- **Don't:** Don't use the gradient on body copy or buttons
- **Don't:** Don't add a second background colour to the hero
- **Don't:** Don't set the identifiers larger than the nav labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
