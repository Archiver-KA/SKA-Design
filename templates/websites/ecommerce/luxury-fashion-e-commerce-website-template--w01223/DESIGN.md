# Design system — Luxury Fashion E-commerce Website Template

`SN-W01223` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A grand, formal stance: a full-bleed architectural photograph with a cool, muted grey tone, a large white serif headline centred over it, and two buttons below, one solid white and one outlined. The header is a light band with a serif wordmark and a small burgundy badge. The cathedral spires do the work; the white type is set large enough to hold against the busy sky.

**Mood:** grand, formal, cinematic, muted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Text | `#0a0a0a` | Headings and primary copy |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#7b1113` | Primary action and highlights |
| Second accent | `#7b1113` | Supporting highlights |

Palette by frequency of use: `#0a0a0a` · `#fdfbf7` · `#c5a059` · `#ffffff` · `#7b1113` · `#f3f4f6` · `#000000` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex-1 bg-[#c5a059] text-[#0a0a0a] px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-text: #0a0a0a;
  --color-border: #0a0a0a;
  --color-accent: #7b1113;
  --color-accent-2: #7b1113;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    ink: '#0a0a0a',
    line: '#0a0a0a',
    accent: '#7b1113',
    accent2: '#7b1113',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white serif over the photograph, on two lines.
- **Do:** Use the burgundy (#7b1113) only for small marks such as the cart badge.
- **Do:** Keep the header light, with the serif wordmark centred.
- **Don't:** Don't use the gold (#c5a059) as a page field.
- **Don't:** Don't set the headline in a sans-serif; keep serif.
- **Don't:** Don't place body copy over the busy sky without a darker tone behind it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
