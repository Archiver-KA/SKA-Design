# Design system — Zion Tobacco E-commerce Landing Page Template

`SN-W01350` · ecommerce · light mode · Sinera Atlas theme `market` · language `pt-br`

## Direction

A near-black hero band with a large white uppercase Space Grotesk headline sits above a white product section, so the page reads as a dark poster inside a light shop. The headline's signature is one phrase split into green, yellow, orange and red letters, which the page does not repeat. Green (#15803d) is the brand accent for buttons and labels; red is kept for rare highlights.

**Mood:** bold, poster-like, high-contrast, retail

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#15803d` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#737373` · `#ffffff` · `#171717` · `#e5e5e5` · `#fafafa` · `#f5f5f5` · `#15803d` · `#16a34a` · `#a3a3a3` · `#dc2626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Syne
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Footer (`footer`)
6. Contact form (`contact-form`)
7. Modal / overlay (`modal-overlay`)
8. Call to action (`cta`)
9. Cart / checkout (`cart-checkout`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #15803d;
  --color-accent-2: #dc2626;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#15803d',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in Space Grotesk at heavy weight, uppercase, with one multicoloured phrase.
- **Do:** Use green (#15803d) for primary buttons and category labels only.
- **Do:** Keep product sections on white (#ffffff) with hairline #e5e5e5 borders.
- **Don't:** Don't repeat the multicolour headline treatment more than once per page.
- **Don't:** Don't use the red (#dc2626) for body text or large surfaces.
- **Don't:** Don't put the dark hero band inside the light product sections.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
