# Design system — Nova Enterprise Quoting SaaS Landing Page Template

`SN-W00600` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black enterprise page where the hero is a flat ground with a large white headline and a soft gold-yellow gradient pill as the primary call to action. Below it, dark rounded cards show a quote and a small teal line chart, so teal is reserved for data and gold for action. Two accents on black keep the page precise and financial in tone.

**Mood:** precise, enterprise, dark, data-led, composed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#06b6d4` · `#22d3ee` · `#a3a3a3` · `#171717` · `#0a0a0a` · `#d4d4d4` · `#737373` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-card`, `shadow-cyan-glow`, `shadow-[0_0_8px_#22d3ee]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #262626;
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
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#262626',
    accent: '#06b6d4',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to near-black (#0a0a0a) with white headlines (#fafafa) and a single centred glow.
- **Do:** Use the gold pill only for the primary call to action, with a dark outlined button beside it.
- **Do:** Keep teal (#06b6d4) for chart lines and data highlights only.
- **Don't:** Don't use the teal (#06b6d4) on buttons; it is reserved for data.
- **Don't:** Don't set card text in the gold; cards use white and grey type.
- **Don't:** Don't leave a template placeholder in the page title.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
