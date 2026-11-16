# Design system — Enterprise AI Operations Platform Template

`SN-W00364` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A premium AI operations page on black where the second headline line runs a gradient from indigo (#818cf8) to mint (#34d399). The primary button is solid indigo (#6366f1) with a dark ghost button beside it, and the centred paragraph stays short. The gradient is the one decorative move, so the page reads as a clean, high-contrast infrastructure pitch.

**Mood:** premium, precise, dark, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0b1120` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#818cf8` · `#94a3b8` · `#6366f1` · `#cbd5e1` · `#34d399` · `#a1a1aa` · `#0b1120` · `#e2e8f0` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Instrument Serif
- **Scale (largest breakpoint):** h1 88px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`, `shadow-inner`, `shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-2.5`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Logo cloud (`logo-cloud`)
5. Process / steps (`how-it-works`)
6. Product grid (`product-grid`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0b1120;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
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
    surface: '#0b1120',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the indigo-to-mint gradient
- **Do:** Use solid indigo (#6366f1) for the primary button and a dark ghost for the secondary
- **Do:** Keep the intro paragraph centred and under four lines
- **Don't:** Don't put the gradient on body copy
- **Don't:** Don't add a third hue to the headline
- **Don't:** Don't place a light background behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
