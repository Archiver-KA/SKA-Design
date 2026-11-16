# Design system — Luxury Real Estate Landing Page Template

`SN-W03296` · real-estate · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A serif headline in white sits over a full-bleed interior photograph, with a dark navy bar (#1a1a2e) across the top carrying the wordmark, links and a gold pill button. The gold (#c5a55a) marks the main call to action and the search button, so it is the single signal on the page. Cormorant Garamond gives the tone a classical, residential feel.

**Mood:** classical, residential, warm, composed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f6f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2d2d` | Headings and primary copy |
| Border | `#e8e4df` | Hairlines, dividers, outlines |
| Accent | `#c5a55a` | Primary action and highlights |
| Second accent | `#1a1a2e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a1a2e` · `#c5a55a` · `#2d2d2d` · `#e8e4df` · `#000000` · `#f8f6f0` · `#d2b673`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-black/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden rounded-full bg-[#C5A55A] px-5 py-3 text-sm font-medium text-[#1A1A2E] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d2b673] sm:inline-flex">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f6f0;
  --color-surface: #ffffff;
  --color-text: #2d2d2d;
  --color-border: #e8e4df;
  --color-accent: #c5a55a;
  --color-accent-2: #1a1a2e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f6f0',
    surface: '#ffffff',
    ink: '#2d2d2d',
    line: '#e8e4df',
    accent: '#c5a55a',
    accent2: '#1a1a2e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, in white over photography.
- **Do:** Use the gold (#c5a55a) only for the main button and the search action.
- **Do:** Keep the top bar in navy (#1a1a2e) with white links and the gold call to action.
- **Don't:** Don't use gold for body text or headings on the cream background.
- **Don't:** Don't place the headline over bright photograph areas without a dark overlay.
- **Don't:** Don't use the navy bar for content sections; it is a header device.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
