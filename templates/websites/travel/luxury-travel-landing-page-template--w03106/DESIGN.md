# Design system — Luxury Travel Landing Page Template

`SN-W03106` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic hero of a wooden boat on a mountain lake under a dark blue overlay, with a centred white serif headline, Your Journey Begins Here., and a light search bar. The search button is amber (#f4a91f), the only bright element. Below the hero the page turns white, so the design moves from a dramatic photo opening to a clean light layout.

**Mood:** dramatic, photographic, clean, open

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f4a91f` | Primary action and highlights |
| Second accent | `#f4a91f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0b1f3a` · `#f4a91f` · `#f3f4f6` · `#6b7280` · `#1f2937` · `#e5e7eb` · `#9ca3af` · `#4b5563` · `#e09b1c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)]`, `shadow-[0_8px_30px_rgba(11,31,58,0.12)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-1.5`, `gap-2`

**Primary button**

```html
<a class="bg-[#0B1F3A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2f4c] transition-colors shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f4a91f;
  --color-accent-2: #f4a91f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f4a91f',
    accent2: '#f4a91f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put a dark blue overlay over hero photographs before placing white headlines
- **Do:** Use the amber (#f4a91f) for the search button only
- **Do:** Set hero headlines centred, with the search bar as one wide light pill below
- **Don't:** Don't use the amber for links or headings
- **Don't:** Don't place the light search bar over a bright part of the photograph
- **Don't:** Don't carry the photographic treatment into the light content sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
