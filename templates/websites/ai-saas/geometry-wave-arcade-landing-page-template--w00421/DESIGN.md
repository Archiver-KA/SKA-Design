# Design system — Geometry Wave Arcade Landing Page Template

`SN-W00421` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A minimal game start card centred inside a thin glowing frame on a deep navy ground. The card uses the slate surface (#0f172a) with a bold title, a small spaced HIGH SCORE label and a cyan (#22d3ee) score, plus one muted pill button to start. The glow is limited to the frame's outline, so the play area is the only lit element.

**Mood:** minimal, arcade, calm, nocturnal, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#020617` · `#22d3ee` · `#cbd5e1` · `#f8fafc` · `#06b6d4` · `#0f172a` · `#94a3b8` · `#67e8f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]`
- **Content width:** `max-w-[800px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the card on the slate surface (#0f172a) and the glow on the outer frame
- **Do:** Show the score in cyan (#22d3ee) with a small spaced label above it
- **Do:** Make the start control a single pill button with a short instruction in its label
- **Don't:** Don't add glow to the score beyond the existing subtle effect
- **Don't:** Don't add more colours to the card
- **Don't:** Don't make the start button a bright solid fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
