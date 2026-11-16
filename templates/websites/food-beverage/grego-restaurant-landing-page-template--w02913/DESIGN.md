# Design system — Grego Restaurant Landing Page Template

`SN-W02913` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark, photographic hero of a restaurant interior with warm pendant lights, carrying a serif headline in white and a small uppercase eyebrow in gold-tinted caps. The two buttons are a solid deep blue (#2563eb) and an outlined ghost, and a small rating card sits bottom-left. The stance is atmospheric and understated; the blue is the only colour that breaks the warm dark palette.

**Mood:** atmospheric, understated, dark, warm, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0c09` | Page ground |
| Surface | `#1c1612` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#f2ead9` · `#ffffff` · `#2563eb` · `#1c1612` · `#0f0c09` · `#c84b31` · `#e8c88a` · `#c8783a` · `#1b2a4e` · `#6b8e4e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-glow`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#1B2A4E] text-cream font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#243a6b] transition-colors shadow-glow font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f0c09;
  --color-surface: #1c1612;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0c09',
    surface: '#1c1612',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif in white over a darkened interior photo.
- **Do:** Use the blue (#2563eb) for the solid primary button and the nav reserve pill only.
- **Do:** Keep the eyebrow as a small uppercase line above the headline.
- **Don't:** Don't use orange (#c8783a) on the page; the ground is near-black.
- **Don't:** Don't brighten the hero photo; the white type needs the dark overlay.
- **Don't:** Don't use blue for body text or links across the page; it is for buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
