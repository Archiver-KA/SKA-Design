# Design system — Founder MVP Validation Landing Page Template

`SN-W00401` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale mint page with a deep maroon headline set in a heavy grotesk, its closing phrase picked out in sage teal (#7bbcad). The product is a tall phone mockup on the right showing a card with a bold stamp, so the page feels direct and slightly playful. Maroon carries the authority, sage carries the softness, and the contrast of the two colours is the identity.

**Mood:** direct, playful, bold, mint, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dffbf3` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#651414` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#651414` | Primary action and highlights |
| Second accent | `#7bbcad` | Supporting highlights |

Palette by frequency of use: `#651414` · `#ffffff` · `#f3f4f6` · `#dffbf3` · `#f9fafb` · `#f0fdfa` · `#9ca3af` · `#7bbcad` · `#e96c6c` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-soft`, `shadow-slap`, `shadow-lg`
- **Content width:** `max-w-[1280px]`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 bg-coral text-white rounded-full hover:bg-coral-hover transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #dffbf3;
  --color-surface: #f9fafb;
  --color-text: #651414;
  --color-muted: #6b7280;
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
    background: '#dffbf3',
    surface: '#f9fafb',
    ink: '#651414',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#651414',
    accent2: '#7bbcad',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans at large size, in maroon (#651414), with the last phrase in sage teal (#7bbcad).
- **Do:** Keep the background pale mint (#dffbf3) and use white for cards.
- **Do:** Show the product as a phone mockup on the right side of the hero.
- **Don't:** Don't use the sage teal for body copy; it is for the closing phrase only.
- **Don't:** Don't introduce a blue or purple accent; the page is maroon and sage.
- **Don't:** Don't place the phone mockup over the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
