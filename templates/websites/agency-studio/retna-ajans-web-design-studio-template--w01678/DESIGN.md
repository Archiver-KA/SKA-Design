# Design system — Retna Ajans Web Design Studio Template

`SN-W01678` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

Warm off-white page with heavy near-black headlines and indigo (#4338ca) on the highlighted phrase and the primary button. A large blurred glow sits behind the hero, and the cards below stay white with hairline borders. The result is soft and editorial, with colour kept in the glow rather than in the type.

**Mood:** soft, editorial, warm, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4338ca` | Primary action and highlights |
| Second accent | `#0b5a75` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#171717` · `#d4d4d4` · `#737373` · `#a3a3a3` · `#faf9f7` · `#525252` · `#f5f5f5` · `#4338ca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 14px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-[0_1px_2px_rgba(0,0,0,0.05),0_20px_44px_-18px_rgba(15,20,60,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-[#4338CA] hover:bg-[#3730A3] transition-colors rounded-full px-4 sm:px-5 py-2.5 whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. FAQ (`faq`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f7;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4338ca;
  --color-accent-2: #0b5a75;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f7',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4338ca',
    accent2: '#0b5a75',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on the warm off-white ground (#faf9f7) with a soft glow behind the content.
- **Do:** Set the highlighted headline phrase and the primary button in indigo (#4338ca).
- **Do:** Use white cards with hairline borders for sections below the hero.
- **Don't:** Don't use pure black fills for the hero or large sections.
- **Don't:** Don't add hard drop shadows to cards.
- **Don't:** Don't add a second saturated colour to the hero; the teal accent2 does not show there.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
