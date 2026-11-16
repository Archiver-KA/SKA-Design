# Design system — Medical and Aesthetic Surgery Landing Page Template

`SN-W02457` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale rose-taupe hero with a charcoal serif headline and a brief intro, and a photo of a woman in profile on the right half. The brown solid button is the only colour, with an outlined secondary button beside it on the same baseline. The copy is plain and direct, and the photograph carries the emotional weight.

**Mood:** quiet, plain, warm, clinical-soft, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d8cac2` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#44403c` · `#d8cac2` · `#57534e` · `#292524` · `#332233` · `#f8fafc` · `#e7e5e4` · `#dfd6d3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-[#ad8c6f]/30`, `shadow-sm`
- **Content width:** `max-w-[230px]`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-3`, `gap-x-4`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Contact form (`contact-form`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #d8cac2;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #44403c;
  --color-border: #ad8c6f;
  --color-accent: #ad8c6f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d8cac2',
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

- **Do:** Keep the hero photograph on the right half, with headline and intro on the left
- **Do:** Use the brown (#ad8c6f) for the single booking button
- **Do:** Set the headline in Playfair Display, charcoal, at a moderate size
- **Don't:** Don't add decorative blobs; the photograph is the only image
- **Don't:** Don't set the intro in brown; keep it charcoal
- **Don't:** Don't place a second solid button beside the booking button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
