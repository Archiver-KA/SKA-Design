# Design system — AdTech Services Landing Page Template

`SN-W03790` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A modern AdTech landing page on a white ground, with very large heavy Montserrat headlines in dark navy (#0f172a) set in dense lines. A single blue button carries the main action, and an outlined white button sits beside it. The navigation is light and small, leaving the headline as the only strong element on screen.

**Mood:** confident, bold, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e293b` · `#0f172a` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#020617` · `#64748b` · `#475569` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Roboto Slab, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md ring-1 ring-brand-blue ring-offset-2 dark:ring-offset-slate-950">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Articles (`blog-articles`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0f172a;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #facc15;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#0f172a',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Montserrat at a heavy weight with tight line spacing, in navy (#0f172a).
- **Do:** Use one blue button for the main action and an outlined white button beside it.
- **Do:** Keep the navigation small and light so the headline carries the hero.
- **Don't:** Don't reduce the hero headline below its large size.
- **Don't:** Don't add a second filled button colour to the hero.
- **Don't:** Don't use yellow for text on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
