# Design system — Voyara Luxury Travel Landing Page Template

`SN-W03159` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A premium travel hero: a full-bleed photograph of a wooden boat on a mountain lake, darkened with a navy-tinted overlay, carries a centred white serif headline. A small amber eyebrow line (#f4a91f) sits above it and an amber search button closes the translucent search bar. Amber is the one accent colour, and the navy appears only in the overlay.

**Mood:** luxurious, warm, cinematic, classic, refined

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

- **Do:** Set the hero headline in a white serif, centred, over a darkened photograph
- **Do:** Use amber (#f4a91f) for the eyebrow line and the search button only
- **Do:** Keep the search as a translucent bar with labelled fields
- **Don't:** Don't use the navy (#0b1f3a) as a fill on the hero; it is an overlay tone
- **Don't:** Don't set the headline in a heavy sans; use a light serif
- **Don't:** Don't add more than one amber element per view beyond the search button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
