# Design system — Developer Portfolio Landing Page Template

`SN-W01960` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Monochrome dark portfolio: a near-black ground (#050505) with zinc panels, white tightly tracked bold Inter headlines, and a single green (#22c55e) availability pill. The last word of the headline fades into a grey gradient, giving emphasis without a second hue. The first screen relies on type scale and restrained greys rather than decoration.

**Mood:** restrained, monochrome, crisp, sober, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#d4d4d8` · `#a1a1aa` · `#71717a` · `#27272a` · `#52525b` · `#0a0a0a` · `#050505` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_0_4px_rgba(0,0,0,1)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Timeline (`timeline`)
6. Process / steps (`how-it-works`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold Inter with tight tracking, in white (#ffffff)
- **Do:** Use the green (#22c55e) only for availability badges and primary accents
- **Do:** Emphasise one headline word with a grey gradient instead of a new colour
- **Don't:** Don't introduce a second saturated colour beside the green
- **Don't:** Don't use bright white borders; keep dividers at #27272a
- **Don't:** Don't set body copy in pure white; use the zinc greys

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
