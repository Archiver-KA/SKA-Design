# Design system — Salon Booking SaaS Landing Page Template

`SN-W02813` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A calm, trust-led SaaS hero on a warm cream ground (#fdfbf7), with a heavy display headline in dark brown-black (#2a241e). The only strong colour is a dark forest-green pill (#2d5a27), which signals a dependable business tool rather than a tech product. The layout is centred, with short copy, one primary action, a small grey line under it and a small uppercase product tag above the title.

**Mood:** calm, trustworthy, warm, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#2a241e` | Cards, panels, raised areas |
| Text | `#2a241e` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#2d5a27` | Primary action and highlights |
| Second accent | `#ebe5da` | Supporting highlights |

Palette by frequency of use: `#2d5a27` · `#5d554a` · `#ebe5da` · `#2a241e` · `#ffffff` · `#fdfbf7` · `#f2efe9` · `#c5a059` · `#9ca3af` · `#fef2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[#2D5A27]/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium bg-[#2D5A27] hover:bg-[#23461F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5A27] transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #2a241e;
  --color-text: #2a241e;
  --color-muted: #9ca3af;
  --color-accent: #2d5a27;
  --color-accent-2: #ebe5da;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#2a241e',
    ink: '#2a241e',
    muted: '#9ca3af',
    accent: '#2d5a27',
    accent2: '#ebe5da',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground warm cream (#fdfbf7) with dark brown-black text (#2a241e)
- **Do:** Use the forest green (#2d5a27) for the primary button only
- **Do:** Centre hero copy with one primary action and one short line of grey text
- **Don't:** Don't use a dark page ground; the page is cream.
- **Don't:** Don't add a second saturated colour; gold (#c5a059) stays out of the hero
- **Don't:** Don't use the green on large background areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
