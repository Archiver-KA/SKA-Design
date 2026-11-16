# Design system — FORGEE | High-Performance Fitness Landing Page Template

`SN-W02619` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A near-black gym hero with a lime accent. White uppercase Inter headlines stack in three lines, with the middle phrase in lime (#adff2f), and a solid lime button sits in the header. A small tracked grey caps line labels the brand above the headline. Lime appears only on the highlighted phrase and the button, so the page reads as black and white with one bright signal.

**Mood:** dark, lime-accented, uppercase, high-contrast, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0c0c` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9a9a9a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#adff2f` | Primary action and highlights |

Palette by frequency of use: `#adff2f` · `#9a9a9a` · `#ffffff` · `#1a1a1a` · `#4a4a4a` · `#0c0c0c` · `#000000` · `#2a2a2a` · `#111111` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 24px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[0_8px_32px_rgba(0,0,0,0.08)]`, `shadow-2xl`
- **Content width:** `max-w-[1280px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0c0c;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #9a9a9a;
  --color-border: #1a1a1a;
  --color-accent: #adff2f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0c0c',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#9a9a9a',
    line: '#1a1a1a',
    accent: '#adff2f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase Inter, with the middle phrase in lime (#adff2f).
- **Do:** Use the lime only for the header button and the highlighted phrase.
- **Do:** Keep the tracked grey caps brand line above the headline.
- **Don't:** Don't set lime body text on the near-black ground.
- **Don't:** Don't fill large sections with lime.
- **Don't:** Don't add a second accent colour next to the lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
