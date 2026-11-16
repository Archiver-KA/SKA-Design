# Design system — Food Delivery Landing Page Template

`SN-W02899` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, friendly delivery hero on a warm off-white ground with a faint peach glow at the top. A heavy black sans headline carries the page, with one word, 'fast', in orange (#ea580c), and an orange primary button leads the actions. The food photo sits in a large rounded frame, and a small white card floats over its corner with delivery time, so the layout feels approachable and fast-paced.

**Mood:** friendly, bright, approachable, fast-paced, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#e5e5e5` · `#fafafa` · `#ea580c` · `#737373` · `#f97316` · `#f5f5f5` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-orange-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg shadow-orange-200 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Testimonials (`testimonials`)
5. Menu list (`menu-list`)
6. Logo cloud (`logo-cloud`)
7. Stats band (`stats`)
8. Contact form (`contact-form`)
9. Cart / checkout (`cart-checkout`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans, with one key word in orange (#ea580c).
- **Do:** Use the orange (#ea580c) for the primary order button and the logo tile.
- **Do:** Put the food photo in a large rounded frame with one small floating info card.
- **Don't:** Don't set headlines in a serif; they are a bold sans throughout.
- **Don't:** Don't add a second accent colour; orange is the only one.
- **Don't:** Don't set paragraphs in pure black; body copy is dark grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
