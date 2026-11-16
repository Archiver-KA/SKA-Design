# Design system — Pattaya Property Finance Landing Page Template

`SN-W01009` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark property-finance page on deep navy (#020617), with a white bold sans-serif headline in which the offer phrase is set in periwinkle (#818cf8). Periwinkle is also the solid primary button and the stat accents, and a rounded property image sits on the right with a small floating stat. The page is confident and property-led, with one accent used across buttons and figures.

**Mood:** confident, property-led, modern, dark, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#000000` · `#a3a3a3` · `#f5f5f5` · `#818cf8` · `#737373` · `#d4d4d4` · `#262626` · `#6366f1` · `#525252` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-indigo-400/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 bg-indigo-400 hover:bg-indigo-300 text-black hover:shadow-indigo-400/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Listings (`listings`)
5. Gallery / portfolio (`gallery-portfolio`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #e2e8f0;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #818cf8;
  --color-accent-2: #06b6d4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#e2e8f0',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#818cf8',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the offer phrase in periwinkle (#818cf8) and keep the price in white.
- **Do:** Use the periwinkle solid button for the main action and a dark outline button for the secondary.
- **Do:** Keep the property image in a rounded card with a floating stat on its corner.
- **Don't:** Don't use periwinkle for body text.
- **Don't:** Don't add a light section to the hero.
- **Don't:** Don't set the price in the accent colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
