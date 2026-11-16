# Design system — Hiking Expert Landing Page Template

`SN-W01185` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A vintage travel-series page on a deep teal ground (#2d6f81), with cream type (#f8f5f0) and a mustard yellow (#fccf79) for the second headline line. A framed photograph of a road-trip van sits beside a strip of small thumbnails, which gives the page a retro magazine feel. Terracotta (#af5342) fills the primary button, and the headline is set in a plain uppercase sans.

**Mood:** vintage, adventurous, warm, retro

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2d6f81` | Page ground |
| Surface | `#ebe7e0` | Cards, panels, raised areas |
| Text | `#f8f5f0` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f8f5f0` | Hairlines, dividers, outlines |
| Accent | `#fccf79` | Primary action and highlights |
| Second accent | `#af5342` | Supporting highlights |

Palette by frequency of use: `#fccf79` · `#f8f5f0` · `#af5342` · `#2d6f81` · `#181d14` · `#4e1c12` · `#ffffff` · `#ebe7e0` · `#e5e7eb` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Public Sans
- **Body:** Public Sans
- **Loaded families:** Oswald, Public Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-none`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-block bg-[#FCCF79] text-[#4E1C12] font-wpa uppercase tracking-widest px-8 py-3 retro-shadow hover:translate-y-1 hover:shadow-none transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2d6f81;
  --color-surface: #ebe7e0;
  --color-text: #f8f5f0;
  --color-muted: #4b5563;
  --color-border: #f8f5f0;
  --color-accent: #fccf79;
  --color-accent-2: #af5342;
  --font-display: "Public Sans", sans-serif;
  --font-body: "Public Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2d6f81',
    surface: '#ebe7e0',
    ink: '#f8f5f0',
    muted: '#4b5563',
    line: '#f8f5f0',
    accent: '#fccf79',
    accent2: '#af5342',
  },
  fontFamily: { display: ['Public Sans'], sans: ['Public Sans'] },
} }
```

## Do and don't

- **Do:** Set the second line of the hero headline in mustard yellow (#fccf79).
- **Do:** Use terracotta (#af5342) for the primary button and a cream outline for the secondary.
- **Do:** Frame hero photography with a thick cream or dark border and a small caption bar.
- **Don't:** Don't set the page on the cream ground; the deep teal is the ground in this design.
- **Don't:** Don't set body copy in mustard; it is for headline emphasis.
- **Don't:** Don't use plain flat photo frames; the thick border is the vintage cue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
