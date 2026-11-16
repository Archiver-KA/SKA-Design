# Design system — Datathon Event Landing Page Template

`SN-W03584` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The datathon page is a neon, retro-horror event on a black ground, with magenta light washing across the lower half. The headline is a large uppercase serif set in white with a fading gradient, and it reads like a title card. A bright cyan button and a yellow toggle pick out the calls to action against the purple-pink glow. Perspective grid lines add a synthwave layer under the hero.

**Mood:** neon, retro, theatrical, dramatic, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#dc2626` · `#ef4444` · `#7f1d1d` · `#9ca3af` · `#d1d5db` · `#facc15` · `#1f2937` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Libre Baskerville
- **Body:** Inter
- **Loaded families:** Courier Prime, Inter, Libre Baskerville
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, black, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,0,0,0.5)]`, `shadow-[0_0_15px_rgba(0,255,255,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 px-4 py-2 bg-rw-blue text-rw-purple font-mono text-xs font-bold uppercase hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,255,255,0.5)] dark:bg-red-900 dark:text-white dark:shadow-[0_0_15px_rgba(255,0,0,0.5)] dark:hover:bg-red-700 rounded-sm border-b-4 border-rw-purple/50 dark:border-black/50">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Feature grid (`features`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #facc15;
  --font-display: "Libre Baskerville", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Libre Baskerville'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headings in the serif (Libre Baskerville) in uppercase
- **Do:** Use the glowing magenta field only behind the hero, not on content panels
- **Do:** Keep the cyan register button as the single bright action per screen
- **Don't:** Don't set body copy in the display serif
- **Don't:** Don't add neon colours beyond the magenta, cyan and yellow accents
- **Don't:** Don't put the grid lines behind dense text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
