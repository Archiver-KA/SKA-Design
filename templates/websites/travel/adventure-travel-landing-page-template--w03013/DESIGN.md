# Design system — Adventure Travel Landing Page Template

`SN-W03013` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic mountain hero with a dark green wash, its bottom edge cut on a diagonal into a white page. The headline is a bold white sans-serif, centred, and the primary action is a solid amber pill (#f59e0b) beside a white outline button. Amber is the only warm colour, so the call to action stands out against the deep green and grey stone.

**Mood:** outdoorsy, bold, trustworthy, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#12362a` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#ffffff` · `#0a261d` · `#0f172a` · `#f1f5f9` · `#cbd5e1` · `#475569` · `#64748b` · `#94a3b8` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden lg:flex bg-amber-500 text-[#0A261D] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Hero (`hero`)
4. Services (`services`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Booking form (`booking`)
8. Logo cloud (`logo-cloud`)
9. Listings (`listings`)
10. Team (`team`)
11. Articles (`blog-articles`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #12362a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#12362a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the headline over a darkened photograph in white bold sans-serif
- **Do:** Use the solid amber (#f59e0b) button as the one primary action per screen
- **Do:** Cut the hero's bottom edge on a diagonal into the light section below
- **Don't:** Don't use amber for body text or large areas; it is a button colour
- **Don't:** Don't put the headline over a light photo; it needs the dark wash
- **Don't:** Don't replace the green wash with a flat colour; the photograph is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
