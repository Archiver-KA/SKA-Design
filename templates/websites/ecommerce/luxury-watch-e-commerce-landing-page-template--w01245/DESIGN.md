# Design system — Luxury Watch E-commerce Landing Page Template

`SN-W01245` · ecommerce · dark mode · Sinera Atlas theme `market` · language `vi`

## Direction

A bold dark watch landing page with a thin announcement strip above the nav. The hero headline is heavy uppercase sans, large and tight, with a gold solid button beside an outlined one. Small dark spec chips with thin borders sit on the right. Gold is the only warm colour, and the layout is left-aligned on near-black.

**Mood:** bold, dark, urgent, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070a12` | Page ground |
| Surface | `#0b1020` | Cards, panels, raised areas |
| Text | `#eaeaf0` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d6b25e` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d6b25e` · `#9aa3b2` · `#070a12` · `#0b1020` · `#22d3ee` · `#d1d5db` · `#000000` · `#121620` · `#c5a354`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Sora
- **Body:** Inter
- **Loaded families:** Inter, Sora, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_10px_white]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold tracking-wide border border-gold/40 text-gold rounded hover:bg-gold hover:text-dark transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. About (`about`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #070a12;
  --color-surface: #0b1020;
  --color-text: #eaeaf0;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #d6b25e;
  --color-accent-2: #22d3ee;
  --font-display: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070a12',
    surface: '#0b1020',
    ink: '#eaeaf0',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#d6b25e',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Sora'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, large and tight
- **Do:** Use the gold (#d6b25e) for the primary button and the nav highlight only
- **Do:** Show specs as small dark chips with a thin border
- **Don't:** Don't use a cyan accent; it does not appear on the hero
- **Don't:** Don't centre the hero text; it is left-aligned
- **Don't:** Don't add a second bright button colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
