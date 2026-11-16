# Design system — Futuristic AI Startup Landing Page Template

`SN-W00408` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a centred, symmetrical hero: a small status pill, a large headline and one outlined button. Cyan (#22d3ee) appears only in the status pill and the small system label, and the rest runs on white and grey. Serif type sets the wordmark and headline.

**Mood:** austere, centred, dark, minimal, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#000000` · `#9ca3af` · `#6b7280` · `#06b6d4` · `#050505` · `#22c55e` · `#4b5563` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Audiowide
- **Body:** Audiowide
- **Loaded families:** Audiowide, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(34,211,238,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-black bg-white hover:bg-cyan-400 transition-all duration-300 clip-path-slant">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #22c55e;
  --font-display: "Audiowide", sans-serif;
  --font-body: "Audiowide", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Audiowide'], sans: ['Audiowide'] },
} }
```

## Do and don't

- **Do:** Keep cyan (#22d3ee) to the status pill and small labels
- **Do:** Centre the hero stack: pill, headline, paragraph, then one button
- **Do:** Use a solid white button for the top-right contact action and outlined buttons for hero actions
- **Don't:** Don't fill large areas with cyan or green
- **Don't:** Don't give the hero two buttons of equal weight
- **Don't:** Don't move the page to a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
