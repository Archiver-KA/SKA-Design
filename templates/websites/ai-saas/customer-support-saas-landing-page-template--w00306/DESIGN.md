# Design system — Customer Support SaaS Landing Page Template

`SN-W00306` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, warm page with an oversized dark plum hero panel [#272125] that holds the headline and a light product preview. The headline is set in Instrument Serif at large size, giving an editorial tone, while the inbox preview and all labels are in Inter. The contrast between the dark panel and the light page is the main structural device.

**Mood:** editorial, warm, calm, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f6f8` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f8f6f8` | Headings and primary copy |
| Muted text | `#7a6470` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#272125` · `#000000` · `#ffffff` · `#efecee` · `#f8f6f8` · `#f0edef` · `#e5e0e3` · `#dcd6d9` · `#7a6470` · `#2c2428`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 16px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-[#272125] text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-[#272125]/90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Team (`team`)
6. FAQ (`faq`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f6f8;
  --color-surface: #000000;
  --color-text: #f8f6f8;
  --color-muted: #7a6470;
  --color-border: #000000;
  --color-accent: #3b82f6;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f6f8',
    surface: '#000000',
    ink: '#f8f6f8',
    muted: '#7a6470',
    line: '#000000',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Instrument Serif, large and tight, on the dark panel
- **Do:** Keep the product preview as a light card inside the dark panel
- **Do:** Use Inter for all labels, body copy and buttons
- **Don't:** Don't use blue (#3b82f6) as a large fill; it is for small links only
- **Don't:** Don't remove the dark hero panel; it is the page's main structure
- **Don't:** Don't use Instrument Serif for body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
