# Design system — Wisuno Trading Bonus Landing Page Template

`SN-W01068` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light promotional page where the offer is the headline: 50% First-Time Deposit Bonus, with the percentage in orange (#ea580c) and the rest in near-black. A solid orange button sits under the body copy, with a short green-tinted pill marking the limited offer above the headline. Against a white ground and soft phone mockups, the orange does all the signalling, and nothing else competes with it.

**Mood:** promotional, bright, direct, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#171717` · `#ea580c` · `#a3a3a3` · `#737373` · `#fed7aa` · `#f5f5f5` · `#f97316` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-card-hover`, `shadow-card`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-all shadow-sm border border-transparent hover:shadow-orange-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
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
  --color-accent: #ea580c;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    accent: '#ea580c',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the offer percentage in orange (#ea580c) and the rest of the headline in near-black (#171717)
- **Do:** Use one solid orange button for the primary action, with a short terms note beside it
- **Do:** Keep the ground white (#ffffff) and use the phone mockups as the only imagery
- **Don't:** Don't use orange for body text; it signals the offer and the action only
- **Don't:** Don't add more than one promotional pill above the headline
- **Don't:** Don't drop the terms note next to the button; the offer needs it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
