# Design system — AI Sales SaaS Landing Page Template

`SN-W00151` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Black product page with a white sans headline, where the word Autopilot is set in a high-contrast italic serif, a deliberate mix of two voices. Buttons are a white primary and a dark outlined secondary, and a thin blue glow line runs beneath the hero toward a product card.

**Mood:** confident, editorial, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#3b82f6` · `#d4d4d4` · `#262626` · `#000000` · `#a3a3a3` · `#60a5fa` · `#2563eb` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Agbalumo
- **Body:** Agbalumo
- **Loaded families:** Agbalumo, Manrope, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_10px_30px_rgba(0,0,0,0.5)]`, `shadow-[0_0_15px_rgba(37,99,235,0.4)]`, `shadow-[0_0_8px_#2563eb]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Schedule (`schedule-agenda`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #22c55e;
  --font-display: "Agbalumo", sans-serif;
  --font-body: "Agbalumo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Agbalumo'], sans: ['Agbalumo'] },
} }
```

## Do and don't

- **Do:** Pair a white sans headline with one italic serif word for emphasis
- **Do:** Use white for the primary button and a dark outline for the secondary
- **Do:** Place a thin blue glow line beneath the hero as the only colour
- **Don't:** Don't set more than one word in the italic serif per headline
- **Don't:** Don't use blue for large fills
- **Don't:** Don't put light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
