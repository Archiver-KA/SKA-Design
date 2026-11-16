# Design system — AI Automation SaaS Landing Page Template

`SN-W00050` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark page with a centred white sans headline whose second line carries a cyan-to-lilac gradient, over a faint blue-violet glow. Two pill buttons sit under the copy: a solid white primary and a dark outlined secondary. The gradient carries the colour and the rest stays monochrome, which gives a calm, product-led tone.

**Mood:** calm, dark, product-led, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030014` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#22d3ee` · `#06b6d4` · `#8b5cf6` · `#64748b` · `#1e293b` · `#030014` · `#d946ef` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(6,182,212,0.3)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-medium hover:bg-cyan-50 transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030014;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #8b5cf6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030014',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use one gradient on the second headline line only
- **Do:** Keep the page ground deep violet-black (#030014) with white headlines
- **Do:** Set buttons as pills, solid white for the primary action
- **Don't:** Don't use cyan (#22d3ee) for body text
- **Don't:** Don't place the glow behind body copy
- **Don't:** Don't add a second gradient in the same hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
