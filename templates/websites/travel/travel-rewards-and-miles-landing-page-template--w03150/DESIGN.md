# Design system — Travel Rewards & Miles Landing Page Template

`SN-W03150` · travel · light mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

Headings are navy (#0b203c) on a cream page ground (#fff9f6), with teal (#18a999) for supporting accents and orange (#ff8c32) for emphasis. The hero is a dark navy night photograph of a bridge in Paris, which sets the mood of the page.

**Mood:** modest, light, warm, clear, unverified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0b203c` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0b203c` | Primary action and highlights |
| Second accent | `#18a999` | Supporting highlights |

Palette by frequency of use: `#0b203c` · `#ffffff` · `#18a999` · `#ff8c32` · `#fff9f6` · `#050d1a` · `#ef4444` · `#fee2e2` · `#f87171` · `#fef2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo Black
- **Body:** Archivo Black
- **Loaded families:** Archivo Black, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#FF8C32] hover:bg-[#FF8C32]/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(255,140,50,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,140,50,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Footer (`footer`)
8. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fff9f6;
  --color-surface: #ffffff;
  --color-text: #0b203c;
  --color-border: #ffffff;
  --color-accent: #0b203c;
  --color-accent-2: #18a999;
  --font-display: "Archivo Black", sans-serif;
  --font-body: "Archivo Black", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff9f6',
    surface: '#ffffff',
    ink: '#0b203c',
    line: '#ffffff',
    accent: '#0b203c',
    accent2: '#18a999',
  },
  fontFamily: { display: ['Archivo Black'], sans: ['Archivo Black'] },
} }
```

## Do and don't

- **Do:** Set headings in navy (#0b203c) on the cream ground (#fff9f6)
- **Do:** Use teal (#18a999) for supporting accents and orange (#ff8c32) for one emphasis per section
- **Do:** Keep the hero a photograph with a dark navy overlay
- **Don't:** Don't use the navy photograph as a page ground; it is a hero image
- **Don't:** Don't set headings in Archivo Black at body sizes
- **Don't:** Don't put orange on large fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
