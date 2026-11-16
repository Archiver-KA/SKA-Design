# Design system — Gonzalez Painting

`SN-W02032` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A photographic hero of a house, tinted with a deep blue overlay so the photograph reads as a blue duotone behind centred white bold sans. The headline sits in three lines, followed by a short paragraph and two buttons: a solid blue (#2563eb) primary and a translucent outlined secondary. The nav is plain white with a blue button at the right, making the page direct and trade-like.

**Mood:** direct, trustworthy, trade-like, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#3f3f46` · `#18181b` · `#71717a` · `#e4e4e7` · `#fafafa` · `#d4d4d8` · `#2563eb` · `#52525b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.06)]`, `shadow-[0_2px_20px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center relative overflow-hidden btn-shimmer hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-600/50 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Process / steps (`how-it-works`)
8. Case studies (`case-studies`)
9. Team (`team`)
10. FAQ (`faq`)
11. Map / location (`map-location`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Tint the hero photograph with a blue overlay so the white text stays legible
- **Do:** Use blue (#2563eb) for primary buttons only
- **Do:** Set headlines in bold white Inter, centred, in short lines
- **Don't:** Don't leave the hero photograph untinted; the white text needs the overlay
- **Don't:** Don't use emoji in section headings; the current headings use them and read informal
- **Don't:** Don't ship the hero headline with the typo 'Paining'

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
