# Design system — Rayhon Luxury Beauty Landing Page Template

`SN-W02810` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `ru`

## Direction

A dark industrial-products hero on a near-black ground (#0c0a09) with a large white Inter headline. Navigation is small uppercase with wide letter spacing, and one solid orange (#ea580c) button leads the action, paired with a dark outline button. The page is flat and high-contrast, relying on type scale and a single warm accent rather than imagery or ornament.

**Mood:** industrial, high-contrast, flat, assertive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#ea580c` · `#e7e5e4` · `#78716c` · `#0c0a09` · `#fafaf9` · `#d6d3d1` · `#a8a29e` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 14px · body 12px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_0_15px_rgba(229,211,179,0.8)]`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="bg-orange-600 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-orange-700 transition-colors w-full sm:w-auto text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Product grid (`product-grid`)
7. Services (`services`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #e7e5e4;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#e7e5e4',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on the near-black ground and set headlines in white Inter
- **Do:** Use the orange (#ea580c) only for the primary button
- **Do:** Set the navigation in small uppercase with wide letter spacing
- **Don't:** Don't use the light palette values as the ground; the hero is dark despite the light tag
- **Don't:** Don't set headlines in a serif; the page is Inter throughout
- **Don't:** Don't put the orange on large surfaces; it marks the one action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
