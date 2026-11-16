# Design system — Student Shuttle Service Landing Page Template

`SN-W03541` · education · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

Grove Shuttle is a dark, premium page built on black, with a gold primary button and a bold, tightly set sans-serif headline. The hero pairs the copy with a stylised route map on a dark panel, drawn as a dashed gold path between labelled stops. Gold is kept for the main actions and the route, and the rest of the interface stays in neutral greys. The result is controlled and nocturnal.

**Mood:** premium, nocturnal, high-contrast, controlled, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#020202` · `#262626` · `#d4d4d4` · `#404040` · `#525252` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Michroma
- **Body:** Geist
- **Loaded families:** Geist, Manrope, Michroma
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,175,55,0.2)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex h-full min-h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-brand-900/20 hover:border-brand-500/30 hover:text-brand-200">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Booking form (`booking`)
4. Hero (`hero`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Services (`services`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #22c55e;
  --color-accent-2: #ef4444;
  --font-display: "Michroma", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#22c55e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Michroma'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the gold tone only for primary actions and the route line
- **Do:** Keep the hero on black with the route map as the only illustration
- **Do:** Set headlines in tight, bold sans-serif in white
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't introduce a second accent colour
- **Don't:** Don't add decorative patterns behind the route map

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
