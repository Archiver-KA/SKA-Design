# Design system — Influencer Marketing Landing Page Template

`SN-W01600` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A plain, dark marketing page for a talent agency. A near-black ground (#000000) carries a large, bold sans headline in white, 'We Are Match Makers', with the word 'Are' ghosted almost to invisibility. The hero is left-aligned with a short paragraph and two pills, one solid white and one outlined. Colour is almost absent, so the page rests on type scale and a clean navigation bar.

**Mood:** plain, bold, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#34d399` · `#38bdf8` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 12px
- **Weights in use:** semibold, extrabold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium transition bg-white text-black hover:bg-white/90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Services (`services`)
6. Stats band (`stats`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans at large size, left-aligned
- **Do:** Use a solid white pill and an outlined pill side by side for primary and secondary actions
- **Do:** Keep the background black (#000000) and the headline white
- **Don't:** Don't rely on accent colours; there are almost none
- **Don't:** Don't centre the hero copy; keep it left-aligned
- **Don't:** Don't add decorative imagery over the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
