# Design system — Coffee Shop Landing Page Template

`SN-W01132` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A near-black specialty coffee page has very large white sans-serif headlines stacked on the left. The middle word is set in italic in a deep red (#7d1b18), which is the page's only colour. The navigation is small and spaced, and the product panel on the right is a dark card, so the page reads as dramatic and restrained rather than warm.

**Mood:** dramatic, restrained, dark, brand-forward

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7d1b18` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#7d1b18` · `#737373` · `#262626` · `#e5e5e5` · `#a3a3a3` · `#050505` · `#000000` · `#0a0a0a` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#7d1b18] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Product grid (`product-grid`)
6. Newsletter signup (`newsletter`)
7. Services (`services`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #7d1b18;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#7d1b18',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, with the middle word in italic
- **Do:** Use the deep red (#7d1b18) only for the italic headline word and small nav accents
- **Do:** Keep panels and the product card on the near-black ground with no bright fills
- **Don't:** Don't use the bright orange (#fc8019) as an accent.
- **Don't:** Don't set body text in the deep red; it is too dark on black
- **Don't:** Don't put light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
