# Design system — Childcare & Preschool Landing Page Template

`SN-W03423` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright, friendly childcare page on near-white [#f8fafc], with a large sans headline where key words are coloured pink and sky blue. Purple [#a855f7] carries the buttons and the header action, and a round photograph sits in a soft rounded frame. The look is playful and rounded, with a sunny decorative mark in the corner.

**Mood:** playful, bright, soft, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#64748b` · `#0ea5e9` · `#f3e8ff` · `#1e293b` · `#e0f2fe` · `#475569` · `#f0f9ff` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Fredoka, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-[500px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-medium text-base transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/30 flex justify-center items-center gap-2 transform hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Listings (`listings`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour one or two key words in the headline, in pink or sky blue
- **Do:** Use purple (#a855f7) for buttons and the header action
- **Do:** Frame photographs in large rounded shapes
- **Don't:** Don't colour every headline word; keep it to one or two
- **Don't:** Don't use dark backgrounds for hero sections
- **Don't:** Don't mix sharp corners into the rounded framing

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
