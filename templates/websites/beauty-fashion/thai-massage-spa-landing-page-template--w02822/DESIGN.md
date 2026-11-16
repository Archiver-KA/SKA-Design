# Design system — Thai Massage Spa Landing Page Template

`SN-W02822` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A ceremonial spa hero on a deep brown ground (#2c241b), set over a dimmed photograph of stones and hands. The headline is white in a light weight, with the second line in gold italic (#d4af37), and the same gold fills the booking button and the small spaced eyebrow above the title. Gold on dark brown reads as calm and luxurious, while the wine red (#701d25) is held back as a supporting accent.

**Mood:** ceremonial, calm, warm, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2c241b` | Page ground |
| Surface | `#f9f7f2` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#701d25` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#2c241b` · `#9ca3af` · `#4b5563` · `#6b7280` · `#701d25` · `#f9f7f2` · `#f3f4f6` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lato
- **Body:** Lato
- **Loaded families:** Lato, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-[#D4AF37] text-[#2c241b] px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Map / location (`map-location`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2c241b;
  --color-surface: #f9f7f2;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #701d25;
  --font-display: "Lato", sans-serif;
  --font-body: "Lato", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2c241b',
    surface: '#f9f7f2',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#701d25',
  },
  fontFamily: { display: ['Lato'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Use the deep brown (#2c241b) as the ground for the hero and navigation
- **Do:** Set the second headline line in gold italic (#d4af37)
- **Do:** Use gold for the primary button and the eyebrow label only
- **Don't:** Don't put gold text on light backgrounds; the contrast fails
- **Don't:** Don't use the wine red (#701d25) for large areas; it supports the gold
- **Don't:** Don't place body copy over the photograph without the dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
