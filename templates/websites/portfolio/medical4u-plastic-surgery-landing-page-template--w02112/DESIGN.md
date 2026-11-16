# Design system — Medical4U Plastic Surgery Landing Page Template

`SN-W02112` · portfolio · light mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A soft clinical page with a pale taupe ground [#d8cac2], a dark brown serif headline and a short paragraph beneath it. A photograph of a woman's profile sits on the right and gives the page its warmth, and a taupe [#ad8c6f] fills the nav call to action. The palette stays in muted neutrals, so the page feels calm and medical without looking sterile.

**Mood:** calm, soft, warm, clinical, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d8cac2` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
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
  --color-text: #292524;
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
    ink: '#292524',
    muted: '#44403c',
    line: '#ad8c6f',
    accent: '#ad8c6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground in pale taupe (#d8cac2) with the photograph on the right.
- **Do:** Set the headline in dark brown serif (#292524) with a short paragraph below.
- **Do:** Use the taupe (#ad8c6f) only for the nav call to action and the primary button.
- **Don't:** Don't introduce saturated colour; the palette stays in neutrals.
- **Don't:** Don't set body copy in the serif face.
- **Don't:** Don't place the taupe button over the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
