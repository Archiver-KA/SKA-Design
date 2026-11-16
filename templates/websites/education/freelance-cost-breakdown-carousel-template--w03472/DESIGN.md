# Design system — Freelance Cost Breakdown Carousel Template

`SN-W03472` · education · dark mode · Sinera Atlas theme `calm` · language `ms`

## Direction

A dark, slide-style carousel page on near-black (#0a0a0a) where each step is a single card with a rounded-3xl corner and a thin grey border. Card titles are set in uppercase with wide letter spacing, and small red-orange labels mark the step type (#ef4444). A vertical pager sits at the right edge, and the cards stay centred and free of decoration so the copy carries the page.

**Mood:** sparse, dark, deliberate, editorial, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#262626` · `#ffffff` · `#737373` · `#171717` · `#0a0a0a` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#ef4444` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 12px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-white/5`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="beam-btn w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Logo cloud (`logo-cloud`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #ef4444;
  --color-accent-2: #34d399;
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
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#ef4444',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set card titles in uppercase with wide letter spacing
- **Do:** Use the red (#ef4444) for step labels only
- **Do:** Keep each slide in one centred card with a thin border (#262626)
- **Don't:** Don't add images inside the cards; the copy carries each step
- **Don't:** Don't use light backgrounds for the cards
- **Don't:** Don't stack several accent colours in one card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
