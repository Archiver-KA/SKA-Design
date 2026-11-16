# Design system — Historic Boutique Hotel Landing Page Template

`SN-W03056` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark editorial hotel page on a charcoal ground (#1a1a1a) with a cream headline (#fdf8f3) in a serif, and a second line set in gold (#c9a227) for emphasis. Gold is used sparingly: the header button, the search button and the italic highlight. Body text is set in a clean sans in soft grey, and the booking bar sits low in the hero so the page reads as a quiet luxury brochure.

**Mood:** dark, editorial, luxurious, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#fdf8f3` | Headings and primary copy |
| Border | `#fdf8f3` | Hairlines, dividers, outlines |
| Accent | `#c9a227` | Primary action and highlights |

Palette by frequency of use: `#fdf8f3` · `#c9a227` · `#1a1a1a` · `#262626` · `#e8d5a3` · `#000000` · `#333333` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center px-6 py-2.5 bg-gold text-charcoal text-xs font-medium tracking-wider uppercase rounded-sm hover:bg-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #262626;
  --color-text: #fdf8f3;
  --color-border: #fdf8f3;
  --color-accent: #c9a227;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#262626',
    ink: '#fdf8f3',
    line: '#fdf8f3',
    accent: '#c9a227',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline line in italic gold (#c9a227)
- **Do:** Keep the ground charcoal (#1a1a1a) and surfaces one step lighter (#262626)
- **Do:** Pair the serif headline with Inter body copy
- **Don't:** Don't fill large areas with gold; it is an accent only
- **Don't:** Don't use pure white for text; the cream (#fdf8f3) is the text colour
- **Don't:** Don't put a light section between dark sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
