# Design system — Barbershop BASRI

`SN-W02709` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `bg`

## Direction

Barbershop page on a dark photograph of styled chairs, with a centred white serif headline and a gold (#c5aa65) logo and outlined CTA. The gold is the only colour, used for the wordmark and the booking button, and the rest is near-black and white. A cookie notice sits at the bottom edge, so the page reads as a moody, traditional barbershop site.

**Mood:** moody, traditional, dark, warm gold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5aa65` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c5aa65` · `#000000` · `#121212` · `#b79f5b` · `#1e1e1e` · `#151515` · `#f6f3ee` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Playfair Display, Geist
- **Scale (largest breakpoint):** h2 60px · h3 18px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_40px_rgba(197,170,101,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-[46rem]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mt-4 px-4 py-2 rounded-lg bg-[#c5aa65] text-black font-semibold hover:bg-[#b79f5b] transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Announcement bar (`announcement-bar`)
3. Hero (`hero`)
4. About (`about`)
5. Map / location (`map-location`)
6. Bento grid (`bento-grid`)
7. Team (`team`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c5aa65;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c5aa65',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero on the dark photograph with white serif headlines, centred.
- **Do:** Use the gold (#c5aa65) for the logo, the booking button and small labels only.
- **Do:** Keep the photograph dark and low-key so the white headline stays readable.
- **Don't:** Don't use gold for body copy; it is for the logo and the CTA.
- **Don't:** Don't lighten the photograph behind the headline.
- **Don't:** Don't set the headline in sans; the serif is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
