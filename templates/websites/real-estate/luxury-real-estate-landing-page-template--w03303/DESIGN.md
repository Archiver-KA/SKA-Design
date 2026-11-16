# Design system — Luxury Real Estate Landing Page Template

`SN-W03303` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, heavy sans headline in white capitals sits over a flat mid-grey gradient, with the copy kept short and left-aligned. A saturated orange (#ea580c) contact panel on the right carries the only colour on the page, and the same orange marks the italic quote's rule and the small kicker. Depth comes from the flat grey field, not from effects.

**Mood:** bold, stark, direct, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#f97316` · `#c2410c` · `#525252` · `#e5e5e5` · `#ea580c` · `#f5f5f5` · `#fafafa` · `#fed7aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full bg-white text-orange-600 font-semibold py-4 rounded-lg mt-4 hover:bg-neutral-100 transition-colors shadow-lg text-sm tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#262626',
    line: '#ffffff',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase sans in white over the grey field.
- **Do:** Use the orange (#ea580c) for the contact panel and small accents only.
- **Do:** Keep the contact form as a single orange panel with a white submit button.
- **Don't:** Don't add orange to large headline areas; it stays on the panel and rules.
- **Don't:** Don't use light weights for the headline; it needs weight to hold the grey.
- **Don't:** Don't add shadows or gradients to the contact panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
