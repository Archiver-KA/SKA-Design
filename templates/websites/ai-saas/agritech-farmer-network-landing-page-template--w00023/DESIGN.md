# Design system — Agritech Farmer Network Landing Page Template

`SN-W00023` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light page with a near-white ground and dark slate headline text. Deep green (#007d53) carries the brand on the second headline line and the primary button, and pale orange chart bars add a warm note inside the dashboard card. Plus Jakarta Sans at large size gives a friendly, open tone.

**Mood:** friendly, open, fresh, community-minded, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#0f172a` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#007d53` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#007d53` · `#0f172a` · `#f1f5f9` · `#475569` · `#64748b` · `#f8fafc` · `#334155` · `#e2e8f0` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-green-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 bg-[#007D53] hover:bg-[#006040] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm shadow-green-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #0f172a;
  --color-border: #f1f5f9;
  --color-accent: #007d53;
  --color-accent-2: #ea580c;
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
    ink: '#0f172a',
    muted: '#0f172a',
    line: '#f1f5f9',
    accent: '#007d53',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Plus Jakarta Sans and colour the second headline line in #007d53
- **Do:** Use the green (#007d53) for the primary button and highlight words only
- **Do:** Show the product as a white rounded card floating over the hero
- **Don't:** Don't switch the page to a dark background; the ground is light
- **Don't:** Don't use the orange as a large fill; it appears only as small chart accents
- **Don't:** Don't replace the Plus Jakarta Sans headings with a serif or display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
