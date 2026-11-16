# Design system — Underground Zine Venue Landing Page Template

`SN-W00785` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A brutalist underground-venue page that places an off-white card on a black field, with the headline set in heavy condensed capitals. Pink (#d35d88) is the single highlight, used on the word RAT and a bottom bar, and small monospace system labels add a live-feed texture. The page is dark overall.

**Mood:** brutalist, loud, underground, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#f0f0f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#111111` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#d35d88` | Primary action and highlights |

Palette by frequency of use: `#d35d88` · `#111111` · `#ffffff` · `#000000` · `#f0f0f2` · `#e5e7eb` · `#18181b` · `#050505` · `#f3f3f3` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald, IBM Plex Mono
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 30px · body 12px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-hard`, `shadow-[10px_10px_20px_rgba(0,0,0,0.5)]`, `shadow-none`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-12`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="border border-white/20 bg-black/50 backdrop-blur-sm px-3 py-1 font-mono text-[10px] hover:bg-brand hover:text-black hover:border-brand transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Logo cloud (`logo-cloud`)
6. Feature grid (`features`)
7. Listings (`listings`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #f0f0f2;
  --color-text: #111111;
  --color-muted: #111111;
  --color-border: #111111;
  --color-accent: #d35d88;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#f0f0f2',
    ink: '#111111',
    muted: '#111111',
    line: '#111111',
    accent: '#d35d88',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in pink (#d35d88)
- **Do:** Use a heavy condensed capital face for headlines
- **Do:** Frame the hero in a hard-edged off-white card with black type
- **Don't:** Don't round the main cards; the square corners are part of the look
- **Don't:** Don't use pink for body text or large backgrounds
- **Don't:** Don't soften the type with light weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
