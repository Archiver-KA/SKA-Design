# Design system — Barbershop Landing Page Template

`SN-W02710` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Barbershop page on near-black (#0a0a0a) with a large, bold white sans headline on two lines, the second line fading from light to grey. Two buttons sit under the copy, one solid white and one outlined, so the page is strictly black, white and grey. The design depends on heavy sans scale and contrast, and it has no accent colour.

**Mood:** bold, monochrome, high contrast, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#262626` · `#0a0a0a` · `#737373` · `#171717` · `#d4d4d4` · `#000000` · `#fbbf24` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="text-white bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-neutral-950 font-medium rounded text-sm px-5 py-2.5 focus:outline-none transition-all duration-300 tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. About (`about`)
5. Services (`services`)
6. Product grid (`product-grid`)
7. Booking form (`booking`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold Inter on near-black (#0a0a0a) with a white-to-grey fade on the second line.
- **Do:** Pair one solid white button with one outlined button as the hero action pair.
- **Do:** Keep body copy in light grey (#d4d4d4) for contrast.
- **Don't:** Don't add an amber accent to the hero; the page has none.
- **Don't:** Don't lighten the ground to grey; the page is near-black.
- **Don't:** Don't set headlines in a serif; the sans is the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
