# Design system — Luxury Travel Membership Landing Page Template

`SN-W03109` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black hero with a large white serif headline in two parts: The World's Most Exclusive Travel Rates. in white, then For Members Only. in a dimmer grey. There are no photographs, no accent colour and no filled buttons; the only control is a thin outlined rectangle. The restraint and the black field make the page read as a private, invitation-only club.

**Mood:** exclusive, restrained, dark, private

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#d4af37` · `#737373` · `#000000` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#030303` · `#020202` · `#010101`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_10px_white]`, `shadow-[0_0_40px_rgba(212,175,55,0.05)]`, `shadow-[0_0_15px_#D4AF37]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded transition-colors flex justify-between">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Product grid (`product-grid`)
5. Dashboard preview (`dashboard-preview`)
6. Booking form (`booking`)
7. Team (`team`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in white, with the second line in dimmer grey
- **Do:** Keep buttons as thin outlined rectangles on the black ground
- **Do:** Keep the subline short and plain
- **Don't:** Don't use the gold (#d4af37) as a ground; the page is black
- **Don't:** Don't add photographs or colour accents to the hero
- **Don't:** Don't use filled buttons; the page relies on outlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
