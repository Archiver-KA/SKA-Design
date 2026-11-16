# Design system — AI Agency Landing Page

`SN-W01364` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A light white page with a large dark navy headline in Inter, in which the phrase l'Intelligence Artificielle is set in violet-indigo. Lines are broken to a short measure at the left, and a chat-style product mockup in a rounded white card sits on the right. Violet (#4f46e5) carries the emphasis, with a small green metric chip inside the mockup, so the page reads as bright and product-led.

**Mood:** light, product-led, bright, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#475569` · `#0f172a` · `#64748b` · `#000000` · `#94a3b8` · `#4f46e5` · `#f8fafc` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. Stats band (`stats`)
8. Newsletter signup (`newsletter`)
9. FAQ (`faq`)
10. Pricing (`pricing`)
11. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #000000;
  --color-text: #0f172a;
  --color-muted: #ffffff;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#000000',
    ink: '#0f172a',
    muted: '#ffffff',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in dark navy (#0f172a) with one violet (#4f46e5) phrase per headline.
- **Do:** Break headlines into short lines at the left, with the product mockup at right.
- **Do:** Use green only for small metric chips inside the mockup.
- **Don't:** Don't set the page on a dark background; the light ground is part of the design.
- **Don't:** Don't use violet for body copy.
- **Don't:** Don't add more than one gradient phrase to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
