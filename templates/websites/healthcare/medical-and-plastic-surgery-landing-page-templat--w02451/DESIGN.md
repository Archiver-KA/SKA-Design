# Design system — Medical & Plastic Surgery Landing Page Template

`SN-W02451` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale rose-taupe hero with a charcoal serif headline on the left and a photograph of a woman in profile on the right. Brown buttons and tan labels are the only colour, and the section below drops to near-white. The content is a short service and price intro, with the brown button as the main call to action.

**Mood:** quiet, editorial, warm, clinical-soft, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dfd6d3` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#f8fafc` · `#292524` · `#44403c` · `#57534e` · `#000000` · `#dfd6d3` · `#332233` · `#9a7b60`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 16px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#ad8c6f]/40`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-4`, `gap-x-6`, `gap-x-4`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #dfd6d3;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #292524;
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
    background: '#dfd6d3',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#292524',
    line: '#ad8c6f',
    accent: '#ad8c6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the brown (#ad8c6f) only for solid buttons
- **Do:** Set page titles in Playfair Display, in charcoal, at large size
- **Do:** Put the hero photograph on the right and keep the text column left-aligned
- **Don't:** Don't use the brown as a section background; sections stay light
- **Don't:** Don't introduce a second accent; the page uses one brown
- **Don't:** Don't set the hero intro in light grey; keep it charcoal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
