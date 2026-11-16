# Design system — Organic Food E-commerce Landing Page Template

`SN-W01284` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet, editorial food page on a warm off-white ground (#faf9f6) with near-black type. The hero is a soft grey-beige gradient with a large, tightly set serif headline and a small tracked uppercase eyebrow line above it. One dark pill button is the only strong shape, so the page's authority comes from restraint and whitespace.

**Mood:** restrained, editorial, calm, natural, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#fafaf9` · `#57534e` · `#292524` · `#78716c` · `#ffffff` · `#faf9f6` · `#f5f5f4` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[100vw]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center px-8 py-3 bg-stone-900 text-[#FAF9F6] text-sm font-medium tracking-wide rounded-full transition-all duration-300 group hover:text-stone-50 hover:bg-stone-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #f5f5f4;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#f5f5f4',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large serif with tight leading in #1c1917
- **Do:** Use small tracked uppercase for the eyebrow line above each headline
- **Do:** Keep one dark pill button per hero as the only strong colour block
- **Don't:** Don't add yellow highlights.
- **Don't:** Don't set the hero headline in sans-serif
- **Don't:** Don't add more than one decorative shape to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
