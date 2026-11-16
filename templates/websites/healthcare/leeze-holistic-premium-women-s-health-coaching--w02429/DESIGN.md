# Design system — Leeze Holistic | Premium Women's Health Coaching

`SN-W02429` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The women's health coaching page is a warm cream landing page with a large serif headline in deep wine (#7a3232), where the second and third lines are italic. A small tracked uppercase kicker sits above the headline, and the nav button is an outlined rectangle in tracked caps. Colour is held to the wine and the warm ground, so the page reads as considered and personal rather than clinical.

**Mood:** considered, warm, personal, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4a423c` | Headings and primary copy |
| Muted text | `#6b615a` | Secondary copy, captions |
| Border | `#4a423c` | Hairlines, dividers, outlines |
| Accent | `#7a3232` | Primary action and highlights |
| Second accent | `#e8e2d5` | Supporting highlights |

Palette by frequency of use: `#4a423c` · `#6b615a` · `#fdfbf7` · `#ffffff` · `#7a3232` · `#f4f0e6` · `#5a2424` · `#e8e2d5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, Outfit
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 20px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-maroon/20`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-10 py-5 bg-maroon text-white text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-3 hover:bg-[#5A2424] transition-all duration-700 hover:shadow-xl hover:shadow-maroon/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #4a423c;
  --color-muted: #6b615a;
  --color-border: #4a423c;
  --color-accent: #7a3232;
  --color-accent-2: #e8e2d5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#4a423c',
    muted: '#6b615a',
    line: '#4a423c',
    accent: '#7a3232',
    accent2: '#e8e2d5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in serif in deep wine (#7a3232), with the middle lines in italic
- **Do:** Use small tracked uppercase labels above headlines and in the navigation
- **Do:** Keep the cream ground (#fdfbf7) and use wine as the only accent
- **Don't:** Don't add a cool colour; the wine and cream are the scheme
- **Don't:** Don't set headlines in sans-serif; the serif is the voice
- **Don't:** Don't fill the nav button; it stays an outlined rectangle

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
