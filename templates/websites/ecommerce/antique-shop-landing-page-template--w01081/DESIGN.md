# Design system — Antique Shop Landing Page Template

`SN-W01081` · ecommerce · light mode · Sinera Atlas theme `market` · language `da`

## Direction

A quiet, photograph-led shop page where a cream header sits over a desaturated interior photo, so the furniture world is the hero rather than the colour. The wordmark is a dark serif and the navigation is small, widely spaced sans. Colour comes from the photograph, and the page itself stays neutral beige and grey.

**Mood:** quiet, domestic, refined, neutral, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f0e6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3f2f2a` | Headings and primary copy |
| Border | `#22332b` | Hairlines, dividers, outlines |
| Accent | `#6b1f24` | Primary action and highlights |
| Second accent | `#b89f6f` | Supporting highlights |

Palette by frequency of use: `#22332b` · `#f5f0e6` · `#3f2f2a` · `#6b1f24` · `#ffffff` · `#b89f6f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 24px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-soft`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-foxred text-creme px-8 py-4 rounded-2xl text-lg font-medium tracking-wide hover:bg-brass transition-all duration-500 shadow-soft transform hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Map / location (`map-location`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f0e6;
  --color-surface: #ffffff;
  --color-text: #3f2f2a;
  --color-border: #22332b;
  --color-accent: #6b1f24;
  --color-accent-2: #b89f6f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f0e6',
    surface: '#ffffff',
    ink: '#3f2f2a',
    line: '#22332b',
    accent: '#6b1f24',
    accent2: '#b89f6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a dark high-contrast serif
- **Do:** Keep the hero photograph desaturated under a light overlay
- **Do:** Use cream (#f5f0e6) for the header and page ground
- **Don't:** Don't put saturated colour blocks behind the hero
- **Don't:** Don't set the navigation in serif
- **Don't:** Don't use the oxblood accent for large areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
