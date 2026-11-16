# Design system — EduRise School Solutions Landing Page Template

`SN-W03456` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, product-led page where the hero sits on a lavender and indigo wash with a photograph of students fading behind it. Indigo (#6366f1) is the single accent, used for the main call to action and the emphasis in the copy, while white rounded panels with large 2rem corners keep the lower sections light. The headline is large, centred and set in white over the gradient.

**Mood:** soft, modern, friendly, bright, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e0e7ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#312e81` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#0f172a` · `#475569` · `#64748b` · `#c7d2fe` · `#e2e8f0` · `#000000` · `#312e81` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-md` (6px)
- **Shadows:** `shadow-md`
- **Content width:** `max-w-screen-xl`, `max-w-screen-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e0e7ff;
  --color-surface: #ffffff;
  --color-text: #312e81;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e0e7ff',
    surface: '#ffffff',
    ink: '#312e81',
    muted: '#475569',
    line: '#ffffff',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero headline in white over the lavender gradient
- **Do:** Use indigo (#6366f1) for the primary action and nothing else in the hero
- **Do:** Round large panels to 2rem so they match the hero shape
- **Don't:** Don't place dark text over the lavender photo overlay
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use hard shadows on the rounded panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
