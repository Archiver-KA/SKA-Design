# Design system — Urban Nail & Beauty Landing Page Template

`SN-W02823` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A soft, blush-toned nail and beauty page with a small serif wordmark and sans navigation on a pale pink-white ground. The one strong colour is a deep raspberry pill for the Book Now action, which carries the page's accent, while the rest stays in soft neutrals. The layout is airy, with a thin top strip for opening hours and address and generous space around the hero.

**Mood:** soft, feminine, airy, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf5f2` | Page ground |
| Surface | `#faf5f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8d5cd` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#faf5f2` · `#e8d5cd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-accent-500 hover:bg-burgundy-800 text-white text-xs font-medium uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Services (`services`)
6. Call to action (`cta`)
7. Logo cloud (`logo-cloud`)
8. Team (`team`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf5f2;
  --color-surface: #faf5f2;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #e8d5cd;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf5f2',
    surface: '#faf5f2',
    ink: '#111111',
    line: '#ffffff',
    accent: '#e8d5cd',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground on the blush off-white (#faf5f2) with near-black text
- **Do:** Use the deep raspberry pill only for the Book Now action
- **Do:** Keep the wordmark in a small serif in the navigation
- **Don't:** Don't use pure white as the page ground; the blush tint is part of the look
- **Don't:** Don't add a second saturated colour beside the raspberry
- **Don't:** Don't set the navigation in bold weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
