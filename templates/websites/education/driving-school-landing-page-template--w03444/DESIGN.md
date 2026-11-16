# Design system — Driving School Landing Page Template

`SN-W03444` · education · dark mode · Sinera Atlas theme `calm` · language `de`

## Direction

A dark, warm driving-school hero on near-black [#1c1917], with a large bold sans headline where the first line is near-white and the next lines are grey. A solid orange [#f97316] button is the main action, with an outlined button beside it. A rounded photograph of a steering wheel sits at the right, with a small white info card over it.

**Mood:** bold, warm, direct, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f5f5f4` · `#fb923c` · `#000000` · `#78716c` · `#292524` · `#1c1917` · `#d6d3d1` · `#f97316` · `#a8a29e` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium transition-all shadow-lg bg-orange-400 text-black hover:bg-orange-300 shadow-orange-800 hover:shadow-orange-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #f5f5f4;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#f5f5f4',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#292524',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in near-white and the following lines in grey
- **Do:** Use orange (#f97316) for the primary button only
- **Do:** Place rounded photographs at the right with a small white info card over them
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't set the second and third headline lines in orange
- **Don't:** Don't use more than one solid button colour in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
