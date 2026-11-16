# Design system — Creative Stationery Landing Page Template

`SN-W01908` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pt-br`

## Direction

A pale, airy landing page with a bold near-black sans headline whose middle line is set in teal (#14b8a6). The primary button is a solid teal pill, the secondary is an outline pill, and a rounded product card sits on the right with a small tag. Colour is used for one phrase and one button per section, so the page feels clean and friendly rather than busy.

**Mood:** clean, friendly, calm, handcrafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#14b8a6` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#f4f4f5` · `#52525b` · `#14b8a6` · `#e4e4e7` · `#a1a1aa` · `#71717a` · `#fafafa` · `#0d9488`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Inter
- **Loaded families:** Inter, Outfit, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-teal-600/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Contact form (`contact-form`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #14b8a6;
  --color-accent-2: #f43f5e;
  --font-display: "Outfit", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#14b8a6',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Outfit'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold near-black sans, with the middle phrase in teal (#14b8a6).
- **Do:** Use teal (#14b8a6) for the primary button and one highlight per section.
- **Do:** Keep the product cards on the right as rounded panels with a small tag.
- **Don't:** Don't add the rose accent (#f43f5e) beside the teal.
- **Don't:** Don't set body copy in teal; it stays grey.
- **Don't:** Don't replace the pill buttons with square ones.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
