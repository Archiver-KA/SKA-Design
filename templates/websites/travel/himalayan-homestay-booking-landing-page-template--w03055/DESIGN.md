# Design system — Himalayan Homestay Booking Landing Page Template

`SN-W03055` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A homestay page on a light stone ground (#f5f5f4) with a large Playfair Display headline in charcoal (#1c1917) and a second line in italic slate green (#2f4f4f). Buttons are charcoal pills, and a white booking bar sits under the hero copy to bring availability to the top. The layout is classic and restrained, with the serif doing most of the expressive work.

**Mood:** classic, restrained, hospitable, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#2f4f4f` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#2f4f4f` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#2f4f4f` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#2f4f4f` · `#a8a29e` · `#f5f5f4` · `#78716c` · `#e7e5e4` · `#57534e` · `#fafaf9` · `#e89c24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-himalayan px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-himalayan/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-himalayan transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Listings (`listings`)
5. Timeline (`timeline`)
6. Map / location (`map-location`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #2f4f4f;
  --color-text: #1c1917;
  --color-muted: #2f4f4f;
  --color-border: #f5f5f4;
  --color-accent: #2f4f4f;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#2f4f4f',
    ink: '#1c1917',
    muted: '#2f4f4f',
    line: '#f5f5f4',
    accent: '#2f4f4f',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic slate green (#2f4f4f)
- **Do:** Use charcoal (#1c1917) pill buttons for the primary action
- **Do:** Place the booking bar directly under the hero copy
- **Don't:** Don't use the orange (#e89c24) as a page ground
- **Don't:** Don't set headlines in a sans; the serif is the main voice
- **Don't:** Don't add a second dark button beside the primary one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
