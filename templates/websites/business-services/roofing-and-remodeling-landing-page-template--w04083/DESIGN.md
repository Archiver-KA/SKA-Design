# Design system — Roofing & Remodeling Landing Page Template

`SN-W04083` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, quiet hero where a warm orange glow rises behind a two-tone headline: white for the first line and grey for the last. White pill buttons carry the actions, and orange appears only in the logo and the eyebrow badge. The layout is spare and confident, and the glow supplies the single point of warmth.

**Mood:** confident, spare, warm, dark, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#f97316` · `#71717a` · `#000000` · `#18181b` · `#fb923c` · `#27272a` · `#e4e4e7` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(249,115,22,0.5)]`, `shadow-2xl`, `shadow-orange-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-4 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Case studies (`case-studies`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in white sans, with the closing word in grey
- **Do:** Use white pill buttons for the main actions on the dark ground
- **Do:** Use orange (#f97316) only for the logo mark and the eyebrow badge
- **Don't:** Don't fill buttons with orange; they stay white
- **Don't:** Don't set body copy in orange
- **Don't:** Don't remove the warm glow behind the headline; it is the only ambient colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
