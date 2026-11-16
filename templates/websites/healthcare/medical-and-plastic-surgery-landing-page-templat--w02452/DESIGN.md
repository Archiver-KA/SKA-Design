# Design system — Medical & Plastic Surgery Landing Page Template

`SN-W02452` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A pale taupe hero with a roman serif headline in charcoal, and a solid tan button beside an outlined one. A band of three icon-led points sits at the foot of the hero on a near-white ground, separated by thin vertical rules. The page reads as a calm medical brochure, with colour held to the buttons and icons.

**Mood:** calm, refined, quiet, medical, brochure-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ad8c6f` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#b08d70` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#44403c` · `#000000` · `#57534e` · `#b08d70` · `#f8fafc` · `#9a7b60` · `#78716c` · `#332233`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 20px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[#ad8c6f]/40`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-20`
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
  --color-background: #ad8c6f;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #44403c;
  --color-border: #000000;
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
    background: '#ad8c6f',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#44403c',
    line: '#000000',
    accent: '#b08d70',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page title in Playfair Display at large size, in charcoal
- **Do:** Use the tan (#b08d70) for the solid primary button only
- **Do:** Separate the three-point band with thin vertical rules on a light ground
- **Don't:** Don't put the outlined secondary button over a photograph
- **Don't:** Don't use pure black for text; keep it charcoal
- **Don't:** Don't add a fourth accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
