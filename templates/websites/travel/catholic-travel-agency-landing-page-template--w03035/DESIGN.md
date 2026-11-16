# Design system — Catholic Travel Agency Landing Page Template

`SN-W03035` · travel · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A warm cream page with a serif headline in dark brown, its second line in italic bronze (#8c6a48). Actions are solid bronze, and a tall arched photograph frames a distant domed monument, which gives the page a devotional, travel-led look. A thin nav and generous space keep the tone quiet and warm.

**Mood:** warm, devotional, quiet, travel-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#5d4037` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#8c6a48` | Primary action and highlights |

Palette by frequency of use: `#8c6a48` · `#fdfbf7` · `#5d4037` · `#4a342e` · `#ffffff` · `#57534e` · `#ebe5d9` · `#78716c` · `#d6cdbf` · `#c4a484`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[#8C6A48]/10`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="bg-[#8C6A48] hover:bg-[#6F523B] text-white text-sm font-medium py-3 px-6 rounded-lg transition-all shadow-sm shadow-[#8C6A48]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Articles (`blog-articles`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #5d4037;
  --color-border: #ffffff;
  --color-accent: #8c6a48;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#5d4037',
    line: '#ffffff',
    accent: '#8c6a48',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark brown serif (#292524), with the second line in italic bronze (#8c6a48)
- **Do:** Use bronze (#8c6a48) for the primary button and italic emphasis
- **Do:** Frame travel photography in tall arches
- **Don't:** Don't use cold greys on this warm page; keep stone and brown tones
- **Don't:** Don't set the italic line in bold; it stays light
- **Don't:** Don't add a bright accent colour; bronze is the only accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
