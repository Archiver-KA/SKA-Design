# Design system — Agencia IA Landing Page Template

`SN-W01356` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A deep navy page with a centred hero and a large, tightly set Inter headline whose second line carries a cyan-to-green gradient, the only colour in the frame. A small pill badge sits above, and grey supporting text below. Cyan (#06b6d4) is the accent, and the rest of the page stays in white and slate tones, so the gradient reads as the single point of emphasis.

**Mood:** navy, gradient, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050b18` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#22d3ee` · `#06b6d4` · `#64748b` · `#f97316` · `#050b18` · `#0f172a` · `#34d399` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 hover:ring-1 hover:ring-cyan-500/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050b18;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050b18',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the navy ground (#050b18) with the surface (#0f172a) for cards and panels.
- **Do:** Apply the cyan-to-green gradient to one headline phrase per section, and nowhere else.
- **Do:** Set body copy in slate (#cbd5e1) and small labels in muted slate (#64748b).
- **Don't:** Don't use the gradient on more than one phrase per section.
- **Don't:** Don't replace the navy with pure black; the blue cast is part of the look.
- **Don't:** Don't use orange (#f97316) in the hero; it is a secondary highlight only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
