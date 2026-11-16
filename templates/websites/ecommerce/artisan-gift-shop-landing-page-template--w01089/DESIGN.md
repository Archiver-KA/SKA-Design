# Design system — Artisan Gift Shop Landing Page Template

`SN-W01089` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A calm, craft-led gift shop page on warm cream (#f5f4f0), with a dark slate headline and faint curved line shapes behind the hero. Muted slate (#52667a) carries both buttons, which keeps the page quieter than a typical shop. Products appear in a small catalogue window with a tinted card, so the store reads as a curated display rather than a grid.

**Mood:** calm, craft-led, curated, quiet, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2b37` | Headings and primary copy |
| Muted text | `#52667a` | Secondary copy, captions |
| Border | `#e5e4de` | Hairlines, dividers, outlines |
| Accent | `#52667a` | Primary action and highlights |

Palette by frequency of use: `#1f2b37` · `#ffffff` · `#e5e4de` · `#52667a` · `#4a5568` · `#f5f4f0` · `#9ca3af` · `#d1d0c9` · `#3f5265` · `#ebeae4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="rounded-full bg-[#52667a] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f4f0;
  --color-surface: #ffffff;
  --color-text: #1f2b37;
  --color-muted: #52667a;
  --color-border: #e5e4de;
  --color-accent: #52667a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f4f0',
    surface: '#ffffff',
    ink: '#1f2b37',
    muted: '#52667a',
    line: '#e5e4de',
    accent: '#52667a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use slate (#52667a) for primary and secondary buttons
- **Do:** Set headlines in a dark slate serif, not bold
- **Do:** Keep the background cream (#f5f4f0) with faint curved shapes
- **Don't:** Don't use saturated colours for buttons
- **Don't:** Don't set headlines in a heavy weight
- **Don't:** Don't crowd the hero with a full product grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
