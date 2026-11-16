# Design system — Defence Investment Screening Landing Page Template

`SN-W00913` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, data-forward defence-deal landing page on near-black [#0a0a0a], where a sample deal scorecard is the main visual. Lime [#84cc16] marks the eyebrow label and the primary action. Verdicts are small pill badges, and the headline uses a large sans with its second line in grey. The tone is clinical and serious, with no illustration.

**Mood:** clinical, dark, serious, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#262626` · `#84cc16` · `#737373` · `#d4d4d4` · `#a3e635` · `#eab308` · `#0a0a0a` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(0,0,0,0.5)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-lime-400 text-neutral-950 px-4 py-2 rounded font-medium hover:bg-lime-300 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. Team (`team`)
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
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #84cc16;
  --color-accent-2: #eab308;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#84cc16',
    accent2: '#eab308',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#84cc16) for the eyebrow label and the primary action only
- **Do:** Show verdicts as small pill badges: green PASS, amber FLAG, red FAIL
- **Do:** Set scorecard labels in monospace at small size
- **Don't:** Don't colour whole cards red or green; colour lives in the badges
- **Don't:** Don't use lime for the scorecard values
- **Don't:** Don't add playful illustration; the visuals are data panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
