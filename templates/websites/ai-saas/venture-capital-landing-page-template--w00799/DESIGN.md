# Design system — Venture Capital Landing Page Template

`SN-W00799` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, bold venture page with a heavy sans headline in white and the word 'DOES' in lime (#c8ff00) as the one highlight. A small lime button and a dark data panel list portfolio companies with coloured tags, and the type uses hard capitals with tight tracking. The page is dark overall.

**Mood:** bold, dark, data-led, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#707070` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8ff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c8ff00` · `#707070` · `#141414` · `#0a0a0a` · `#262626` · `#f0f0ee` · `#050505` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist Mono, Geist, Syne
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[88vw]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="btn-shape-a bg-[#C8FF00] text-[#0a0a0a] font-bold px-6 py-2.5 text-sm inline-flex overflow-hidden h-10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Product grid (`product-grid`)
6. Team (`team`)
7. Testimonials (`testimonials`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #707070;
  --color-border: #ffffff;
  --color-accent: #c8ff00;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#707070',
    line: '#ffffff',
    accent: '#c8ff00',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in lime (#c8ff00)
- **Do:** Use the lime for the primary button and the status tags only
- **Do:** Set the headline in heavy capitals with tight tracking
- **Don't:** Don't use lime as a background behind text
- **Don't:** Don't set the page on a light ground
- **Don't:** Don't mix other hot colours in beside the lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
