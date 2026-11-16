# Design system — Subscriber Intelligence Landing Page Template

`SN-W00746` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A full-bleed, saturated yellow hero (#facc15) with a huge, tight white Poppins word, CLARITY., set on one line with a full stop. Content sits in a pale yellow card on the lower right in near-black text, and the black pill button in the nav is the only dark control. One flat colour with no photography gives the page a bold, poster-like quality.

**Mood:** bold, poster-like, warm, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#facc15` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#f97316` · `#facc15` · `#fef08a` · `#eab308` · `#171717` · `#404040` · `#a3a3a3` · `#fefce8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 18px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors rounded-full px-8 py-4 text-lg font-normal tracking-tight whitespace-nowrap shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Logo cloud (`logo-cloud`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #facc15;
  --color-surface: #ffffff;
  --color-text: #262626;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#facc15',
    surface: '#ffffff',
    ink: '#262626',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Poppins at very large size, white, with tight tracking
- **Do:** Keep the yellow (#facc15) as a flat full-bleed ground with no photography
- **Do:** Keep body copy near-black (#262626) on the pale yellow cards
- **Don't:** Don't use white body text on the yellow ground; white is for the large headline only
- **Don't:** Don't add a second brand colour to the hero
- **Don't:** Don't use the black nav button for body links

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
