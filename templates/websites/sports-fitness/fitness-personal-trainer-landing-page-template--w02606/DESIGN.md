# Design system — Fitness Personal Trainer Landing Page Template

`SN-W02606` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A bold Portuguese personal-trainer page on a deep navy ground (#050d1a). Heavy uppercase sans-serif headlines in white carry the message, and brand blue (#2979ff) marks the logo mark, the top-right call to action and one highlighted word. Small monospace navigation labels sit above a large, type-led hero with almost no imagery.

**Mood:** loud, uppercase, navy, direct, type-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050d1a` | Page ground |
| Surface | `#050d1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2979ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2979ff` · `#b0b0b0` · `#050d1a` · `#f2f2f2` · `#0b1628` · `#6b6b6b` · `#1565c0` · `#1a1a1a` · `#0b3d91`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 256px · h2 72px · h3 30px · body 14px
- **Weights in use:** extrabold, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_24px_rgba(41,121,255,0.1)]`, `shadow-[0_0_32px_rgba(41,121,255,0.2)]`, `shadow-[0_16px_48px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050d1a;
  --color-surface: #050d1a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2979ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050d1a',
    surface: '#050d1a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#2979ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase Inter in white on the navy ground.
- **Do:** Use blue (#2979ff) for the call to action and one highlighted word per headline.
- **Do:** Keep navigation labels in small monospace capitals.
- **Don't:** Don't use a light page background; the navy ground is the page.
- **Don't:** Don't set body copy in uppercase.
- **Don't:** Don't fill large areas with the blue behind text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
