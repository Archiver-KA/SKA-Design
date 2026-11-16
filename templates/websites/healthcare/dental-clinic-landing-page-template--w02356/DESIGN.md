# Design system — Dental Clinic Landing Page Template

`SN-W02356` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A confident dental page with a deep indigo (#2e3384) information strip across the top and an indigo primary button. A red (#c31b1b) Book Now button sits in the navigation, and the headline is bold sans with the location line in a lighter blue. The split of copy and rounded photo keeps the layout structured, and indigo and red act as two clear signals.

**Mood:** bold, direct, confident, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2e3384` | Primary action and highlights |
| Second accent | `#c31b1b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2e3384` · `#64748b` · `#0f172a` · `#c31b1b` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#1e293b` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-lift`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-accent/20 transform hover:-translate-y-0.5 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Services (`services`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Testimonials (`testimonials`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #2e3384;
  --color-accent-2: #c31b1b;
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#2e3384',
    accent2: '#c31b1b',
  },
  fontFamily: { display: ['Poppins'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep indigo (#2e3384) for the top information strip and the primary button.
- **Do:** Reserve the red (#c31b1b) for one booking call to action in the navigation.
- **Do:** Set the second line of the headline in a lighter blue than the first line.
- **Don't:** Don't use red for body text or large fills.
- **Don't:** Don't drop the top information strip; it carries the address and hours.
- **Don't:** Don't set headlines in a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
