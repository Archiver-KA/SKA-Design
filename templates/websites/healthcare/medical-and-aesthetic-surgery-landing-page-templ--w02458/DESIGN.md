# Design system — Medical and Aesthetic Surgery Landing Page Template

`SN-W02458` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale rose-taupe hero with a charcoal serif title and a short description, with a portrait on the right half. Two buttons sit side by side: a solid brown one and an outlined one that reads as secondary. The white section below carries a large serif heading, and the page keeps to brown, taupe and charcoal.

**Mood:** quiet, warm, polished, soft, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#e7e5e4` · `#9a7b60` · `#44403c` · `#78716c` · `#f8fafc` · `#dfd6d3` · `#332233` · `#323232`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-stone-200/50`, `shadow-xl`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-4`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #44403c;
  --color-border: #ad8c6f;
  --color-accent: #ad8c6f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#44403c',
    line: '#ad8c6f',
    accent: '#ad8c6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair one solid brown button with one outlined button in the hero
- **Do:** Set section headings in Playfair Display at large size, in charcoal
- **Do:** Keep the portrait on the right half of the hero
- **Don't:** Don't introduce a blue or green accent
- **Don't:** Don't place the outlined button over a photograph
- **Don't:** Don't use the brown as a section background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
