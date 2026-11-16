# Design system — Dante Freelancer Portfolio Landing Page Template

`SN-W01928` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm near-black page with a large italic serif headline in cream, set over a soft brown glow. The one saturated element is the orange-to-red gradient primary button, with a thin glowing horizontal rule across the hero. Playfair Display in italic does the expressive work, and Inter sets the small body copy and navigation.

**Mood:** warm, editorial, cinematic, dramatic, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#18181b` · `#ef4444` · `#22c55e` · `#dc2626` · `#7c2d12`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-orange-900/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Product grid (`product-grid`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display italic, cream over a dark brown glow
- **Do:** Use the orange-to-red gradient only on the primary button
- **Do:** Keep body copy in Inter at small size, muted grey
- **Don't:** Don't set body copy or navigation in the serif; it is for display only
- **Don't:** Don't add a second saturated colour beside the orange gradient
- **Don't:** Don't use a flat light background; the ground stays dark and warm

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
