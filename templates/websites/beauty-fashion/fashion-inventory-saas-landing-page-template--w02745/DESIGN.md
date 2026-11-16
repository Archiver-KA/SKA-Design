# Design system — Fashion Inventory SaaS Landing Page Template

`SN-W02745` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Near-black product page with a large white sans headline in which one phrase, 'L's again.', is coloured sky blue (#0ea5e9). The primary button is outlined with a blue arrow, and small dim captions under the buttons are set in a monospace face. The page feels like a technical SaaS tool, with blue kept to the emphasised phrase and the glow line beneath.

**Mood:** technical, dark, direct, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05050a` | Page ground |
| Surface | `#0a0a12` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0ea5e9` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#0a0a12` · `#05050a` · `#ef4444` · `#f59e0b` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 40px · h3 16px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(255,255,255,0.02)]`, `shadow-[0_0_30px_rgba(14,165,233,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-[16rem]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all text-white bg-white/5 border-white/10 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05050a;
  --color-surface: #0a0a12;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #ef4444;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05050a',
    surface: '#0a0a12',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour one phrase per headline in sky blue (#0ea5e9)
- **Do:** Use outlined pills for the hero actions and keep the header button white
- **Do:** Set small captions under the buttons in dim grey monospace
- **Don't:** Don't colour whole headlines blue; only the one phrase takes the accent
- **Don't:** Don't move to a light ground; the page is near-black (#05050a)
- **Don't:** Don't use red in the hero; blue is the only accent there

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
