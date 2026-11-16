# Design system — Gastronomic Restaurant Landing Page Template

`SN-W02909` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark, photo-led hero with a cocktail glass behind a centred white serif wordmark 'Le Vingt4', where the numeral is set in italic copper. A pale grey header bar holds the copper booking button, and a small pill eyebrow sits above the title. The stance is cosy and cocktail-bar, with copper (#a97959) as the single warm accent and the type kept light over the dark photograph.

**Mood:** cosy, cocktail-bar, warm, photographic, light-type

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a97959` | Page ground |
| Surface | `#2c3037` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#2c3037` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#a97959` | Primary action and highlights |

Palette by frequency of use: `#a97959` · `#ffffff` · `#2c3037` · `#e5e5e5` · `#a3a3a3` · `#525252` · `#737373` · `#fafafa` · `#f5f5f5` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 18px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="py-2 px-3 rounded-md border border-[#A97959] bg-[#A97959]/10 text-sm font-medium text-[#A97959] hover:bg-[#A97959] hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Navigation bar (`navbar`)
3. Booking form (`booking`)
4. Hero (`hero`)
5. About (`about`)
6. Menu list (`menu-list`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #a97959;
  --color-surface: #2c3037;
  --color-text: #111111;
  --color-muted: #2c3037;
  --color-border: #e5e5e5;
  --color-accent: #a97959;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a97959',
    surface: '#2c3037',
    ink: '#111111',
    muted: '#2c3037',
    line: '#e5e5e5',
    accent: '#a97959',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in a white serif, with a key character in italic copper.
- **Do:** Use copper (#a97959) for the header booking button and the primary hero action.
- **Do:** Keep a pale translucent header bar above the dark photo.
- **Don't:** Don't brighten the hero photo; the white type needs the dark overlay.
- **Don't:** Don't use copper for body copy; it is for the booking and primary buttons.
- **Don't:** Don't set the wordmark in a sans-serif; it is a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
