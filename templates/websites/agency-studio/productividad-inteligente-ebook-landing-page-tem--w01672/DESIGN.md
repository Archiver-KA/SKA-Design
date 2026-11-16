# Design system — Productividad Inteligente Ebook Landing Page Template

`SN-W01672` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A clean white page with a dark, medium-weight headline in which one phrase is set in teal (#0d9488). The primary button is solid teal with white text and a trust line beneath it. Type is generous and the layout is simple, with teal used as the single emphasis colour on a white ground.

**Mood:** clean, calm, trustworthy, simple, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#0d9488` · `#e4e4e7` · `#a1a1aa` · `#71717a` · `#52525b` · `#f4f4f5` · `#fafafa` · `#0f766e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Booking form (`booking`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #0d9488;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#0d9488',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Highlight one phrase per headline in teal (#0d9488)
- **Do:** Use a solid teal primary button with white text and a pill radius
- **Do:** Place a small trust line of icons and text under the primary button
- **Don't:** Don't use teal for long body text
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use a dark button as the primary action; the design uses teal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
