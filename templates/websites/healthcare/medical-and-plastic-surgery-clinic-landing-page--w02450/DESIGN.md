# Design system — Medical & Plastic Surgery Clinic Landing Page Template

`SN-W02450` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A bright, nearly white page with a dark charcoal serif headline and a photograph of a figure on the right. The tan accent (#b08d70) shows only on buttons and small labels, so the layout reads as editorial white space. Thin rules and a centred eyebrow above each section heading keep the page orderly.

**Mood:** clean, editorial, medical, warm, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#b08d70` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#57534e` · `#b08d70` · `#44403c` · `#f8fafc` · `#9a7b60` · `#78716c` · `#332233` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 24px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[#ad8c6f]/40`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-x-3`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. FAQ (`faq`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ad8c6f;
  --color-accent: #b08d70;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ad8c6f',
    accent: '#b08d70',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep sections on white or near-white, with the tan (#b08d70) only on buttons and labels
- **Do:** Centre a small eyebrow label above each section heading
- **Do:** Set headings in Playfair Display in dark charcoal
- **Don't:** Don't set section backgrounds to the brown (#ad8c6f); keep them light
- **Don't:** Don't frame the photograph with shadows
- **Don't:** Don't add blue accents; the palette is tan and charcoal only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
