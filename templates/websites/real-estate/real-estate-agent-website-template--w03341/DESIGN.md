# Design system — Real Estate Agent Website Template

`SN-W03341` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A moody real estate hero in which a darkened dusk photograph of a modern house sits behind a large white serif headline. The same warm tan highlight and solid tan button carry the calls to action, and the surrounding page stays neutral charcoal (#171717) with white and grey type. Photography supplies all the colour in the hero.

**Mood:** moody, neutral, refined, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#525252` · `#a3a3a3` · `#000000` · `#f5f5f5` · `#262626` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Listings (`listings`)
5. About (`about`)
6. Services (`services`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Process / steps (`how-it-works`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the hero photograph darkened so white headline type stays legible
- **Do:** Set headlines in white Playfair Display with one tan highlighted word
- **Do:** Use the solid tan button for the main call to action only
- **Don't:** Don't use bright colours; the page is charcoal, white and grey
- **Don't:** Don't set the headline over a bright area of the photograph
- **Don't:** Don't make the outlined button the primary action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
