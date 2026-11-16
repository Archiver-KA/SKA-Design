# Design system — Tailor Service Landing Page Template

`SN-W04108` · business-services · light mode · Sinera Atlas theme `route` · language `is`

## Direction

A light page on a very pale ground (#fafaf9), with pink (#fb7185) kept to badges and small highlights. Headlines are large sans-serif, with the second line in a lighter warm grey (#78716c), and images and cards sit on the ground with generous rounded corners. The look is calm and clean, with pink as the only warm note.

**Mood:** calm, clean, soft, rounded, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#57534e` · `#fb7185` · `#ffffff` · `#f5f5f4` · `#78716c` · `#fda4af` · `#fafaf9` · `#fff1f2` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 14px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-100/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #f5f5f4;
  --color-accent: #fb7185;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#f5f5f4',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pink (#fb7185) only for badges and small highlights
- **Do:** Set the second headline line in a lighter warm grey (#78716c)
- **Do:** Give cards and images generous rounded corners on the pale ground
- **Don't:** Don't use pink for large background areas
- **Don't:** Don't stack several pink elements in one section
- **Don't:** Don't add dark sections to this light layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
