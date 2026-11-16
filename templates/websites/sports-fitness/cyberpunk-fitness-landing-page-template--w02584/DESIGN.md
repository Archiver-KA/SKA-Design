# Design system — Cyberpunk Fitness Landing Page Template

`SN-W02584` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `zh-CN`

## Direction

A dark, sci-fi styled page on near-black with a huge white gradient headline and cyan streaks across it. Amber (#f59e0b) marks the labels, the thin bordered stat boxes and the Japanese-Chinese subhead, so the page reads as a game-like status screen. The design is dark throughout.

**Mood:** futuristic, dark, technical, bold, gamified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#ffffff` · `#000000` · `#22c55e` · `#fbbf24` · `#a3a3a3` · `#737373` · `#3b82f6` · `#4ade80` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Orbitron, Noto Sans SC
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 14px
- **Weights in use:** bold, black, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_#f59e0b]`, `shadow-[0_0_10px_#f59e0b]`, `shadow-[0_0_10px_red]`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-black bg-amber-500 rounded-sm transition-all duration-300 hover:bg-amber-400 hover:scale-105 saiyan-glow-intense">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Listings (`listings`)
5. Team (`team`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the amber (#f59e0b) for small labels, stat box borders and the subhead highlight
- **Do:** Set the main headline as a large white-to-grey gradient in uppercase
- **Do:** Keep stat tiles as thin amber-bordered boxes with small uppercase labels
- **Don't:** Don't use a light background; the ground is black.
- **Don't:** Don't fill the stat boxes with amber; they are outlined
- **Don't:** Don't add more colour than amber and the single cyan streak; the page is otherwise monochrome

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
