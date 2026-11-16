# Design system — Wellness & Longevity Shopify Landing Page Template

`SN-W02555` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A premium supplement store hero built around a deep forest-green panel (#346d4c) with a gold ring and gold wordmark (#d4af6a) as the product stand-in. The green also fills the top bar and the primary button, and the gold is kept to the emblem, so the palette reads as natural and expensive. The stance is calm and product-led, with an off-white ground and a left column of short, bold type.

**Mood:** natural, premium, calm, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f7f4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#346d4c` | Primary action and highlights |
| Second accent | `#d4af6a` | Supporting highlights |

Palette by frequency of use: `#346d4c` · `#ffffff` · `#525252` · `#d4af6a` · `#e5e5e5` · `#737373` · `#404040` · `#f4f7f4` · `#1f4530` · `#2a5a3e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Cormorant Garamond
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center bg-[#346d4c] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2a5a3e] transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f7f4;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #346d4c;
  --color-accent-2: #d4af6a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f7f4',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#346d4c',
    accent2: '#d4af6a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use forest green (#346d4c) for the top bar, the primary button and the hero panel
- **Do:** Use gold (#d4af6a) only for the emblem and wordmark inside the green panel
- **Do:** Keep the hero as a left text column with a tall green panel on the right
- **Don't:** Don't use the gold for buttons or body copy
- **Don't:** Don't leave template tags visible in the top left.
- **Don't:** Don't set the headline in a script face; it is a bold sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
