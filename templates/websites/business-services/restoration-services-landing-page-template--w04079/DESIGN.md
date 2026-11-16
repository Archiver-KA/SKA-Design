# Design system — Restoration Services Landing Page Template

`SN-W04079` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, urgent hero in deep navy with a heavy white sans headline and a solid red primary button. Red marks the main quote action and the emergency details, while the secondary button is outlined in white. A light strip of short reassurance points runs along the foot of the hero, which keeps the emergency message calm and clear.

**Mood:** urgent, dependable, bold, direct, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#e2e8f0` · `#475569` · `#f8fafc` · `#fbbf24` · `#334155` · `#b91c1c` · `#dc2626` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-red-900/40`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 transition-colors px-5 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-white shadow-sm shadow-red-900/40">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-accent: #b91c1c;
  --color-accent-2: #dc2626;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#475569',
    line: '#cbd5e1',
    accent: '#b91c1c',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero on deep navy (#0f172a) with a heavy white headline
- **Do:** Use the red (#b91c1c) only for the main quote button and emergency details
- **Do:** Place the reassurance points in a light strip beneath the hero
- **Don't:** Don't use red for headings or large background fills
- **Don't:** Don't set the emergency number in any colour other than white or red
- **Don't:** Don't remove the reassurance strip; it carries the response promises

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
