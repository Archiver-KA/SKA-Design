# Design system — Medical & Plastic Surgery

`SN-W02449` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A warm beige page with a large charcoal serif headline and a soft blurred glow behind the hero copy. Brown is the single strong colour, used for the primary button, and the rest is taupe and off-white. Thin hairline dividers and a three-column row of icons with serif titles organise the content below the hero.

**Mood:** warm, soft, refined, quiet, medical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ded5cc` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#292524` | Secondary copy, captions |
| Border | `#ded5cc` | Hairlines, dividers, outlines |
| Accent | `#c6aa91` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#292524` · `#ded5cc` · `#000000` · `#57534e` · `#f5f5f4` · `#d6d3d1` · `#cbb7a3` · `#c6aa91`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-stone-300/30`
- **Content width:** `max-w-2xl`, `max-w-[230px]`
- **Section padding:** `py-14`, `py-20`
- **Common gaps:** `gap-4`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

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

- **Do:** Set the hero headline in Playfair Display at large size, in charcoal
- **Do:** Use the brown (#ad8c6f) only for the primary button
- **Do:** Separate the feature row with hairline dividers in the border tone (#ded5cc)
- **Don't:** Don't add a bright accent colour; the page is beige, brown and charcoal
- **Don't:** Don't use heavy shadows on the glow or on cards
- **Don't:** Don't set body copy in mid grey on the beige; keep it near charcoal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
