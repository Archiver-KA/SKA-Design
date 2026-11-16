# Design system — Nail & Lash Salon Landing Page Template

`SN-W02805` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

An editorial salon page on a plain white ground with near-black Playfair Display headlines and generous whitespace. Colour is restrained: one orange (#ea580c) italic word in the hero headline carries the accent, and the booking button stays a pale peach pill. Inter at small sizes handles the supporting copy, so the serif headline is the main graphic element.

**Mood:** editorial, airy, restrained, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf5f2` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ea580c` · `#ffffff` · `#78716c` · `#faf5f2` · `#e8d5cd` · `#fee2e2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="w-full bg-orange-600 font-medium text-sm py-3 rounded-md transition-colors mt-2 text-white hover:bg-burgundy-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf5f2;
  --color-text: #111111;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf5f2',
    ink: '#111111',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and reserve italics for one accent word per headline
- **Do:** Use the orange (#ea580c) only for the highlighted headline word and key links
- **Do:** Keep section grounds white or #faf5f2 and separate sections with space, not rules
- **Don't:** Don't set headlines in Inter or in bold weights
- **Don't:** Don't use more than one accent colour in a section
- **Don't:** Don't add gradient fills or heavy shadows to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
