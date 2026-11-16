# Design system — Moroccan Travel Agency Landing Page Template

`SN-W03120` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, airy hero on warm off-white (#fdfcf8) with a large sans-serif headline in near-black, The spirit of the Maghreb., and a grey intro paragraph beside it. Colour is almost absent: the search field is a white card with a black arrow button, and the page relies on a wide image band below. The look is calm and editorial, carried by type weight and space.

**Mood:** calm, editorial, airy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#fdfcf8` · `#f5f5f5` · `#c7d2fe` · `#a8a29e` · `#4338ca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-sm font-medium px-4 py-2 rounded-full transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #ffedd5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, large, in near-black
- **Do:** Use the black arrow button for search and small actions
- **Do:** Keep the intro paragraph in grey and no longer than three lines
- **Don't:** Don't add colour to the hero; the palette is warm neutrals
- **Don't:** Don't use the pale indigo (#c7d2fe) as a visible accent
- **Don't:** Don't frame images with hard borders; the design uses soft bands

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
