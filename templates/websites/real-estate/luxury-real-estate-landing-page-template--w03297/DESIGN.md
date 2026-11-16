# Design system — Luxury Real Estate Landing Page Template

`SN-W03297` · real-estate · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A calm, landscape-led hero: a misty blue mountain valley fills the first screen, and a centred Cormorant Garamond headline sits in white above it. A small tracked uppercase kicker sits over the headline, and the gold (#c5a96a) appears only on the wordmark and the nav call to action. The layout is symmetrical and centred, with the search bar anchored along the bottom edge.

**Mood:** calm, classical, landscape-led, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf8f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1b2a4a` | Headings and primary copy |
| Muted text | `#6f7684` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a96a` | Primary action and highlights |
| Second accent | `#1b2a4a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c5a96a` · `#1b2a4a` · `#6f7684` · `#e9e1d7` · `#faf8f5` · `#737373` · `#171717` · `#000000` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Cormorant Infant, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 16px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.75rem]` (1.75rem), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-1`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="rounded-full border border-[#C5A96A] bg-[#C5A96A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf8f5;
  --color-surface: #ffffff;
  --color-text: #1b2a4a;
  --color-muted: #6f7684;
  --color-border: #ffffff;
  --color-accent: #c5a96a;
  --color-accent-2: #1b2a4a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf8f5',
    surface: '#ffffff',
    ink: '#1b2a4a',
    muted: '#6f7684',
    line: '#ffffff',
    accent: '#c5a96a',
    accent2: '#1b2a4a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Centre the headline in Cormorant Garamond, sentence case, in white over the landscape.
- **Do:** Set the kicker above the headline in small tracked uppercase.
- **Do:** Use the gold (#c5a96a) only for the wordmark and the nav call to action.
- **Don't:** Don't set the headline in dark navy over the sky; it needs white.
- **Don't:** Don't enlarge the kicker beyond the size of the navigation.
- **Don't:** Don't add a second accent colour; the gold is the only one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
