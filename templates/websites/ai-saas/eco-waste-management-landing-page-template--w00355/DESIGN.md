# Design system — Eco-Waste Management Landing Page Template

`SN-W00355` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A light eco-services page built over a soft, blurred landscape photograph under a white header bar. Headlines are large Inter in deep navy (#1f3d5a), and the key phrase seconde vie is set in a blue-to-green gradient (#559cd5 to #51ae33). The badge and primary button pick up the same blue and green, so the page feels fresh and natural.

**Mood:** fresh, natural, clean, civic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d4e9ca` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f3d5a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#51ae33` | Primary action and highlights |
| Second accent | `#51ae33` | Supporting highlights |

Palette by frequency of use: `#1f3d5a` · `#ffffff` · `#559cd5` · `#51ae33` · `#d4e9ca` · `#15293c` · `#f9fafb` · `#4988bb` · `#45962b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 24px · body 12px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-[1200px]`, `max-w-[220px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mt-auto relative bg-[#1F3D5A] hover:bg-[#15293C] text-white px-7 py-3 rounded-full overflow-hidden inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider z-10 transition-colors border-gradient group/btn">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #d4e9ca;
  --color-surface: #ffffff;
  --color-text: #1f3d5a;
  --color-border: #ffffff;
  --color-accent: #51ae33;
  --color-accent-2: #51ae33;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d4e9ca',
    surface: '#ffffff',
    ink: '#1f3d5a',
    line: '#ffffff',
    accent: '#51ae33',
    accent2: '#51ae33',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in the blue-to-green gradient
- **Do:** Keep the photograph soft and blurred behind the hero copy
- **Do:** Use deep navy (#1f3d5a) for headlines and green (#51ae33) for the primary action
- **Don't:** Don't use flat pale green where the photograph should show
- **Don't:** Don't use more than two gradient colours in one line
- **Don't:** Don't set body copy in green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
