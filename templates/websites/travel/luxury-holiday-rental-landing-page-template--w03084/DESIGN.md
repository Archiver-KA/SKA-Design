# Design system — Luxury Holiday Rental Landing Page Template

`SN-W03084` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A luxury holiday rental on a dark photographic hero, with a large white serif headline, the second line in the same serif, and a gold (#d4af37) book button as the main action. Gold also marks the wordmark and the check-availability button in the navigation, so the accent is consistent. A thin outlined button sits beside the gold one, and the bottom row lists stats in small caps.

**Mood:** luxurious, dark, classic, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#faf9f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#000000` · `#94a3b8` · `#64748b` · `#faf9f6` · `#475569` · `#0f172a` · `#e2e8f0` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 12px · h3 36px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Map / location (`map-location`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #faf9f6;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #e2e8f0;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#faf9f6',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) for the primary button and the nav booking action
- **Do:** Set headlines in a white serif over a darkened photograph
- **Do:** List short facts in small caps across the bottom of the hero
- **Don't:** Don't use gold for body text or thin lines over the photo
- **Don't:** Don't use the light page ground (#ffffff) for the hero; it stays dark
- **Don't:** Don't put more than two buttons side by side in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
