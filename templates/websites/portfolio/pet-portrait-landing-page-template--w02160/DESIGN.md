# Design system — Pet Portrait Landing Page Template

`SN-W02160` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Quiet editorial stance on a warm off-white ground (#fafaf8) with charcoal (#2b2b2b) as the only strong colour. Playfair Display carries the large headline, with one word set in italic muted grey, while Inter handles body copy and pill-shaped controls. The recognisable element is the serif headline paired with a solid charcoal pill button; the green appears only as a small status dot.

**Mood:** quiet, editorial, warm, restrained, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2b2b2b` | Headings and primary copy |
| Muted text | `#8e8e8e` | Secondary copy, captions |
| Border | `#e6e2db` | Hairlines, dividers, outlines |
| Accent | `#2b2b2b` | Primary action and highlights |

Palette by frequency of use: `#2b2b2b` · `#8e8e8e` · `#e6e2db` · `#ffffff` · `#fafaf8` · `#404040` · `#4ade80` · `#22c55e` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[150px]`, `max-w-[1200px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-[#2B2B2B] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#404040] transition-colors flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #2b2b2b;
  --color-muted: #8e8e8e;
  --color-border: #e6e2db;
  --color-accent: #2b2b2b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#2b2b2b',
    muted: '#8e8e8e',
    line: '#e6e2db',
    accent: '#2b2b2b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and put one word in italic muted grey (#8e8e8e)
- **Do:** Use charcoal (#2b2b2b) for the primary button and keep green (#4ade80) to status dots
- **Do:** Make buttons and tags fully rounded pills
- **Don't:** Don't use green as a button or a large fill
- **Don't:** Don't set headlines in Inter
- **Don't:** Don't add heavy drop shadows; cards are flat with hairline borders (#e6e2db)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
