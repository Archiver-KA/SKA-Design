# Design system — Luxury Yacht Charter Landing Page Template

`SN-W03114` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic yacht hero with a white superyacht on teal water, under a light frosted navigation bar. The headline is a white sans-serif, Beyond the, with Horizon in a lighter italic on the second line. A white pill search bar with four fields and a black Search button sits over the lower part of the photo. The palette is blue-green water and white, with a translucent overlay for legibility.

**Mood:** airy, maritime, luxurious, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#bfdbfe` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#f4f4f5` · `#fafafa` · `#e4e4e7` · `#a1a1aa` · `#27272a` · `#2563eb` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-zinc-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-zinc-900/10 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #bfdbfe;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#bfdbfe',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in sans-serif, with the second line in a lighter italic
- **Do:** Place search as one white pill with a dark action button at its right end
- **Do:** Keep the photograph full-bleed with a soft darkening so white text reads
- **Don't:** Don't use the pale blue (#bfdbfe) as the ground; the hero is a photograph
- **Don't:** Don't use the blue (#2563eb) for buttons; the buttons are black
- **Don't:** Don't place the headline over the bright hull without a darkening layer

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
