# Design system — Fitness Supplement E-commerce Landing Page Template

`SN-W01160` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A supplement page sits on white with a heavy black sans-serif headline whose middle line is set in green (#76b82a), the single accent carried through the hero. Primary buttons are solid orange (#f97316) with a soft glow, and the secondary is a white pill with a grey outline. A pale green radial glow sits behind the product image, the only ambient decoration in the hero.

**Mood:** energetic, fresh, clean, athletic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#76b82a` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#f3f4f6` · `#e5e7eb` · `#9ca3af` · `#f9fafb` · `#f0fdf4` · `#f97316` · `#76b82a` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Open Sans
- **Loaded families:** Open Sans, Poppins, Geist, Roboto, Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-gray-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden sm:inline-block px-6 py-2.5 rounded-full bg-brand-gradient font-semibold text-sm shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Process / steps (`how-it-works`)
6. Modal / overlay (`modal-overlay`)
7. Product grid (`product-grid`)
8. Stats band (`stats`)
9. Logo cloud (`logo-cloud`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal, Swiper
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #76b82a;
  --color-accent-2: #f97316;
  --font-display: "Poppins", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#76b82a',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Poppins'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Set the middle line of each hero headline in green (#76b82a).
- **Do:** Use the orange (#f97316) for the primary button only, with its soft glow.
- **Do:** Keep the pale green glow behind the product image; do not repeat it in sections.
- **Don't:** Don't use green for buttons; the green belongs to headline emphasis.
- **Don't:** Don't set body copy in green; body copy stays grey.
- **Don't:** Don't crop the product image; it is the hero's focal object.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
