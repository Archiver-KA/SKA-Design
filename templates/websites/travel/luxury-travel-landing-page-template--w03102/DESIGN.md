# Design system — Luxury Travel Landing Page Template

`SN-W03102` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, monochrome travel hero on a near-white ground. The headline is a very large, tightly tracked sans-serif in black, centred, with a grey subline and a pill search bar ending in a black action button. The design runs on black, white and grey, and the type size does the work.

**Mood:** monochrome, minimal, confident, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#f3f4f6` · `#fafafa` · `#4b5563` · `#d1d5db` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_10px_rgba(0,0,0,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-200 active:scale-95 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Booking form (`booking`)
6. Timeline (`timeline`)
7. Pricing (`pricing`)
8. Listings (`listings`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #000000;
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
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large and tightly tracked in heavy black sans-serif
- **Do:** Use black (#000000) for the primary button and the Sign up button
- **Do:** Keep the search bar as one pill with thin dividers between fields
- **Don't:** Don't add a green accent; the design has none
- **Don't:** Don't set the subline in black; it is grey
- **Don't:** Don't add decorative imagery to the hero; it is type-led

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
