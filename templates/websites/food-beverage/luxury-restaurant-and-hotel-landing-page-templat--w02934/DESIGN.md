# Design system — Luxury Restaurant & Hotel Landing Page Template

`SN-W02934` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark charcoal page (#1a1a1a) with a gold accent (#c9a227) used for the primary button, stat figures and a thin outline roundel. Playfair Display headlines sit in warm off-white (#fdf8f3), with the second line in gold. The roundel on the right is the only graphic, so the hero reads as formal and warm rather than busy.

**Mood:** luxurious, formal, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#2d2d2d` | Cards, panels, raised areas |
| Text | `#fdf8f3` | Headings and primary copy |
| Border | `#fdf8f3` | Hairlines, dividers, outlines |
| Accent | `#c9a227` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#c9a227` · `#fdf8f3` · `#1a1a1a` · `#e8d5a3` · `#2d2d2d` · `#f87171` · `#d4763a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-gold/10`, `shadow-gold/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold text-charcoal text-sm font-medium rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Menu list (`menu-list`)
6. Listings (`listings`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Modal / overlay (`modal-overlay`)
9. Testimonials (`testimonials`)
10. Articles (`blog-articles`)
11. Booking form (`booking`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #2d2d2d;
  --color-text: #fdf8f3;
  --color-border: #fdf8f3;
  --color-accent: #c9a227;
  --color-accent-2: #f87171;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#2d2d2d',
    ink: '#fdf8f3',
    line: '#fdf8f3',
    accent: '#c9a227',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#c9a227) for the primary button, stat figures and the outline roundel only
- **Do:** Set headlines in Playfair Display with the second line in gold
- **Do:** Keep stats in a row under the hero, numbers in serif and labels in small sans
- **Don't:** Don't add red or other accents; the palette is off-white and gold on charcoal
- **Don't:** Don't fill the roundel; it stays an outline
- **Don't:** Don't set body copy in the serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
