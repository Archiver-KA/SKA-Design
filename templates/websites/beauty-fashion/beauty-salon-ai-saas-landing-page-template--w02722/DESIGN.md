# Design system — Beauty Salon AI SaaS Landing Page Template

`SN-W02722` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Salon operations dashboard on near-black (#09090b) with zinc-grey cards (#18181b) and a left sidebar. KPI tiles show a small label, a large white figure and a tiny icon, and the appointments table uses coloured status pills, with emerald (#10b981) for confirmed and amber for pending. A live chat panel and a toast sit at the right edge, so the page reads as a calm, data-dense software product.

**Mood:** dense, calm, dark, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e4e4e7` · `#18181b` · `#71717a` · `#27272a` · `#10b981` · `#a1a1aa` · `#f4f4f5` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h3 14px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-glow`, `shadow-2xl`
- **Content width:** `max-w-[85%]`, `max-w-[90%]`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:text-zinc-200 hover:bg-zinc-900/30 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use zinc cards (#18181b) on the near-black ground (#09090b) for all KPI and table panels.
- **Do:** Show status as small pills, with emerald (#10b981) for confirmed and amber for pending.
- **Do:** Keep large figures white and the labels in muted grey, with small icons top-right.
- **Don't:** Don't use bright colour fills on large panels; the dashboard stays dark.
- **Don't:** Don't set table text in pure white; keep rows in the grey text tone.
- **Don't:** Don't add hero-style large type to dashboard headings; the page is a tool.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
