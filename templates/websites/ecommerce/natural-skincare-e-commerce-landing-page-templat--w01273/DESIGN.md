# Design system — Natural Skincare E-commerce Landing Page Template

`SN-W01273` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A clean, near-monochrome skincare page: warm off-white (#fafaf9) and near-black text (#1c1917), with the primary button filled in the same dark ink. The headline uses large Inter with a grey second line, so hierarchy comes from size and tone rather than colour. Glow shapes and a floating trust badge add softness, but the look stays restrained.

**Mood:** clean, restrained, scientific, soft, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#78716c` · `#fafaf9` · `#f5f5f4` · `#57534e` · `#292524` · `#a8a29e` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 text-xs font-medium rounded-full hover:bg-stone-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #1c1917;
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
    ink: '#292524',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fill primary buttons in near-black (#1c1917) with white text
- **Do:** Set the second headline line in muted grey (#78716c) for contrast
- **Do:** Place one photo per hero on the right half, at full height
- **Don't:** Don't add green accents.
- **Don't:** Don't use bright colour for CTAs
- **Don't:** Don't stack more than one floating badge over the hero image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
