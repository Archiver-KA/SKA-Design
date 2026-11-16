# Design system — Workshop Booking Landing Page Template

`SN-W04137` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light grey page (#f5f5f7) with a very large, heavy uppercase sans headline in three stacked words. The first and last words are near-black (#1a1a1a) and the middle word is light grey (#d1d5db), a contrast that drives the hierarchy. Small copy and a dark rectangular button keep the page plain.

**Mood:** bold, monochrome, graphic, minimal, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#1a1a1a` | Primary action and highlights |
| Second accent | `#eb3a14` | Supporting highlights |

Palette by frequency of use: `#22c55e` · `#d1d5db` · `#ffffff` · `#f5f5f7` · `#666666` · `#1a1a1a` · `#eb3a14` · `#e5e7eb` · `#000000` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 24px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-5xl`, `max-w-[1600px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-primary text-white py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Cart / checkout (`cart-checkout`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Product grid (`product-grid`)
7. Booking form (`booking`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f7;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #666666;
  --color-border: #e5e7eb;
  --color-accent: #1a1a1a;
  --color-accent-2: #eb3a14;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f7',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#666666',
    line: '#e5e7eb',
    accent: '#1a1a1a',
    accent2: '#eb3a14',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans-serif, with the middle word in light grey (#d1d5db)
- **Do:** Use near-black (#1a1a1a) for the primary button and headline words
- **Do:** Keep the light grey ground (#f5f5f7) with small, plain body text
- **Don't:** Don't add green or orange to the headline
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't use a serif or script face for headings

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
