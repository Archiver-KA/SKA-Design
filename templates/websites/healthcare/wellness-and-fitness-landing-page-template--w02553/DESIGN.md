# Design system — Wellness & Fitness Landing Page Template

`SN-W02553` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A soft, light-toned coaching page: a cream ground (#fdfaf5) with a deep indigo (#1e1848) serif headline and a muted purple (#7a58a8) button, closer to a boutique brochure than a dark gym. A faint glow sits behind the centred hero, and the copy is short, with one purple call to action per view. The stance is gentle and calm, and the serif headline carries the emphasis.

**Mood:** gentle, boutique, calm, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfaf5` | Page ground |
| Text | `#1e1848` | Headings and primary copy |
| Muted text | `#fdfaf5` | Secondary copy, captions |
| Accent | `#7a58a8` | Primary action and highlights |
| Second accent | `#ede6d5` | Supporting highlights |

Palette by frequency of use: `#1e1848` · `#4a4660` · `#7a58a8` · `#fdfaf5` · `#ede6d5` · `#ddd4c0` · `#ffffff` · `#6a4898` · `#f87171` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Mulish
- **Body:** Mulish
- **Loaded families:** Caveat, Fraunces, Mulish
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-sm` (2px)
- **Shadows:** `shadow-soft`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#7A58A8] hover:bg-[#6A4898] text-[#FFFFFF] font-medium rounded-full px-6 py-2.5 transition-colors duration-300 ease-out focus-ring text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfaf5;
  --color-text: #1e1848;
  --color-muted: #fdfaf5;
  --color-accent: #7a58a8;
  --color-accent-2: #ede6d5;
  --font-display: "Mulish", sans-serif;
  --font-body: "Mulish", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfaf5',
    ink: '#1e1848',
    muted: '#fdfaf5',
    accent: '#7a58a8',
    accent2: '#ede6d5',
  },
  fontFamily: { display: ['Mulish'], sans: ['Mulish'] },
} }
```

## Do and don't

- **Do:** Use the muted purple (#7a58a8) for the primary button and the navigation call to action
- **Do:** Set headlines in deep indigo (#1e1848) in the serif
- **Do:** Keep the hero centred, with a short paragraph and one button below it
- **Don't:** Don't set the page on a dark ground; keep the cream.
- **Don't:** Don't use the purple as a page background
- **Don't:** Don't add more than one purple button to a view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
