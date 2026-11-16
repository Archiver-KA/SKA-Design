# Design system — DeFi Security Landing Page Template

`SN-W00917` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark security hero on near-black, where the key phrase DeFi Economy carries a violet-to-blue gradient and the rest of the headline stays white. The right side shows a phone mock with a wallet-protected status card and a recent-checks list, so the product is the proof. The buttons pair one white filled action with one outlined action.

**Mood:** secure, dark, gradient-accented, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#737373` · `#818cf8` · `#0a0a0a` · `#d4d4d4` · `#a3a3a3` · `#050505` · `#262626` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_15px_rgba(129,140,248,0.2)]`, `shadow-[0_0_40px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:block text-[10px] font-semibold border border-white/10 px-4 py-1.5 rounded-full transition-all active:scale-95 hover:shadow-[0_0_15px_rgba(129,140,248,0.2)] text-white bg-white/5 hover:bg-white/10 hover:border-indigo-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Dashboard preview (`dashboard-preview`)
6. Testimonials (`testimonials`)
7. Stats band (`stats`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #06b6d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in the violet-to-blue gradient
- **Do:** Show the product as a phone mock with a status card
- **Do:** Pair one white filled button with one outlined button
- **Don't:** Don't use the gradient on more than one phrase per screen
- **Don't:** Don't use indigo as the page background; the ground is near-black
- **Don't:** Don't replace the phone mock with an abstract illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
