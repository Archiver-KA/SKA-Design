# Design system — Virtual Color Analysis Course Landing Page Template

`SN-W03558` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The Color Kitchen sits on a warm blush ground (#f2ddd3) with a large serif headline in soft charcoal. The subheadline is set in dusty mauve (#b07a8f) italic, which gives the page its gentle warmth. Sage green (#8faf9a) carries the primary button, with a white outlined button beside it. Small decorative colour swatches float at the top left, tying the design to its colour theme.

**Mood:** warm, gentle, crafted, soft, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2ddd3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#4a4a4a` | Secondary copy, captions |
| Border | `#8faf9a` | Hairlines, dividers, outlines |
| Accent | `#8faf9a` | Primary action and highlights |
| Second accent | `#b07a8f` | Supporting highlights |

Palette by frequency of use: `#4a4a4a` · `#8faf9a` · `#ffffff` · `#b07a8f` · `#f9f9f9` · `#f2ddd3` · `#f3f4f6` · `#7e9f8a` · `#e5e7eb` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Pinyon Script
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-[#8FAF9A] hover:bg-[#7E9F8A] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Services (`services`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2ddd3;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #4a4a4a;
  --color-border: #8faf9a;
  --color-accent: #8faf9a;
  --color-accent-2: #b07a8f;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2ddd3',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#4a4a4a',
    line: '#8faf9a',
    accent: '#8faf9a',
    accent2: '#b07a8f',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the subheadline in dusty mauve (#b07a8f) italic
- **Do:** Use sage (#8faf9a) for the primary button only
- **Do:** Keep the blush (#f2ddd3) ground across the whole hero
- **Don't:** Don't use pure white backgrounds for the hero
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't use saturated colours beside the blush and sage

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
