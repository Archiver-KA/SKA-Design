# Design system — Kreona AI Architecture Template

`SN-W03267` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Technical and utilitarian, on a pale slate ground (#f8fafc). A centred sans headline has its second line in lighter grey, sitting above a row of outlined tiles and a terminal-style window card. Green is used sparingly for live status dots and an online value, so the page reads more like a control panel than a marketing page. Thin borders do the layering work.

**Mood:** technical, precise, calm, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff88` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00ff88` · `#e2e8f0` · `#64748b` · `#06b6d4` · `#ffa500` · `#f1f5f9` · `#94a3b8` · `#1e293b` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono, Space Mono, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h3 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-black text-xs font-semibold uppercase tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #00ff88;
  --color-accent-2: #e2e8f0;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#00ff88',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the green (#00ff88) only for live status dots and online values.
- **Do:** Set headlines in Geist, with the second line in lighter grey.
- **Do:** Build panels as outlined tiles with thin borders on the pale slate ground.
- **Don't:** Don't use the green as a button background.
- **Don't:** Don't place the tiles on dark backgrounds; they are built for the pale ground.
- **Don't:** Don't add glow shapes behind the status panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
