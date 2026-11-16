# Design system — Family Restaurant Landing Page Template

`SN-W02887` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photo-led hero with a darkened restaurant image, a large white sans headline and an italic serif accent word in warm gold, followed by a light content area. The orange primary button (#ea580c) carries the calls to action, and white floating cards show dishes over the photo. The stance is friendly and promotional rather than formal, with heavy headline weight and rounded corners on cards.

**Mood:** friendly, promotional, photo-led, bold, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#ea580c` · `#e7e5e4` · `#57534e` · `#f97316` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-orange-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-xl shadow-orange-900/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ea580c;
  --color-accent-2: #16a34a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
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
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ea580c',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ea580c) for the main order button and no other fills.
- **Do:** Set the hero headline in a bold sans with one italic serif word in gold.
- **Do:** Float white dish cards over the hero photo, with rounded corners.
- **Don't:** Don't place hero copy on a bright photo; keep the overlay dark enough for white text.
- **Don't:** Don't use the green accent (#16a34a) for buttons; the buttons are orange.
- **Don't:** Don't drop the italic serif accent word; it is what sets the headline apart.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
