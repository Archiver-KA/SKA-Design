# Design system — Cinematic Director & AI Filmmaker Portfolio Template

`SN-W01857` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark cinematic hero where a large white bold sans headline stacks over a grey second phrase, with grey film-still texture behind it. Floating glass-edged cards in a diagonal cluster on the right show project tiles, and the copy is kept to a short intro and two buttons. The hero is monochrome.

**Mood:** cinematic, monochrome, glassy, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a1a1aa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#e4e4e7` · `#34d399` · `#52525b` · `#000000` · `#18181b` · `#0e0e11`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_20px_40px_rgba(0,0,0,0.3)]`, `shadow-2xl`, `shadow-[0_0_10px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-2xl`, `max-w-[280px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-base font-normal text-zinc-300 hover:text-white transition-colors px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a1a1aa;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a1a1aa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the second phrase in grey
- **Do:** Frame project tiles as floating glass cards with thin light edges
- **Do:** Keep the hero to a short intro and two pill buttons
- **Don't:** Don't use the green (#34d399) or purple (#a855f7) on the first screen
- **Don't:** Don't put light-mode body text on the dark still texture
- **Don't:** Don't leave tile images empty

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
