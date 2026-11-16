# Design system — LuTe Academy Fitness & Gym Landing Page Template

`SN-W02649` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A premium dark gym page on near-black (#0a0a0a) where cyan (#00f9e4) is the one accent. Cyan marks the emphasis line of the headline and the main header button, while the other headline words are white and light grey. Headlines are very large, heavy sans-serif capitals stacked tightly. A faint teal glow behind the hero adds depth without adding a colour.

**Mood:** premium, intense, dark, sharp, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9a9a9a` | Secondary copy, captions |
| Border | `#1c1c1c` | Hairlines, dividers, outlines |
| Accent | `#00f9e4` | Primary action and highlights |

Palette by frequency of use: `#00f9e4` · `#ffffff` · `#0a0a0a` · `#9a9a9a` · `#1c1c1c` · `#2a2a2a` · `#6b6b6b` · `#121212` · `#090909` · `#3a3a3a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 120px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(0,249,228,0.5)]`, `shadow-[0_0_30px_rgba(0,249,228,0.05)]`, `shadow-[0_0_15px_rgba(0,249,228,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #9a9a9a;
  --color-border: #1c1c1c;
  --color-accent: #00f9e4;
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
    surface: '#121212',
    ink: '#ffffff',
    muted: '#9a9a9a',
    line: '#1c1c1c',
    accent: '#00f9e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasis line of each headline in #00f9e4.
- **Do:** Use very large heavy uppercase sans-serif for headlines with tight line spacing.
- **Do:** Keep the glow behind the hero in the cyan family at low opacity.
- **Don't:** Don't use cyan for body text or long copy.
- **Don't:** Don't use more than one bright accent colour on a section.
- **Don't:** Don't set headlines in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
