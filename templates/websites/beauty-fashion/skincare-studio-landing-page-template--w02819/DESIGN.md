# Design system — Skincare Studio Landing Page Template

`SN-W02819` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm skincare studio page on warm off-white (#fdfcf8), with a serif wordmark and small, widely tracked uppercase navigation. The taupe booking button in the navigation is the page's only colour, and a dark pill floating in the lower-right corner gives the strongest contrast on screen. The headline is in Cormorant Garamond.

**Mood:** calm, soft, understated, clinical-warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#bcaaa4` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#bcaaa4` · `#e7e5e4` · `#57534e` · `#a8a29e` · `#292524` · `#78716c` · `#d6d3d1` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="bg-[#BCAAA4] text-white px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#A18E87] transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Call to action (`cta`)
6. Booking form (`booking`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #bcaaa4;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#bcaaa4',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on warm off-white (#fdfcf8) with near-black (#292524) text
- **Do:** Use the taupe (#bcaaa4) for the navigation booking button
- **Do:** Set the headline in Cormorant Garamond and the navigation in small uppercase
- **Don't:** Don't rely on the floating dark pill as the only booking route
- **Don't:** Don't set the hero in a bright colour; the ground is near-white
- **Don't:** Don't add gradients; the page relies on flat taupe and cream

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
