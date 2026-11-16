# Design system — Haven & Hound Luxury Pet Boarding Template

`SN-W02386` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, upmarket pet-boarding hero on a cream ground (#faf8f3), with a large black serif headline and one italic word in tan. A deep green block holds the logo in the corner and echoes the dark green of the brand, and a full-height photograph of a dog sits on a curved panel. The mood is refined and calm, with the curve and the photograph doing most of the work.

**Mood:** refined, warm, calm, upmarket, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf8f3` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Accent | `#1a2e26` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#faf8f3` · `#1a2e26`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block w-full text-center bg-cream-dark text-forest py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-caramel hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Product grid (`product-grid`)
6. Services (`services`)
7. Feature grid (`features`)
8. Booking form (`booking`)
9. Gallery / portfolio (`gallery-portfolio`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf8f3;
  --color-text: #111111;
  --color-accent: #1a2e26;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf8f3',
    ink: '#111111',
    accent: '#1a2e26',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size, with one italic emphasis word in tan.
- **Do:** Use the deep green (#1a2e26) for the logo block and the dark brand panels.
- **Do:** Frame the hero photograph inside a large curved panel rather than a rectangle.
- **Don't:** Don't set body text in the tan emphasis colour; it is for single words.
- **Don't:** Don't use cool greys on the cream ground.
- **Don't:** Don't add bright colours to the nav or buttons beyond the warm tan.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
