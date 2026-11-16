# Design system — Tax Relief Lead Generation Landing Page Template

`SN-W01046` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm off-white page (#fdf6f1) has a very large bold black headline, set tight and left-aligned, and a pair of heavy black rules that split the hero like a printed form. Green (#16a34a) appears only on small check icons, and the primary action is a black button in the corner. The look is editorial and direct, with type and rules doing the work.

**Mood:** direct, editorial, warm, plainspoken

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdf6f1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#111111` · `#9ca3af` · `#6b7280` · `#fdf6f1` · `#4b5563` · `#374151` · `#050505` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold text-white bg-[#050505] rounded-full hover:bg-[#222] transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Call to action (`cta`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdf6f1;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #16a34a;
  --color-accent-2: #f87171;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdf6f1',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#6b7280',
    line: '#000000',
    accent: '#16a34a',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the warm off-white (#fdf6f1) as the ground and near-black (#111111) for headlines
- **Do:** Separate sections with heavy black rules (#000000), like lines on a printed form
- **Do:** Use green (#16a34a) only for check marks and qualification status
- **Don't:** Don't add imagery to the hero; the page is type and rules only
- **Don't:** Don't use the coral (#f87171) in the hero.
- **Don't:** Don't make the primary button a fully round pill; it keeps modest corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
