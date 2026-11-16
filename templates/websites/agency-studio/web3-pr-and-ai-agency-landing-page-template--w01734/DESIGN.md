# Design system — Web3 PR & AI Agency Landing Page Template

`SN-W01734` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark agency page on near-black [#0a0a0a] where the first phrase of the headline is set in orange [#ff6b35] and the rest in white heavy sans. The orange is a gradient-filled solid on the primary button, and the secondary button is a dark outline, so the colour leads straight to the action. Logos sit in grey placeholder bars below the buttons, which keeps the trust row quiet.

**Mood:** bold, dark, energetic, direct, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b35` | Primary action and highlights |

Palette by frequency of use: `#ff6b35` · `#ffffff` · `#9ca3af` · `#d1d5db` · `#0a0a0a` · `#6b7280` · `#0f0f0f` · `#ff4500` · `#1a1a1a` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Satoshi
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,107,53,0.2)]`, `shadow-[0_0_15px_rgba(255,107,53,0.5)]`, `shadow-[0_0_20px_rgba(255,107,53,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] text-white text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,107,53,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #ff6b35;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#ff6b35',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline phrase in orange (#ff6b35) and the rest in white heavy sans
- **Do:** Use a solid orange primary button with white text and a dark outlined secondary
- **Do:** Keep the trust logos as small grey blocks under the buttons
- **Don't:** Don't use orange for body copy
- **Don't:** Don't set the page on a light background
- **Don't:** Don't put the orange on large fills behind text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
