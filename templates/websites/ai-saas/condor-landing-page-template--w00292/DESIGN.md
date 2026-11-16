# Design system — Condor Landing Page Template

`SN-W00292` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, light landing page where a large lime [#ccf32f] panel holds the hero copy and a phone mockup, set against a white page. The headline is tight black sans-serif, and the lime is the single loud colour, used as the hero field and the highlight. Plus Jakarta Sans at large sizes gives a modern, confident voice that suits the Portuguese copy.

**Mood:** bold, modern, fresh, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ccf32f` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ccf32f` · `#737373` · `#a3a3a3` · `#262626` · `#e5e5e5` · `#404040` · `#f5f5f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex-1 bg-[#ccf32f] hover:bg-[#bce325] text-black font-medium py-3 rounded-xl transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #000000;
  --color-accent: #ccf32f;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
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
    line: '#000000',
    accent: '#ccf32f',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccf32f) as the hero panel and the highlight colour only
- **Do:** Set headlines in Plus Jakarta Sans, black on lime or white
- **Do:** Show the product as a phone mockup on the lime field
- **Don't:** Don't use lime for text on white
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't use a dark page ground; the design is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
