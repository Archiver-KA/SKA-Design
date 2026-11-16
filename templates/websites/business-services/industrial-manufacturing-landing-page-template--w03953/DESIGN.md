# Design system — Industrial Manufacturing Landing Page Template

`SN-W03953` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, lab-style biotech page on a near-black ground (#050505). Headlines are heavy uppercase sans-serif, with the second word in a light grey gradient, and small monospace labels in the header and status row add a technical texture. Orange (#fb923c) marks progress bars, the primary button and small tiles, and cards float over the hero as translucent dark panels.

**Mood:** scientific, dark, technical, precise, layered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a1a1aa` · `#71717a` · `#050505` · `#0a0a0a` · `#fb923c` · `#52525b` · `#000000` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter, JetBrains Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 100px · h2 58px · h3 14px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_10px_rgba(251,146,60,0.8)]`, `shadow-[0_0_8px_rgba(34,197,94,0.8)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-orange-400 hover:shadow-[0_0_24px_rgba(251,146,60,0.4)] transition-all duration-300 flex items-center gap-2 group relative overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #3b82f6;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#050505) with white headlines
- **Do:** Use orange (#fb923c) for progress bars, primary buttons and status tiles
- **Do:** Set technical labels in small uppercase monospace
- **Don't:** Don't use orange for body text or large fills
- **Don't:** Don't replace the translucent dark panels with flat solid colour
- **Don't:** Don't use light backgrounds for the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
