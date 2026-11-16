# Design system — Esports Tournament Landing Page Template

`SN-W03697` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

Deep violet-black ground with soft purple glow shapes behind the hero, and a large, tightly set sans headline in white with one key word picked out in violet. Buttons are pills, one filled in light violet and the others outlined. A left-aligned hero with a stat card and a translucent ring on the right gives the page a nocturnal, stadium-lit feel.

**Mood:** nocturnal, glowing, competitive, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#10051f` | Page ground |
| Surface | `#10051f` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7dd3fc` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#94a3b8` · `#7dd3fc` · `#bae6fd` · `#020617` · `#475569` · `#f1f5f9` · `#e0f2fe` · `#fca5a5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, JetBrains Mono
- **Scale (largest breakpoint):** h1 24px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-purple-950/60`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-14`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/5 sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Schedule (`schedule-agenda`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #10051f;
  --color-surface: #10051f;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #7dd3fc;
  --color-accent-2: #f87171;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#10051f',
    surface: '#10051f',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#7dd3fc',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in white, with one key word in violet
- **Do:** Use pill-shaped buttons, with one filled primary and the rest outlined
- **Do:** Keep glow shapes behind the hero and away from the content
- **Don't:** Don't use a bright white page background
- **Don't:** Don't colour more than one word per headline
- **Don't:** Don't use sharp rectangular buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
