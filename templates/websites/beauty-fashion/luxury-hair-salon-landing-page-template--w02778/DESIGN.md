# Design system — Luxury Hair Salon Landing Page Template

`SN-W02778` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimal light salon template: a soft grey-white gradient hero with a large centred serif headline in near-black, set over a quiet wash rather than a photograph. The solid near-black nav button is the only strong element, and a thin announcement strip runs across the top. Most of the first screen is empty space, which is the main stance.

**Mood:** minimal, quiet, airy, refined, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#fafaf9` · `#e7e5e4` · `#292524` · `#d6d3d1` · `#57534e` · `#ffffff` · `#a8a29e` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-screen-xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide hover:bg-stone-800 transition-all duration-300 transform hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
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
    line: '#d6d3d1',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#1c1917) for the nav button and the primary action.
- **Do:** Set headlines in a large serif with generous spacing, centred over the hero.
- **Do:** Keep the hero background as a soft grey gradient rather than an image.
- **Don't:** Don't add colour accents; the page is neutral.
- **Don't:** Don't add a heavy shadow under the nav button.
- **Don't:** Don't put a photograph behind the hero headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
