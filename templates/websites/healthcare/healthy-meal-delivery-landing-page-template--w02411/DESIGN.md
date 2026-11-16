# Design system — Healthy Meal Delivery Landing Page Template

`SN-W02411` · healthcare · light mode · Sinera Atlas theme `route` · language `en`

## Direction

PRELO's hero is an editorial, warm-neutral page: a cream ground, a large serif headline in near-black (#1a0f0a) whose second line is set in italic chocolate brown (#3d2314). The primary button uses the same deep brown, so the page stays within one colour family. A short rule and a small italic label above the headline give it a magazine-opener feel.

**Mood:** editorial, warm, refined, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#1a0f0a` | Headings and primary copy |
| Accent | `#3d2314` | Primary action and highlights |

Palette by frequency of use: `#3d2314` · `#1a0f0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Source Serif 4
- **Loaded families:** Cormorant Garamond, Source Serif 4
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="relative p-2 text-coffee-800 hover:bg-coffee-800/5 rounded-full transition-colors group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Menu list (`menu-list`)
6. Pricing (`pricing`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #1a0f0a;
  --color-accent: #3d2314;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Source Serif 4", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#1a0f0a',
    accent: '#3d2314',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Source Serif 4'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size, with the second line in italic chocolate brown (#3d2314)
- **Do:** Use deep brown (#3d2314) for the primary button and keep it the only filled control
- **Do:** Place a short rule and an italic label above the headline
- **Don't:** Don't introduce a cool accent; the page is brown on cream
- **Don't:** Don't set the headline in a heavy sans; the serif is the voice
- **Don't:** Don't use pure white panels with heavy shadows; keep the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
