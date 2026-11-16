# Design system — Agentic Hospitality AI Landing Page Template

`SN-W03015` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cream editorial page (#fdfcf8) with a large serif headline in near-black, its second line set in grey italic. A square-cornered dark button and small uppercase monospace labels add a technical counterpoint, and a white product card with thin sliders sits at the right. Green appears only as a live-status dot.

**Mood:** editorial, technical, precise, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#9a3412` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#e5e5e5` · `#737373` · `#fdfcf8` · `#a3a3a3` · `#ffffff` · `#525252` · `#9a3412` · `#262626` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 36px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-ink/10`, `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block px-6 py-3 font-mono text-xs tracking-widest text-neutral-500 hover:text-ink hover:bg-neutral-100/50 uppercase transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Comparison (`comparison`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Articles (`blog-articles`)
9. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #9a3412;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#9a3412',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the second line in grey italic
- **Do:** Use the dark square-cornered button for the main action
- **Do:** Label small metadata in uppercase monospace text
- **Don't:** Don't use rounded pills for the main button; this design uses square corners
- **Don't:** Don't use the green accent for buttons; it marks live status only
- **Don't:** Don't set the monospace labels larger than small text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
