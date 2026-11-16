# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02898` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black hero with a centred, large sans headline: the first line is upright white and the second a grey italic serif. A solid orange primary button (#ea580c) sits beside a dark outlined secondary, and orange is kept to that action. The design is dark-first.

**Mood:** dark-first, editorial, bold, minimal, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#0c0a09` · `#a8a29e` · `#78716c` · `#d6d3d1` · `#1c1917` · `#000000` · `#57534e` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(234,88,12,0.3)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[140px]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex group relative overflow-hidden rounded-full bg-white text-stone-950 px-6 py-2.5 text-xs font-semibold tracking-wide transition-all hover:bg-orange-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Menu list (`menu-list`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Listings (`listings`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #2563eb;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large sans, with the second line in grey italic serif.
- **Do:** Use the orange (#ea580c) only for the primary reserve button.
- **Do:** Pair the filled primary button with a dark outlined secondary button.
- **Don't:** Don't use light backgrounds for hero sections; the hero is dark.
- **Don't:** Don't use orange on more than one action per screen.
- **Don't:** Don't make the italic line pure white; it is set in a dimmer grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
