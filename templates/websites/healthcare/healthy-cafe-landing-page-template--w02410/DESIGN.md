# Design system — Healthy Café Landing Page Template

`SN-W02410` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The cafe page is a bright, friendly template: a near-white ground, a heavy sans headline in dark slate, and the middle word set in sky blue (#0ea5e9). Orange (#f97316) is the only control colour, used for the nav button and the primary action. Food photos sit in rounded, slightly rotated cards, so the page reads as warm and casual rather than corporate.

**Mood:** bright, friendly, casual, food-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#0ea5e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#1e293b` · `#0ea5e9` · `#64748b` · `#f8fafc` · `#e0f2fe` · `#f1f5f9` · `#ea580c` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f97316;
  --color-accent-2: #0ea5e9;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f97316',
    accent2: '#0ea5e9',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans in dark slate, with the key word in sky blue (#0ea5e9)
- **Do:** Use orange (#f97316) only for the primary order button and the nav button
- **Do:** Show food in rounded photo cards, slightly rotated, on the hero's right side
- **Don't:** Don't use orange for headlines or large fills; it is for controls only
- **Don't:** Don't flatten the photo cards into rectangles with hard edges
- **Don't:** Don't add a second dark button colour; the slate stays for text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
