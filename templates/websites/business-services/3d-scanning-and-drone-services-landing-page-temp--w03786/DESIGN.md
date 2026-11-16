# Design system — 3D Scanning and Drone Services Landing Page Template

`SN-W03786` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A dark, high-end landing page on a near-black ground, with very large white Prompt headlines set in tight, heavy lines. Supporting copy is short and light grey, and the navigation sits in a thin translucent bar above the hero. The page relies on type and dark space rather than ornament, so the headline does the work.

**Mood:** bold, dark, technical, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#5da9ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4af37` · `#5da9ff` · `#000000` · `#121212` · `#0b0b0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Prompt
- **Body:** Prompt
- **Loaded families:** Prompt
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.3rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[#D4AF37]/10`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-xl transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/15 sm:inline-flex font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #5da9ff;
  --font-display: "Prompt", sans-serif;
  --font-body: "Prompt", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#5da9ff',
  },
  fontFamily: { display: ['Prompt'], sans: ['Prompt'] },
} }
```

## Do and don't

- **Do:** Set headlines in Prompt at a large size with tight leading, in white (#ffffff).
- **Do:** Keep supporting copy short and in light grey, not pure white.
- **Do:** Use the translucent navigation bar only above a dark hero.
- **Don't:** Don't add decorative illustrations behind headlines.
- **Don't:** Don't set Czech headlines in a second typeface.
- **Don't:** Don't place the translucent bar over a light image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
