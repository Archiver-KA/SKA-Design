# Design system — Medical and Health Clinic Landing Page Template

`SN-W02460` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale rose-taupe hero with a charcoal serif headline and a short intro, with a portrait photo on the right. Brown is the only button colour, and the team-profile section below opens with a small uppercase label above a serif name. The page is a restrained clinic brochure built from one brown and charcoal.

**Mood:** restrained, warm, clinical-soft, orderly, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dfd6d3` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#57534e` · `#44403c` · `#f8fafc` · `#dfd6d3` · `#e7e5e4` · `#332233` · `#323232` · `#9a7b60`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 16px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[#ad8c6f]/40`
- **Content width:** `max-w-2xl`, `max-w-[230px]`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-3`, `gap-x-3`, `gap-y-3`

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
  --color-muted: #57534e;
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
    muted: '#57534e',
    line: '#ad8c6f',
    accent: '#ad8c6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the brown (#ad8c6f) for the primary button only
- **Do:** Set section titles in Playfair Display, in charcoal, at large size
- **Do:** Lead each profile with a small uppercase label above a serif name
- **Don't:** Don't add blue or green accents
- **Don't:** Don't put body copy over the hero photograph
- **Don't:** Don't set profile names in a sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
