# Design system — Burger Heaven Restaurant Landing Page Template

`SN-W02851` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Cheerful and pop-graphic. A saturated yellow sunburst fills the hero behind a dark brown headline (#382416), with the second line set in rust red (#b63c20) for contrast. Round sticker badges and a white note card with a shadow float over the artwork in a loose, hand-placed way. Brown is the text colour rather than black, which keeps the food-led palette warm.

**Mood:** cheerful, pop, warm, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff8ec` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#382416` | Headings and primary copy |
| Muted text | `#89715d` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b63c20` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#382416` · `#89715d` · `#e5d2b7` · `#fff8ec` · `#b63c20` · `#958068` · `#74391d` · `#d9bfa0` · `#fff9ef`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow
- **Body:** Barlow
- **Loaded families:** Barlow, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_20px_40px_#6740200c]`
- **Content width:** `max-w-6xl`, `max-w-[90rem]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="absolute bottom-2 right-0 z-20 flex items-center gap-3 rounded-full bg-[#382416] px-5 py-4 text-sm font-medium uppercase tracking-wide text-[#fff4dc] shadow-lg transition-transform hover:-translate-y-1 sm:bottom-6 sm:px-7">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Feature grid (`features`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)
6. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fff8ec;
  --color-surface: #ffffff;
  --color-text: #382416;
  --color-muted: #89715d;
  --color-border: #ffffff;
  --color-accent: #b63c20;
  --font-display: "Barlow", sans-serif;
  --font-body: "Barlow", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff8ec',
    surface: '#ffffff',
    ink: '#382416',
    muted: '#89715d',
    line: '#ffffff',
    accent: '#b63c20',
  },
  fontFamily: { display: ['Barlow'], sans: ['Barlow'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in dark brown (#382416) with the last line in rust (#b63c20)
- **Do:** Keep the sunburst as the one full-bleed graphic in the hero
- **Do:** Use round or tilted sticker badges for offers instead of standard banners
- **Don't:** Don't use pure black for text; the brown is the text colour
- **Don't:** Don't place white cards on the sunburst without a soft shadow
- **Don't:** Don't add a cool blue or green accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
