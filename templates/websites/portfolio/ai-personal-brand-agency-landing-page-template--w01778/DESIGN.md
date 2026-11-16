# Design system — AI Personal Brand Agency Landing Page Template

`SN-W01778` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a dark serif headline and an orange italic second line, set large and left-aligned. The hero's product card is a dark rounded panel with a white quote and an orange badge, and the orange primary button leads the actions. Orange carries the accent throughout, while the cream ground keeps the page calm and editorial.

**Mood:** warm, editorial, calm, orange-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf7f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#0a0a0a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#f97316` · `#ffffff` · `#9ca3af` · `#faf7f2` · `#6b7280` · `#4b5563` · `#374151` · `#fb923c` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Mono, DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_0_15px_rgba(249,115,22,0.3)]`, `shadow-[0_20px_40px_rgba(249,115,22,0.08)]`, `shadow-[0_0_20px_rgba(249,115,22,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F97316] text-[#0a0a0a] text-sm font-medium hover:bg-[#FB923C] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf7f2;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #6b7280;
  --color-border: #0a0a0a;
  --color-accent: #f97316;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf7f2',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#6b7280',
    line: '#0a0a0a',
    accent: '#f97316',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with the second line in italic orange (#f97316).
- **Do:** Use the orange (#f97316) for the primary button and the italic highlight only.
- **Do:** Keep the cream background (#faf7f2) under the hero and the product card dark.
- **Don't:** Don't set body copy in the serif; DM Sans carries the body.
- **Don't:** Don't add a second accent colour beside the orange.
- **Don't:** Don't use a pure white page; the warm cream ground is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
