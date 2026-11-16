# Design system — Restaurant Landing Page Template

`SN-W02977` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photo-led hero with a dark, moody photograph of grilled meat and vegetables behind a large white Playfair Display headline, where the closing word is set in italic. White pill buttons sit under the copy, one filled and one outlined, beneath a translucent dark navigation bar. The hero is dark, and no red accent appears on the page.

**Mood:** photo-led, elegant, moody, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#262626` · `#fafafa` · `#d4d4d4` · `#525252` · `#374151` · `#f5f5f5` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-neutral-900 transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Booking form (`booking`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #16a34a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#262626',
    muted: '#737373',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display with the closing word in italic.
- **Do:** Put white pill buttons over the dark photograph, with the filled one for the primary action.
- **Do:** Keep a translucent dark navigation bar over the hero image.
- **Don't:** Don't use red as a button colour; the hero has none.
- **Don't:** Don't set the headline in dark text over the photograph.
- **Don't:** Don't drop the italic on the closing word of the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
