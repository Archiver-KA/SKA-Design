# Design system — French Restaurant Landing Page Template

`SN-W02904` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A warm, photo-led hero over a dark cocktail image, with a centred white serif headline 'Le Royal' and a small tracked eyebrow above it. Terracotta (#a97959) gives the buttons and the header booking pill their warmth, and the header is a pale translucent bar. The stance is hospitable and classic, with the photograph darkened so the white type and terracotta buttons stand out.

**Mood:** hospitable, classic, warm, photographic, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a97959` | Page ground |
| Surface | `#2c3037` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#2c3037` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#a97959` | Primary action and highlights |

Palette by frequency of use: `#a97959` · `#ffffff` · `#2c3037` · `#525252` · `#e5e5e5` · `#737373` · `#a3a3a3` · `#fafafa` · `#f5f5f5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center space-x-2 bg-[#A97959] text-white px-5 py-2.5 rounded-full hover:bg-[#8e654a] transition-all transform hover:scale-[1.02] shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Booking form (`booking`)
3. Hero (`hero`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

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
  --radius: 8px;
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

- **Do:** Set the hero headline in a centred white serif over a darkened photo.
- **Do:** Use terracotta (#a97959) for the buttons and the header booking action.
- **Do:** Keep the header a pale translucent bar with the logo in serif.
- **Don't:** Don't brighten the hero photo; the white type needs the dark overlay.
- **Don't:** Don't use terracotta for body text; it is for buttons and the booking action.
- **Don't:** Don't set the hero headline in a sans-serif; it is a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
