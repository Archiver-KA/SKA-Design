# Design system — Rustic Restaurant Landing Page Template

`SN-W02995` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light rustic hero on an off-white ground (#f5f5f5), with a dark serif headline in which the closing word is set in red italic (#ef4444). A small red-outlined tag sits above the headline, and a black filled pill leads the actions beside an outlined secondary. Red appears only in the headline, the tag, and the top-right reservation button, so the page stays warm and plain.

**Mood:** rustic, warm, plain, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ef4444` · `#ffffff` · `#e5e5e5` · `#a3a3a3` · `#737373` · `#f5f5f5` · `#262626` · `#fafafa` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-screen-xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-red-500 text-white text-xs font-medium tracking-wide px-5 py-2.5 rounded-md hover:bg-red-600 transition-colors duration-300 shadow-sm shadow-red-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Booking form (`booking`)
5. Menu list (`menu-list`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #fafafa;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#fafafa',
    ink: '#262626',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in red italic (#ef4444), as the hero does.
- **Do:** Use the red for the top-right reservation button and the small outlined tag only.
- **Do:** Keep the primary action as a black filled pill with a light outlined secondary.
- **Don't:** Don't set the whole headline in italic.
- **Don't:** Don't use the red as a fill behind text blocks.
- **Don't:** Don't set the navigation in serif; it stays in sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
