# Design system — Radiant Skin Dermatology Landing Page Template

`SN-W02514` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark navy hero where the headline is white serif and its second line is an italic in pale gold. Gold (#d4af37) is the only colour, used for the header and primary buttons and the small uppercase eyebrow, with a thin outlined secondary button beside them. Four large stat figures in a row at the foot of the hero give the practice its credentials at a glance.

**Mood:** dark, luxurious, precise, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#0f172a` · `#94a3b8` · `#e2e8f0` · `#475569` · `#f8fafc` · `#64748b` · `#334155` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) for the primary button, the eyebrow and the stat numerals only
- **Do:** Set the headline in white serif with the second line in italic pale gold
- **Do:** Put four large stat figures in a row at the foot of the hero, separated by thin rules
- **Don't:** Don't set body copy in gold; it is for accents and numbers
- **Don't:** Don't place light panels on the navy ground
- **Don't:** Don't use light grey (#e2e8f0) for buttons; gold is the action colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
