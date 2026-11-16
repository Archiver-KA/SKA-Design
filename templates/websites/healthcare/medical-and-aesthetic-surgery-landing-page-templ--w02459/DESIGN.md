# Design system — Medical and Aesthetic Surgery Landing Page Template

`SN-W02459` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A restrained clinic brochure built on a pale rose-taupe hero, a charcoal serif title and a portrait on the right half. The brown booking button and an outlined partner button sit together, and the section beneath returns to white with a large serif heading. Brown, taupe and charcoal are the whole palette.

**Mood:** restrained, brochure-like, warm, soft, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dfd6d3` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#9a7b60` · `#e7e5e4` · `#44403c` · `#78716c` · `#f8fafc` · `#dfd6d3` · `#332233` · `#323232`.

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
  --color-background: #dfd6d3;
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
    background: '#dfd6d3',
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

- **Do:** Use the brown (#ad8c6f) for the booking button only
- **Do:** Set the title in Playfair Display, in charcoal, at large size
- **Do:** Put the portrait on the right half and the copy on the left
- **Don't:** Don't add a blue or green accent
- **Don't:** Don't place body text over the photograph
- **Don't:** Don't use the brown as a section background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
