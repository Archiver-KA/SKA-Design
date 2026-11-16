# Design system — Luxury Salon Landing Page Template

`SN-W02790` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

An understated salon hero: a mid-grey gradient wash sits behind a centred white serif headline, with the second line in a warm gold italic. A pill badge sits above, and below the headline a solid white primary button sits beside an outlined secondary one. A light nav bar with a near-black booking button sits above the hero. The green WhatsApp bubble is the only saturated colour on the screen.

**Mood:** understated, grey, classic, warm, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f5f5f4` · `#44403c` · `#fafaf9` · `#57534e` · `#000000` · `#e7e5e4` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Poppins
- **Loaded families:** Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Pricing (`pricing`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Booking form (`booking`)
9. Map / location (`map-location`)
10. Process / steps (`how-it-works`)
11. Footer (`footer`)
12. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Use near-black (#1c1917) for the nav booking button and the primary action.
- **Do:** Set the headline in a centred serif, with the second line in gold italic.
- **Do:** Keep the hero a neutral grey gradient with white text on it.
- **Don't:** Don't use green for buttons; keep it to the WhatsApp contact.
- **Don't:** Don't set the gold italic on light grey; it needs the dark wash.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
