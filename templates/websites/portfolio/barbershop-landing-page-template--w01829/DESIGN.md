# Design system — Barbershop Landing Page Template

`SN-W01829` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark and premium: a charcoal ground (#1c1917) with a photograph under a dark overlay, a centred white headline in bold sans, and a gold (#fbbf24) pill button for the main call to action. A row of small service tiles sits near the bottom. Gold is the one accent, and the layout is centred and restrained.

**Mood:** dark, premium, centred, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#e7e5e4` · `#171717` · `#e5e5e5` · `#fafaf9` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full font-medium py-4 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-colors shadow-lg bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Services (`services`)
4. Pricing (`pricing`)
5. Logo cloud (`logo-cloud`)
6. Product grid (`product-grid`)
7. Map / location (`map-location`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#fbbf24) for the primary button and small icon accents
- **Do:** Centre the hero headline over a darkened photograph
- **Do:** Set service tiles as rounded dark cards with one small icon each
- **Don't:** Don't use the gold for large backgrounds
- **Don't:** Don't set the hero on a light photo without a dark overlay
- **Don't:** Don't add a second bright accent beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
