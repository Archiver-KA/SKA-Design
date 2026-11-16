# Design system — J Glam Nails 

`SN-W02059` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A soft, blush-white beauty page where a large serif headline sets Wear Your in near-black above an italic Confidence in deep plum. Navigation is light and small, the primary button is a solid deep plum pill, and a tall rounded photograph of manicured hands fills the right half. The palette is pale and warm, and the plum is kept to the headline line and the main button.

**Mood:** soft, refined, warm, feminine, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf5f2` | Page ground |
| Surface | `#fef2f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8d5cd` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fef2f2` · `#f87171` · `#faf5f2` · `#e8d5cd` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-accent-500 hover:bg-burgundy-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent-500/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Booking form (`booking`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Timeline (`timeline`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf5f2;
  --color-surface: #fef2f2;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #e8d5cd;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf5f2',
    surface: '#fef2f2',
    ink: '#111111',
    line: '#ffffff',
    accent: '#e8d5cd',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic plum.
- **Do:** Use the deep plum pill for the primary button and keep it the only solid dark fill.
- **Do:** Keep the page on pale blush-white with a tall rounded photograph beside the copy.
- **Don't:** Don't use bright or saturated colours; the palette is pale and warm.
- **Don't:** Don't set the headline in a sans-serif face.
- **Don't:** Don't make the primary button an outline; it is a solid pill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
