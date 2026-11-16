# Design system — Medical4U Plastic Surgery Clinic Template

`SN-W02472` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale beige hero with a charcoal serif headline and a short description, with a portrait on the right half. The light tan button is the single colour, and the specialist overview below opens with a large serif heading on a light ground. The palette is beige, tan and charcoal, and the page stays quiet and editorial.

**Mood:** quiet, editorial, warm, soft, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ded5cc` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#ded5cc` | Hairlines, dividers, outlines |
| Accent | `#c6aa91` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#f8fafc` · `#292524` · `#ded5cc` · `#c6aa91` · `#d6d3d1` · `#f5f5f4` · `#9a7b60` · `#dfd6d3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-stone-300/30`, `shadow-[#ad8c6f]/40`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-4`, `gap-3`, `gap-x-4`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ded5cc;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #292524;
  --color-border: #ded5cc;
  --color-accent: #c6aa91;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ded5cc',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#292524',
    line: '#ded5cc',
    accent: '#c6aa91',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the light tan (#c6aa91) for the primary button and small rules
- **Do:** Set headings in Playfair Display, in charcoal, at large size
- **Do:** Keep the portrait on the right half of the hero
- **Don't:** Don't use the tan as a text colour on the beige ground
- **Don't:** Don't add bright colours to the hero or the feature rows
- **Don't:** Don't place the outlined button over the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
