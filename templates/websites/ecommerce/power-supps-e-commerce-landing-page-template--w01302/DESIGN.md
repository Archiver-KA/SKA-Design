# Design system — Power Supps E-commerce Landing Page Template

`SN-W01302` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold, high-energy supplement storefront on near-black (#020617), with a cyan (#06b6d4) announcement bar and cyan used on heavy italic display type. The headline is set in Archivo caps, with its key word in cyan, and a red (#dc2626) label marks the deals link. Gym photography sits behind a dark gradient, so the hero reads like a training poster.

**Mood:** high-energy, bold, dark, athletic, loud

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#000000` · `#0f172a` · `#64748b` · `#020617` · `#1e293b` · `#94a3b8` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, Kanit
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, black, medium
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(34,211,238,0.5)]`, `shadow-[0_0_20px_rgba(220,38,38,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Marquee (`marquee`)
7. Listings (`listings`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #dc2626;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in cyan (#06b6d4) in heavy italic Archivo caps
- **Do:** Use the cyan bar for live or promotional strips only
- **Do:** Keep red (#dc2626) for deal and sale labels, not for headings
- **Don't:** Don't set the page on light grey; the ground is near-black (#020617)
- **Don't:** Don't put body copy over the photograph without the dark gradient
- **Don't:** Don't use a serif face; all type is Archivo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
