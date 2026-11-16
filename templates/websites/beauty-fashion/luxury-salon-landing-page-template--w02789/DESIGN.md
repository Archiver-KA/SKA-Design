# Design system — Luxury Salon Landing Page Template

`SN-W02789` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A two-part salon page: a desaturated, dark navy-grey photograph hero with white serif type over it, then a pale pink (#fdf2f8) band below. Hot pink (#ec4899) carries the eyebrow label, the primary button and the nav booking button, and the secondary button is an outlined dark box. Pink is the only colour in the design, and the photograph is kept grey so the pink stands out.

**Mood:** bold, feminine, polished, modern, contrasting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf2f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#0f172a` · `#94a3b8` · `#e2e8f0` · `#c9a24d` · `#475569` · `#f8fafc` · `#64748b` · `#fdf2f8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#EC4899] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.4)]">…</a>
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
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdf2f8;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf2f8',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use hot pink (#ec4899) for the eyebrow, the primary button and the nav booking button.
- **Do:** Set the headline in white serif over the photograph, with the second line in italic.
- **Do:** Follow the dark photo hero with a pale pink (#fdf2f8) band for the next section.
- **Don't:** Don't set pink text on the pale band where contrast is low.
- **Don't:** Don't add a second accent colour; pink is the only one.
- **Don't:** Don't set long copy in pink.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
