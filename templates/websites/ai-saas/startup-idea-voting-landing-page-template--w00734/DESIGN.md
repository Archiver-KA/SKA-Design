# Design system — Startup Idea Voting Landing Page Template

`SN-W00734` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A playful, pale-mint hero with a deep maroon (#651414) headline set in four lines and a sage (#7bbcad) final phrase that reads like a second voice. A coral button sits in the nav, and a phone shows a pitch card with a stamped 'SLAP' label, so the swipe interaction is the illustration. Maroon and sage on mint is an unusual pairing, and it is what makes the page recognisable.

**Mood:** playful, bold, mint, witty, startup

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#651414` | Headings and primary copy |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#651414` | Primary action and highlights |
| Second accent | `#7bbcad` | Supporting highlights |

Palette by frequency of use: `#651414` · `#ffffff` · `#f3f4f6` · `#7bbcad` · `#e5e7eb` · `#000000` · `#f9fafb` · `#9ca3af` · `#dffbf3` · `#f0fdfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-soft`, `shadow-lg`
- **Content width:** `max-w-[1280px]`, `max-w-[580px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 bg-coral text-white rounded-full hover:bg-coral-hover transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Dashboard preview (`dashboard-preview`)
5. Bento grid (`bento-grid`)
6. Team (`team`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal, Swiper
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #651414;
  --color-border: #f3f4f6;
  --color-accent: #651414;
  --color-accent-2: #7bbcad;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#651414',
    line: '#f3f4f6',
    accent: '#651414',
    accent2: '#7bbcad',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in deep maroon (#651414) and the final phrase in sage (#7bbcad).
- **Do:** Use a stamped-label treatment, as on the pitch card, for verdicts.
- **Do:** Keep the coral nav button as the only saturated action.
- **Don't:** Don't set maroon as a background; it is for type.
- **Don't:** Don't use sage for body text on the mint ground; it is too low in contrast.
- **Don't:** Don't add colours beyond maroon, sage and mint.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
