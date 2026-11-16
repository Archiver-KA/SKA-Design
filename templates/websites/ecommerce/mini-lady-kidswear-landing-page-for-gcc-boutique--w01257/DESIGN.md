# Design system — Mini Lady Kidswear Landing Page for GCC Boutiques & Wholesalers

`SN-W01257` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, feminine hero on white: a large bold sans headline filled with a pink-to-violet gradient, and a pink subhead beneath it. A solid pink pill button sits beside a white outlined pill, and a faint pastel glow sits behind the image slot. Pink is the single accent.

**Mood:** playful, soft, feminine, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#db2777` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#db2777` · `#f1f5f9` · `#64748b` · `#ec4899` · `#e2e8f0` · `#94a3b8` · `#f8fafc` · `#fce7f3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 36px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-[400px]`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
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
  --color-accent: #db2777;
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
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#db2777',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pink (#db2777) for the headline gradient, the subhead and the primary button
- **Do:** Keep the hero on white with a faint pastel glow behind the image
- **Do:** Set headlines in a bold sans with the gradient running across the words
- **Don't:** Don't use navy for text here; the page is pink on white
- **Don't:** Don't leave the hero image placeholder in place
- **Don't:** Don't add a second accent beside the pink

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
