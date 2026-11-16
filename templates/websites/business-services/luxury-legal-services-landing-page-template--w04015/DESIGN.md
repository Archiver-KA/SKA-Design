# Design system — Luxury Legal Services Landing Page Template

`SN-W04015` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, text-led law-firm hero with a large white headline in bold, left-aligned on three short lines. Two pill buttons sit under it, a solid white primary and an outlined secondary. A small insight card with a gold icon adds a single, quiet point of colour below the actions.

**Mood:** text-led, dark, confident, measured, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#800020` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#404040` · `#737373` · `#262626` · `#fafafa` · `#4f46e5` · `#f5f5f5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Contact form (`contact-form`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)
9. Sign-in form (`auth-form`)
10. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ffffff;
  --color-accent-2: #800020;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ffffff',
    accent2: '#800020',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black with a white headline and white pill buttons
- **Do:** Use the gold icon only in the insight card
- **Do:** Set the headline left aligned in short lines
- **Don't:** Don't add the indigo (#4f46e5) to the hero; the page is white on black
- **Don't:** Don't colour the buttons; keep them white or outlined
- **Don't:** Don't centre the hero text; left alignment is part of the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
