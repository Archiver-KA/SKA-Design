# Design system — Creative web designer Portfolio Template

`SN-W01919` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The opening screen is plain white with a single dark red wordmark centred in a small Inter size. The ground is white (#ffffff), with deep maroon (#5c1616) as the one ink colour and yellow (#fcd34d) held back for highlights.

**Mood:** minimal, austere, editorial, light, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#5c1616` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#5c1616` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f3efea` · `#161616` · `#5c1616` · `#fcd34d` · `#000000` · `#171717` · `#eae5de` · `#450a0a` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_20px_40px_-10px_rgba(92,22,22,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-5`, `gap-1`

**Primary button**

```html
<a class="text-xs font-normal uppercase tracking-widest px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-[#5C1616] transition-colors backdrop-blur-sm bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Sign-in form (`auth-form`)
6. Case studies (`case-studies`)
7. Services (`services`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #5c1616;
  --color-border: #ffffff;
  --color-accent: #5c1616;
  --color-accent-2: #fcd34d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#5c1616',
    line: '#ffffff',
    accent: '#5c1616',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in Inter, dark maroon (#5c1616), centred on white
- **Do:** Use yellow (#fcd34d) only as a single accent per section
- **Do:** Keep the first screen empty apart from the wordmark
- **Don't:** Don't place the wordmark on a tinted or dark background
- **Don't:** Don't use more than one accent colour on a screen
- **Don't:** Don't add decoration to the intro; the blank field is part of the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
