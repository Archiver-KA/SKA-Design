# Design system — SyncBoard GitHub Issue Management Landing Page Template

`SN-W04298` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark landing page on deep navy (#0f172a) with a large white sans headline in which one phrase is set in sky blue (#38bdf8). The primary button is a blue-to-violet gradient, with a quiet outlined button beside it. A dark product preview with rounded corners sits below the hero and shows the tool in use.

**Mood:** sharp, technical, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#0ea5e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8b5cf6` · `#0ea5e9` · `#475569` · `#334155` · `#cbd5e1` · `#38bdf8` · `#10b981` · `#7dd3fc` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-medium text-white/90 hover:text-white hover:border-white/30 hover:bg-white/5 hover:scale-105 transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Dashboard preview (`dashboard-preview`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #0ea5e9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one phrase of the headline in sky blue (#38bdf8) and keep the rest white
- **Do:** Use the blue-to-violet gradient only on the primary button
- **Do:** Show the product as a dark preview panel with rounded corners below the hero
- **Don't:** Don't use gradient fills on text
- **Don't:** Don't give the outlined secondary button a gradient
- **Don't:** Don't lighten the navy ground behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
