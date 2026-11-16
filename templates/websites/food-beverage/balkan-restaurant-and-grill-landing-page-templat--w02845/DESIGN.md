# Design system — Balkan Restaurant & Grill Landing Page Template

`SN-W02845` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

Dark, warm and editorial. The first screen sits on a near-black brown ground (#1c1612) with large cream serif headlines in Playfair Display, and a single burnt-orange (#c8783a) fills the primary reservation button and little else. Rounded pill buttons and a glass cookie panel give it a modern finish over a traditional restaurant voice.

**Mood:** warm, editorial, dark, hearth-lit

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1612` | Page ground |
| Surface | `#1c1612` | Cards, panels, raised areas |
| Text | `#f2ead9` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8783a` | Primary action and highlights |

Palette by frequency of use: `#f2ead9` · `#c8783a` · `#ffffff` · `#0f0c09` · `#1c1612` · `#e8c88a` · `#0a0806`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-glow`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-ember text-charcoal font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gold transition-colors shadow-glow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1612;
  --color-surface: #1c1612;
  --color-text: #f2ead9;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c8783a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1612',
    surface: '#1c1612',
    ink: '#f2ead9',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c8783a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headings in Playfair Display at large sizes in cream (#f2ead9)
- **Do:** Use the burnt orange (#c8783a) only for the primary button and one highlight per section
- **Do:** Keep the hero and dark sections on the brown ground (#1c1612)
- **Don't:** Don't set body text in the serif; body copy is Inter
- **Don't:** Don't fill large areas with the orange; it is for actions
- **Don't:** Don't add bright white hero backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
