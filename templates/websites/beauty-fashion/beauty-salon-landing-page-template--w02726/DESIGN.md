# Design system — Beauty Salon Landing Page Template

`SN-W02726` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm off-white page with centred serif headlines and small grey body copy. Near-black pills carry the hero actions, and terracotta (#b48472) marks the booking button in the header. The stance is calm and spa-like, built on empty space, and the floating green WhatsApp button is the only other saturated colour on screen.

**Mood:** warm, calm, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbfa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#b48472` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#f5f5f5` · `#b48472` · `#737373` · `#a3a3a3` · `#f3e8e6` · `#e5e5e5` · `#404040` · `#fcfbfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#F3E8E6]/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#B48472] text-white text-sm font-medium hover:bg-[#9E7363] transition-colors shadow-sm shadow-[#B48472]/20">…</a>
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
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fcfbfa;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #b48472;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbfa',
    surface: '#ffffff',
    ink: '#262626',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#b48472',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use terracotta (#b48472) for the header booking button and the other booking entries
- **Do:** Centre hero headings in Playfair Display with generous space above and below
- **Do:** Keep the WhatsApp green (#25d366) to the floating contact button only
- **Don't:** Don't use the green for buttons or links; it signals chat only
- **Don't:** Don't tighten the hero spacing; the calm depends on empty space
- **Don't:** Don't use dark fills for section backgrounds; the page stays off-white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
