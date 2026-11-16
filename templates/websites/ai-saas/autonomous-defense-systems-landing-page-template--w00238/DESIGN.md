# Design system — Autonomous Defense Systems Landing Page Template

`SN-W00238` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black defence hero with a centred headline in two lines: white 'Autonomous Intelligence' over a grey 'for Modern Defense'. The buttons are one dark outlined and one white filled, and the panel below shows telemetry with large white numerals on dark cards. Colour is absent from the page; contrast and the numerals carry it.

**Mood:** monochrome, serious, high-contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#a1a1aa` · `#71717a` · `#52525b` · `#27272a` · `#18181b` · `#000000` · `#c084fc` · `#020204`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_5px_rgba(255,255,255,0.3)]`, `shadow-[0_0_20px_rgba(255,255,255,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:bg-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f4f4f5;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #c084fc;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f4f4f5',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with the second line in grey
- **Do:** Use a white filled button for the primary action and a dark outline for the secondary
- **Do:** Show live figures as large white numerals on dark panels
- **Don't:** Don't add colour to the headline or the panels
- **Don't:** Don't use light backgrounds in the hero
- **Don't:** Don't put a gradient on the headline; the grey tone does that work

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
