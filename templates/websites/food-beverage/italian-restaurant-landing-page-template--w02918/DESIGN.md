# Design system — Italian Restaurant Landing Page Template

`SN-W02918` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, editorial light hero with a four-line headline that mixes sans and italic serif, and 'Every Bite' is set in rust-brown (#7c2d12). Rust is the only accent, used for the filled primary button and the header booking button, and the page ground is a warm off-white with a pale peach glow. The stance is artisanal and tactile, with type doing the editorial work.

**Mood:** warm, editorial, artisanal, tactile, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#7c2d12` | Primary action and highlights |

Palette by frequency of use: `#7c2d12` · `#1c1917` · `#78716c` · `#ffffff` · `#57534e` · `#292524` · `#e7e5e4` · `#f5f5f4` · `#fff7ed` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-stone-900/5`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-orange-900 hover:bg-orange-950 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #7c2d12;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#7c2d12',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set one phrase per headline in rust-brown (#7c2d12), with the last phrase in italic.
- **Do:** Use rust (#7c2d12) for the filled primary button and the header booking button.
- **Do:** Keep the page on a warm off-white ground with a pale peach glow.
- **Don't:** Don't colour every headline line; only one phrase takes the rust.
- **Don't:** Don't use cool greys for the page ground; it is warm off-white.
- **Don't:** Don't add a second accent colour; rust is the only one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
