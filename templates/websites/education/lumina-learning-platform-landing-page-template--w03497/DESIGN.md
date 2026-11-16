# Design system — Lumina Learning Platform Landing Page Template

`SN-W03497` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A sparse dark product page on near-black (#09090b) with Inter at a heavy weight for the headline. Indigo (#6366f1) appears as a single gradient word in the headline and on the primary action, shading into lavender, while the rest of the page uses neutral greys on layered panels. Pill badges and ghost buttons sit above and below the headline, giving a calm, software-like rhythm.

**Mood:** minimal, technical, calm, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#18181b` · `#a1a1aa` · `#6366f1` · `#27272a` · `#09090b` · `#818cf8` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-indigo-900/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Product grid (`product-grid`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)
9. Sign-in form (`auth-form`)
10. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at a heavy weight, with one gradient word in indigo
- **Do:** Use indigo (#6366f1) for the primary button and the highlighted word only
- **Do:** Build secondary surfaces from the grey scale (#18181b, #27272a) rather than new hues
- **Don't:** Don't use a light background for hero or content sections
- **Don't:** Don't add more than one gradient word per headline
- **Don't:** Don't replace the pill badges and ghost buttons with square, filled controls

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
