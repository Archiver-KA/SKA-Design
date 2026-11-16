# Design system — Operational UX Agency Landing Page Template

`SN-W01656` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The loading screen is near-black, with a single line of small, widely spaced monospace text, a thin progress bar and a percentage. The loader alone sets a terminal-like, technical tone on a dark ground.

**Mood:** technical, dark, minimal, terminal-like, unconfirmed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090a` | Page ground |
| Surface | `#121416` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ededed` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d44d28` · `#888888` · `#121416` · `#08090a` · `#ededed` · `#000000` · `#22c55e` · `#4b5563` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1800px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2 rounded-full hover:bg-white/5 text-xs font-medium text-secondary hover:text-white transition-all magnetic-btn">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #08090a;
  --color-surface: #121416;
  --color-text: #f5f5f5;
  --color-muted: #ededed;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090a',
    surface: '#121416',
    ink: '#f5f5f5',
    muted: '#ededed',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set loader and system text in small, widely tracked monospace in muted grey
- **Do:** Keep the progress bar thin and neutral until the page is ready
- **Do:** Use the dark ground (#08090a) as the page background
- **Don't:** Don't set the loader text in bright colours
- **Don't:** Don't use the orange (#d44d28) as a background
- **Don't:** Don't add decorative effects to the loader

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
