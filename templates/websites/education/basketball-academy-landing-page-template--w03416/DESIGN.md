# Design system — Basketball Academy Landing Page Template

`SN-W03416` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark sports page on near-black [#0a0a0a] with a large white sans-serif headline. One word in the hero is set in wide-tracked uppercase orange [#f97316], and the rest of the page stays neutral. The top bar is minimal, and the buttons are rounded pills, one solid white and one outlined.

**Mood:** energetic, dark, direct, athletic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a3a3a3` · `#171717` · `#737373` · `#000000` · `#0a0a0a` · `#fb923c` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Teko
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(234,88,12,0.05)]`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[280px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Video / media (`video-media`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set one hero word in wide-tracked uppercase orange (#f97316) for emphasis
- **Do:** Keep the page background near-black (#0a0a0a) with white headlines
- **Do:** Use rounded pill buttons, solid white for the main action and outlined for secondary
- **Don't:** Don't set more than one highlight word per headline
- **Don't:** Don't introduce a second accent colour alongside the orange
- **Don't:** Don't use light section backgrounds in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
