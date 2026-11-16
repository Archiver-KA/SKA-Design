# Design system — Motorsport Content SaaS Landing Page Template

`SN-W00552` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, confident SaaS hero on a near-black ground (#171717), with a two-line headline in white whose second line fades into a grey gradient. The primary action is a solid white button beside a dark outline secondary, and small pill chips below name the product's features. The hero has no colour, so the hierarchy comes from type weight and the white buttons.

**Mood:** confident, dark, direct, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#171717` · `#d4d4d4` · `#3b82f6` · `#262626` · `#e5e5e5` · `#000000` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black hover:bg-neutral-200 transition-colors px-4 py-2 rounded text-xs font-medium tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Team (`team`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. About (`about`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the second line in a grey gradient
- **Do:** Use a solid white button for the primary action and a dark outline for the secondary
- **Do:** Set feature chips as small pills with one small icon each
- **Don't:** Don't switch the hero to a white ground; it stays dark
- **Don't:** Don't add bright colour to the hero; it stays monochrome
- **Don't:** Don't use the blue accent (#3b82f6) on the hero buttons; they stay white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
