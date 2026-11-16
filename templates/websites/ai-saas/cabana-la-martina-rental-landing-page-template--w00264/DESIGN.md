# Design system — Cabaña La Martina Rental Landing Page Template

`SN-W00264` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A warm, luxurious rental page over a taupe-grey photo overlay, with a large white italic serif headline (Playfair Display) that sets the tone. Olive (#555b00) fills the primary and reserve buttons, with a white outlined secondary beside them, and the gold (#be7f00) is held back from the first screen. Small tracked uppercase labels above the headline keep the editorial, resort-like register.

**Mood:** luxurious, warm, editorial, resort

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#555b00` | Page ground |
| Surface | `#282828` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ada89a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#555b00` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#282828` · `#555b00` · `#be7f00` · `#000000` · `#f6efe5` · `#ada89a` · `#3b82f6` · `#1e1e1e` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Public Sans
- **Loaded families:** Playfair Display, Public Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 48px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-[100px]` (100px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-primary text-white text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-[100px] hover:bg-secondary transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Stats band (`stats`)
7. Booking form (`booking`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #555b00;
  --color-surface: #282828;
  --color-text: #ffffff;
  --color-muted: #ada89a;
  --color-border: #ffffff;
  --color-accent: #555b00;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Public Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#555b00',
    surface: '#282828',
    ink: '#ffffff',
    muted: '#ada89a',
    line: '#ffffff',
    accent: '#555b00',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Public Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in white italic Playfair Display, centred over the overlay
- **Do:** Use olive (#555b00) for the primary and reserve buttons
- **Do:** Keep the gold (#be7f00) for small accents rather than buttons
- **Don't:** Don't set body copy in italic; the italic is for headlines
- **Don't:** Don't use the WhatsApp green (#25d366) in the hero
- **Don't:** Don't place the headline over a light patch of the photo without the overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
