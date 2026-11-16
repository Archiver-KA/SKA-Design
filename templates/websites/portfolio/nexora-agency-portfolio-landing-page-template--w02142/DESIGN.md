# Design system — Nexora Agency Portfolio Landing Page Template

`SN-W02142` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal commerce agency page on white (#ffffff) with near-black headlines in tight Inter, where the final word of the hero is set in light grey (#71717a) as the only emphasis. The chrome is square-cornered: a black square logo, a black uppercase inquire button with hard corners, and a small outlined label. The hero leaves generous space, with a short grey intro beside the headline, so the page reads as an editorial catalogue.

**Mood:** minimal, editorial, clean, crisp, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#71717a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#737373` · `#52525b` · `#f4f4f5` · `#71717a` · `#27272a` · `#d4d4d8` · `#e4e4e7` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Space Grotesk, DM Serif Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wide transition-all flex items-center gap-2 rounded-sm font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Process / steps (`how-it-works`)
6. Awards / press (`awards-press`)
7. Articles (`blog-articles`)
8. Product grid (`product-grid`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-muted: #737373;
  --color-border: #f4f4f5;
  --color-accent: #71717a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e4e4e7',
    ink: '#18181b',
    muted: '#737373',
    line: '#f4f4f5',
    accent: '#71717a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final phrase of the hero headline in grey (#71717a), with the rest in near-black.
- **Do:** Keep the nav button square-cornered, uppercase and black.
- **Do:** Place a short grey intro beside the hero headline, not below it.
- **Don't:** Don't add a green accent; the dark green (#065f46) does not appear on the first screen.
- **Don't:** Don't round the nav button or the logo mark.
- **Don't:** Don't fill the hero with imagery above the headline; the type leads.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
