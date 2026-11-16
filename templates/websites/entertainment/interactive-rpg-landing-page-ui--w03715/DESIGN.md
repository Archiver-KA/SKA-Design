# Design system — Interactive RPG Landing Page UI

`SN-W03715` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Charcoal ground with a centred bold sans headline set in mint (#09fbd3) across two lines, and a short light-grey introduction above the call to action. Mint carries the emphasis through the headline, the button underline and the three stat figures, and the layout is a plain centred stack under a thin navigation bar. The page stays within one hue, which gives it a focused, game-like tone.

**Mood:** focused, game-like, cool, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171618` | Page ground |
| Surface | `#19191b` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#999999` | Secondary copy, captions |
| Border | `#222222` | Hairlines, dividers, outlines |
| Accent | `#09fbd3` | Primary action and highlights |

Palette by frequency of use: `#09fbd3` · `#19191b` · `#d1d5db` · `#222222` · `#ffffff` · `#9ca3af` · `#171618` · `#232325` · `#223322` · `#999999`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Rajdhani
- **Body:** Rajdhani
- **Loaded families:** Rajdhani
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** bold, extrabold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-md`, `shadow-inner`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-[12px]`
- **Common gaps:** `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #171618;
  --color-surface: #19191b;
  --color-text: #d1d5db;
  --color-muted: #999999;
  --color-border: #222222;
  --color-accent: #09fbd3;
  --font-display: "Rajdhani", sans-serif;
  --font-body: "Rajdhani", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171618',
    surface: '#19191b',
    ink: '#d1d5db',
    muted: '#999999',
    line: '#222222',
    accent: '#09fbd3',
  },
  fontFamily: { display: ['Rajdhani'], sans: ['Rajdhani'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold mint (#09fbd3) sans, centred
- **Do:** Use mint for the button underline and the stat figures only
- **Do:** Place a small uppercase label above the headline
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set the headline in white
- **Don't:** Don't left-align the hero block

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
