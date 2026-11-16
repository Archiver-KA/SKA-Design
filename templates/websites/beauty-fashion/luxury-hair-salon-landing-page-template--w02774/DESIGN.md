# Design system — Luxury Hair Salon Landing Page Template

`SN-W02774` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, photographic salon hero: a dark taupe-to-cream gradient sits over the photograph, with white serif headline text on the dark side. Gold (#c5a065) is the only brand colour, used for the eyebrow label, the italic headline word and the primary button, and a green WhatsApp bubble is the one other colour in view. The type pairs a high-contrast serif display with a plain sans body.

**Mood:** warm, polished, classic, upscale, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a065` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c5a065` · `#1c1917` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#f5f5f4` · `#78716c` · `#fdfbf7` · `#25d366`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#C5A065] text-white text-sm font-medium tracking-wide hover:bg-[#B08955] transition-all duration-300 shadow-lg">…</a>
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
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #c5a065;
  --color-accent-2: #25d366;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e7e5e4',
    ink: '#57534e',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#c5a065',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#c5a065) for the eyebrow, the italic headline word and the primary button.
- **Do:** Set headlines in Playfair Display, with the final phrase in italic.
- **Do:** Keep the photograph darkened on the text side of the hero.
- **Don't:** Don't set body copy in gold.
- **Don't:** Don't add a second brand colour beside the WhatsApp green (#25d366).
- **Don't:** Don't place the headline over the light cream area on the right.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
