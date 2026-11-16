# Design system — Sea Moss E-commerce Landing Page Template

`SN-W01316` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bright, clean wellness landing page on a near-white ground with a faint cool wash. The headline is large dark navy sans-serif at regular weight, and the phrase 'bottled fresh.' is picked out in teal (#14b8a6), the only colour in the type. Buttons are dark pills with a white secondary pill, and a product jar in a rounded photo card carries the page.

**Mood:** fresh, clean, clinical, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#14b8a6` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#64748b` · `#ffffff` · `#0d9488` · `#e2e8f0` · `#14b8a6` · `#f1f5f9` · `#94a3b8` · `#475569` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-slate-200`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 rounded-lg bg-white text-slate-500 text-sm font-medium border border-slate-200 hover:border-slate-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Testimonials (`testimonials`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #14b8a6;
  --color-accent-2: #e2e8f0;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#14b8a6',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark navy (#0f172a) and pick out one phrase in teal (#14b8a6)
- **Do:** Use dark pill buttons for primary actions and a white pill for secondary
- **Do:** Frame the product photograph in a rounded card with generous padding
- **Don't:** Don't use teal for body copy or large fills; it is a highlight colour
- **Don't:** Don't put dark section backgrounds in the page; the look is light throughout
- **Don't:** Don't set the hero headline in bold weights; it stays at regular weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
