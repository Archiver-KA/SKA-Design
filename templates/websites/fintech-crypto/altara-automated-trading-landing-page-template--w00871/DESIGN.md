# Design system — Altara Automated Trading Landing Page Template

`SN-W00871` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#1b1b2f) under a white navigation bar, with a two-part headline where the first word is white and the rest is crimson (#cf1645). Crimson is the single accent, used on the headline, the register button and the signup CTA. A tall crimson tab on the right edge is the one decorative element. The hero stacks copy above an email field and a solid button in one row.

**Mood:** bold, promotional, red-accented, direct, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1b1b2f` | Page ground |
| Surface | `#1b1b2f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1b1b2f` | Secondary copy, captions |
| Border | `#e6e7e8` | Hairlines, dividers, outlines |
| Accent | `#cf1645` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#cf1645` · `#ffffff` · `#e6e7e8` · `#1b1b2f` · `#808285` · `#fbbf24` · `#f9fafb` · `#f3f4f6` · `#000000` · `#a01135`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Montserrat, Outfit, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-6xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-[#cf1645] text-white px-5 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium hover:bg-[#a01135] transition shadow-lg shadow-[#cf1645]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1b1b2f;
  --color-surface: #1b1b2f;
  --color-text: #ffffff;
  --color-muted: #1b1b2f;
  --color-border: #e6e7e8;
  --color-accent: #cf1645;
  --color-accent-2: #fbbf24;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1b1b2f',
    surface: '#1b1b2f',
    ink: '#ffffff',
    muted: '#1b1b2f',
    line: '#e6e7e8',
    accent: '#cf1645',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in crimson (#cf1645) against the navy hero
- **Do:** Use crimson only for the headline accent, the register button and the main CTA
- **Do:** Pair the email field with a solid crimson button in one row
- **Don't:** Don't use the amber (#fbbf24) as an accent
- **Don't:** Don't set crimson body text on the navy ground; the contrast is too low
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
