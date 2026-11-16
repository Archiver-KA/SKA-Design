# Design system — Cafe Restaurant Landing Page Template

`SN-W02863` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cream and brown café template with a Playfair Display voice. The cream ground (#fafaf9) carries a large serif headline in dark brown, with emphasis words set in a rich brown (#92400e), and brown pill buttons lead the hero. A soft yellow image panel with floating rating and bestseller cards sits beside the copy, so the page reads as warm and friendly.

**Mood:** warm, friendly, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#92400e` | Primary action and highlights |
| Second accent | `#ecfccb` | Supporting highlights |

Palette by frequency of use: `#92400e` · `#44403c` · `#292524` · `#ffffff` · `#57534e` · `#78716c` · `#f5f5f4` · `#1c1917` · `#fef3c7` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-stone-900/5`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-amber-800 hover:bg-amber-900 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Stats band (`stats`)
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
  --color-muted: #44403c;
  --color-border: #f5f5f4;
  --color-accent: #92400e;
  --color-accent-2: #ecfccb;
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
    muted: '#44403c',
    line: '#f5f5f4',
    accent: '#92400e',
    accent2: '#ecfccb',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with emphasis words in brown (#92400e)
- **Do:** Use brown pills for the primary and secondary hero buttons
- **Do:** Keep rating and bestseller cards small and floating over the image corner
- **Don't:** Don't use a cold grey background for the hero
- **Don't:** Don't set emphasis words in a bold sans
- **Don't:** Don't add a second strong colour beside the brown

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
