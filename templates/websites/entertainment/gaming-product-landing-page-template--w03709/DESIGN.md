# Design system — Gaming Product Landing Page Template

`SN-W03709` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a centred sans headline in white, where the second line is set in a pale lavender gradient that echoes the violet accent (#8b5cf6). A small tinted pill sits above the title, and the primary action is a solid white pill beside a dark outlined secondary. Violet appears only in the faint glow and the gradient, so the layout feels precise and calm.

**Mood:** precise, competitive, calm, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8b5cf6` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#8b5cf6` · `#171717` · `#a78bfa` · `#a3a3a3` · `#0a0a0a` · `#d4d4d4` · `#eab308` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 12px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)]`, `shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/20 hover:ring-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #8b5cf6;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#8b5cf6',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a pale violet gradient
- **Do:** Use a solid white pill for the primary action
- **Do:** Put small tinted pill badges above headlines
- **Don't:** Don't use violet for solid button fills
- **Don't:** Don't set the headline in a serif
- **Don't:** Don't add bright saturated colours to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
